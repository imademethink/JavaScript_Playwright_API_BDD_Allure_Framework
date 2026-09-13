import { test, expect } from '@playwright/test';
import { createTestData } from '../utils/test-data.js';

test.describe.configure({ mode: 'serial' });

test('1 - POST create user', async ({ request }) => {
    const data = createTestData();
    test.info().annotations.push({ type: 'test-data', description: JSON.stringify({ email: data.email }) });

    const response = await request.post('users/register', {
        data: {
            name: data.name,
            email: data.email,
            password: data.password
        }
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(201);
    expect(body.message).toBe('User account created successfully');
    expect(body.data.id).toBeDefined();

    test.info().annotations.push({ type: 'response', description: JSON.stringify(body) });
});

test('2 - POST user login', async ({ request }) => {
    const data = createTestData();
    const register = await request.post('users/register', { data: { name: data.name, email: data.email, password: data.password } });
    expect(register.status()).toBe(201);

    const response = await request.post('users/login', {
        data: { email: data.email, password: data.password }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(200);
    expect(body.message).toBe('Login successful');
    expect(body.data.id).toBeDefined();
    expect(body.data.name).toBeDefined();
    expect(body.data.email).toBeDefined();
    expect(body.data.token).toBeDefined();
});

test('3 - DELETE user logout', async ({ request }) => {
    const data = createTestData();
    await request.post('users/register', { data: { name: data.name, email: data.email, password: data.password } });
    const login = await request.post('users/login', { data: { email: data.email, password: data.password } });
    const loginBody = await login.json();

    const response = await request.delete('users/logout', {
        headers: { 'X-Auth-Token': loginBody.data.token },
        data: { email: data.email, password: data.password }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(200);
    expect(body.message).toBe('User has been successfully logged out');
});

test('4 - GET user profile', async ({ request }) => {
    const data = createTestData();
    await request.post('users/register', { data: { name: data.name, email: data.email, password: data.password } });
    const login = await request.post('users/login', { data: { email: data.email, password: data.password } });
    const loginBody = await login.json();

    const response = await request.get('users/profile', {
        headers: { 'X-Auth-Token': loginBody.data.token },
        data: { email: data.email, password: data.password }
    });

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(200);
    expect(body.message).toBe('Profile successful');
    expect(body.data.id).toBeDefined();
    expect(body.data.name).toBeDefined();
    expect(body.data.email).toBeDefined();
});

test('5 - POST forgot password', async ({ request }) => {
    const data = createTestData();
    await request.post('users/register', { data: { name: data.name, email: data.email, password: data.password } });
    const login = await request.post('users/login', { data: { email: data.email, password: data.password } });
    const loginBody = await login.json();

    const response = await request.post('users/forgot-password', {
        headers: { 'X-Auth-Token': loginBody.data.token },
        data: { email: data.email }
    });

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(200);
    expect(body.message).toContain('Password reset link successfully sent to');
});

test('6 - POST change password', async ({ request }) => {
    const data = createTestData();
    await request.post('users/register', { data: { name: data.name, email: data.email, password: data.password } });
    const login = await request.post('users/login', { data: { email: data.email, password: data.password } });
    const loginBody = await login.json();

    const response = await request.post('users/change-password', {
        headers: { 'X-Auth-Token': loginBody.data.token },
        data: { currentPassword: data.password, newPassword: data.passwordNew }
    });

    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(200);
    expect(body.message).toBe('The password was successfully updated');
});

test('7 - DELETE account', async ({ request }) => {
    const data = createTestData();
    await request.post('users/register', { data: { name: data.name, email: data.email, password: data.password } });
    const login = await request.post('users/login', { data: { email: data.email, password: data.password } });
    const loginBody = await login.json();

    const response = await request.delete('users/delete-account', {
        headers: { 'X-Auth-Token': loginBody.data.token }
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.success).toBe(true);
    expect(body.status).toBe(200);
    expect(body.message).toBe('Account successfully deleted');
});
