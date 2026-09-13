import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class LoginApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async login(data) {
        const headers = {};
        const body = { email: data.email, password: data.password };
        const response = await this.request.post('users/login', { headers, data: body });
        this.printRequest('POST', 'users/login', headers, body);
        return response;
    }

    async validate(response, validUser = true, data) {
        const body = await this.readJson(response);

        if (validUser) {
            expect(response.status()).toBe(200);
            expect(body.success).toBe(true);
            expect(body.status).toBe(200);
            expect(body.message).toBe('Login successful');
            expect(body.data.id).toBeDefined();
            expect(body.data.name).toBeDefined();
            expect(body.data.email).toBeDefined();
            expect(body.data.token).toBeDefined();

            if (data) {
                data.token = body.data.token;
            }
        } else {
            expect(response.status()).toBe(401);
            expect(body.success).toBe(false);
            expect(body.status).toBe(401);
            expect(body.message).toBe('Incorrect email address or password');
        }
    }
}
