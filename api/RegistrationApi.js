import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class RegistrationApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async register(data) {
        const headers = {};
        const body = { name: data.name, email: data.email, password: data.password };
        const response = await this.request.post('users/register', { headers, data: body });
        this.printRequest('POST', 'users/register', headers, body);
        return response;
    }

    async validate(response) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(201);
        expect(body.success).toBe(true);
        expect(body.status).toBe(201);
        expect(body.message).toBe('User account created successfully');
        expect(body.data.id).toBeDefined();
    }
}
