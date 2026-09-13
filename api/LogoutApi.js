import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class LogoutApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async logout(data) {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { email: data.email, password: data.password };
        const response = await this.request.delete('users/logout', { headers, data: body });
        this.printRequest('DELETE', 'users/logout', headers, body);
        return response;
    }

    async validate(response) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('User has been successfully logged out');
    }
}
