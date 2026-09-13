import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class ChangePasswordApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async changePassword(data) {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { currentPassword: data.password, newPassword: data.passwordNew };
        const response = await this.request.post('users/change-password', { headers, data: body });
        this.printRequest('POST', 'users/change-password', headers, body);
        return response;
    }

    async validate(response, data) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('The password was successfully updated');
        data.password = data.passwordNew;
    }
}
