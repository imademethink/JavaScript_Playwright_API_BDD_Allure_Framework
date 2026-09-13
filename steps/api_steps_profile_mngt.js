import { Given, When, Then } from './fixtures.js';
import { RegistrationApi } from '../api/RegistrationApi.js';
import { LoginApi } from '../api/LoginApi.js';
import { LogoutApi } from '../api/LogoutApi.js';
import { ProfileApi } from '../api/ProfileApi.js';
import { ForgotPasswordApi } from '../api/ForgotPasswordApi.js';
import { ChangePasswordApi } from '../api/ChangePasswordApi.js';
import { DeleteAccountApi } from '../api/DeleteAccountApi.js';
import { attachResponse } from '../utils/reporting.js';

Given('Complete formal registration', async ({ request, scenarioState }) => {
    console.log('    Step:: Complete formal registration');
    const api = new RegistrationApi(request);
    scenarioState.response = await api.register(scenarioState.data);
    await api.validate(scenarioState.response);
});

When('Process profile login', async ({ request, scenarioState }) => {
    console.log('    Step:: Process profile login');
    const api = new LoginApi(request);
    scenarioState.response = await api.login(scenarioState.data);
});

Then('Validate response for login', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for login');
    const api = new LoginApi(request);
    await api.validate(scenarioState.response, true, scenarioState.data);
    await attachResponse($testInfo, scenarioState.response);
});

When('Complete formal login', async ({ request, scenarioState }) => {
    console.log('    Step:: Complete formal login');
    const api = new LoginApi(request);
    scenarioState.response = await api.login(scenarioState.data);
    await api.validate(scenarioState.response, true, scenarioState.data);
});

When('Process profile logout', async ({ request, scenarioState }) => {
    console.log('    Step:: Process profile logout');
    const api = new LogoutApi(request);
    scenarioState.response = await api.logout(scenarioState.data);
});

Then('Validate response for logout', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for logout');
    const api = new LogoutApi(request);
    await api.validate(scenarioState.response);
    await attachResponse($testInfo, scenarioState.response);
});

When('Complete formal logout', async ({ request, scenarioState }) => {
    console.log('    Step:: Complete formal logout');
    const api = new LogoutApi(request);
    scenarioState.response = await api.logout(scenarioState.data);
    await api.validate(scenarioState.response);
});


When('Process get profile', async ({ request, scenarioState }) => {
    console.log('    Step:: Process get profile');
    const api = new ProfileApi(request);
    scenarioState.response = await api.getProfile(scenarioState.data);
});

Then('Validate response for get profile', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for get profile');
    const api = new ProfileApi(request);
    await api.validate(scenarioState.response);
    await attachResponse($testInfo, scenarioState.response);
});

When('Process forget password', async ({ request, scenarioState }) => {
    console.log('    Step:: Process forget password');
    const api = new ForgotPasswordApi(request);
    scenarioState.response = await api.forgotPassword(scenarioState.data);
});

Then('Validate response for forget password', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for forget password');
    const api = new ForgotPasswordApi(request);
    await api.validate(scenarioState.response);
    await attachResponse($testInfo, scenarioState.response);
});

When('Process change password', async ({ request, scenarioState }) => {
    console.log('    Step:: Process change password');
    const api = new ChangePasswordApi(request);
    scenarioState.response = await api.changePassword(scenarioState.data);
});

Then('Validate response for change password', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for change password');
    const api = new ChangePasswordApi(request);
    await api.validate(scenarioState.response, scenarioState.data);
    await attachResponse($testInfo, scenarioState.response);
});

When('Process delete account', async ({ request, scenarioState }) => {
    console.log('    Step:: Process delete account');
    const api = new DeleteAccountApi(request);
    scenarioState.response = await api.deleteAccount(scenarioState.data);
});

Then('Validate response for delete account', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for delete account');
    const api = new DeleteAccountApi(request);
    await api.validate(scenarioState.response);
    await attachResponse($testInfo, scenarioState.response);
});

Then('Validate response for invalid login', async ({ request, scenarioState, $testInfo }) => {
    console.log('    Step:: Validate response for invalid login');
    const api = new LoginApi(request);
    scenarioState.response = await api.login(scenarioState.data);
    await api.validate(scenarioState.response, false);
    await attachResponse($testInfo, scenarioState.response);
});
