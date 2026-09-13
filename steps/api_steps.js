import { Given, When, Then } from './fixtures.js';
import { expect } from '@playwright/test';
import { RegistrationApi } from '../api/RegistrationApi.js';
import { attachResponse } from '../utils/reporting.js';

Given('Prepare header and payload for registration', async ({ scenarioState }) => {
    expect(scenarioState.data.email).toBeDefined();
    console.log('Step:: Prepare header and payload for registration');
});

When('Call api registration', async ({ request, scenarioState }) => {
    console.log('Step:: Call api registration');
    const api = new RegistrationApi(request);
    scenarioState.response = await api.register(scenarioState.data);
});

Then('Validate response for registration', async ({ request, scenarioState, $testInfo }) => {
    console.log('Step:: Validate response for registration');
    const api = new RegistrationApi(request);
    await api.validate(scenarioState.response);
    await attachResponse($testInfo, scenarioState.response);
});
