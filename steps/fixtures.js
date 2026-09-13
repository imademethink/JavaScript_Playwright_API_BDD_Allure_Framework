import { createTestData } from '../utils/test-data.js';
import { test as base, createBdd } from 'playwright-bdd';

export const test = base.extend({
    scenarioState: async ({}, use) => {
        await use({ data: createTestData() });
    }
});

export const { Given, When, Then, Before } = createBdd(test);
