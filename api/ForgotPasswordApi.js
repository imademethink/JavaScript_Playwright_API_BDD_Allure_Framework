import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class ForgotPasswordApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async forgotPassword(data) {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { email: data.email };
        const response = await this.request.post('users/forgot-password', { headers, data: body });
        this.printRequest('POST', 'users/forgot-password', headers, body);
        return response;
    }

    async validate(response) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toContain('Password reset link successfully sent to');
    }
}
