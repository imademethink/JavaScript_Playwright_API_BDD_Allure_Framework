import { expect } from '@playwright/test';
import { BaseApi } from './BaseApi.js';

export class DeleteAccountApi extends BaseApi {
    constructor(request) {
        super(request);
    }

    async deleteAccount(data) {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = {};
        const response = await this.request.delete('users/delete-account', { headers, data: body });
        this.printRequest('DELETE', 'users/delete-account', headers, body);
        return response;
    }

    async validate(response) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('Account successfully deleted');
    }
}
