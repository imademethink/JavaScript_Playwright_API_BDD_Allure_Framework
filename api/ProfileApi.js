import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class ProfileApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async getProfile(data) {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { email: data.email, password: data.password };
        const response = await this.request.get('users/profile', { headers, data: body });
        this.printRequest('GET', 'users/profile', headers, body);
        return response;
    }

    async validate(response) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('Profile successful');
        expect(body.data.id).toBeDefined();
        expect(body.data.name).toBeDefined();
        expect(body.data.email).toBeDefined();
    }
}
