import { faker } from '@faker-js/faker';
import { config, endpoints } from '../config/config.js';

export function createTestData() {
    return {
        name: config.name,
        email: faker.internet.email(),
        password: config.password,
        passwordNew: config.newPassword
    };
}

export { endpoints };
