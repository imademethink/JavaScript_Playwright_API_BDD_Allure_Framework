# 🚀 JavaScript Playwright API BDD Allure Reporting Framework

### Beginner-Friendly JavaScript API Automation Framework

<img width="1672" height="941" alt="Ready To Use Automation Framework JavaScript, Playwright, API, BDDgen" src="https://github.com/user-attachments/assets/c47da90b-dbda-4849-abc7-95d544f89d6c" />


Build simple and maintainable API automation using **JavaScript, Playwright APIRequest, BDD/Gherkin, playwright-bdd, Faker, and Allure Reporting**.

---

## 📖 About

The main goal is **simplicity**. A beginner should be able to open the project in VS Code, understand the flow, change an API request, add a feature, and run the tests without learning complicated framework patterns.

The framework uses:

- JavaScript
- Playwright APIRequestContext
- BDD / Gherkin
- playwright-bdd
- Playwright Test
- Allure Reporting
- Faker test data
- dotenv environment configuration
- Simple API classes
- API response attachments
- Tag-based execution

> **Simple code is more important than clever code.**

---

## ✨ Features

- 🌐 Playwright API automation
- 🥒 BDD / Gherkin feature files
- 🧩 playwright-bdd
- 📊 Allure reporting
- 📎 API response attachments
- 🎲 Random test data using Faker
- 🌍 `.env` configuration
- 🔐 Token-based authentication
- 🏷️ BDD tag execution
- 🧪 Positive and negative scenarios
- 🧱 Simple API classes
- 🧹 Clean generated files
- 🟢 Beginner-friendly JavaScript

---

## 🏗 Framework Architecture

The framework follows a simple flow:

```text
Feature File
    ↓
Step Definition
    ↓
API Class
    ↓
Playwright APIRequestContext
    ↓
REST API
    ↓
Playwright Assertions
    ↓
Allure Report
```

---

## 📁 Project Structure

```text
JavaScript_Playwright_API_BDD_Allure_Framework/
│
├── api/
│   ├── BaseApi.js
│   ├── RegistrationApi.js
│   ├── LoginApi.js
│   ├── LogoutApi.js
│   ├── ProfileApi.js
│   ├── ForgotPasswordApi.js
│   ├── ChangePasswordApi.js
│   └── DeleteAccountApi.js
│
├── config/
│   └── config.js
│
├── features/
│   ├── Demo.feature
│   └── DemoProfileMngt.feature
│
├── steps/
│   ├── fixtures.js
│   ├── api_steps.js
│   └── api_steps_profile_mngt.js
│
├── tests/
│   └── api-independent.spec.js
│
├── utils/
│   ├── reporting.js
│   └── test-data.js
│
├── scripts/
│   └── clean.js
│
├── .env.example
├── package.json
├── package-lock.json
├── playwright.config.js
├── tsconfig.json
└── README.md
```

`tsconfig.json` is retained only for editor/TypeScript tooling compatibility. The framework source code is JavaScript.

---

# 📂 Folder Responsibilities

### `features/`

Contains Gherkin feature files.

Example:

```gherkin
@case1
Scenario: Registration and Login validation
  Given Complete formal registration
  When Process profile login
  Then Validate response for login
```

### `steps/`

Connects Gherkin steps to JavaScript code.

### `api/`

Contains simple API classes. Each class handles one API area.

### `utils/`

Contains reusable utilities such as test-data creation and Allure response attachments.

### `config/`

Contains environment-based configuration and endpoint names.

### `tests/`

Contains normal Playwright API tests that do not use Gherkin.

---

# 📡 Playwright API Automation

The framework uses Playwright's built-in API request functionality.

Example:

```javascript
const response = await request.post('users/login', {
    data: {
        email: data.email,
        password: data.password
    }
});

expect(response.status()).toBe(200);
```

No Axios or another API library is required.

---

# 🔐 Authentication Flow

The sample API returns a token after login.

```text
Registration
     ↓
Login
     ↓
Token
     ↓
X-Auth-Token
     ↓
Profile / Logout / Password / Delete
```

The token is stored in the scenario data object and reused by later API calls.

---

# 🧪 API Coverage

The migrated framework preserves the original API coverage:

| API | Method | Purpose |
|---|---|---|
| Registration | POST | Create user |
| Login | POST | Authenticate user |
| Logout | DELETE | Logout user |
| Profile | GET | Get profile |
| Forgot Password | POST | Request password reset |
| Change Password | POST | Change password |
| Delete Account | DELETE | Delete account |

---

# 🥒 BDD Scenarios

The original feature files and scenario names are preserved.

`Demo.feature` contains the simple registration scenario.

`DemoProfileMngt.feature` contains the registration, login, logout, profile, password, delete-account, and negative-login workflows.

---

# 🏷️ Tags

The original tags are preserved:

```text
@simple
@case1
@case2
@case3
@case4
@case5
@case6
@case7
```

Run the simple smoke scenario:

```bash
npm run test:smoke
```

Run case 1:

```bash
npm run test:case1
```

Run the regression scenarios:

```bash
npm run test:regression
```

The tag commands generate only the requested BDD tests and run the BDD project.

---

# 📊 Allure Reporting

Allure results are written to:

```text
allure-results/
```

Generate the HTML report:

```bash
npm run allure:generate
```

Open the report:

```bash
npm run allure:open
```

API response bodies are attached to BDD test results where appropriate.

---

# 🌍 Environment Configuration

Copy `.env.example` to `.env`.

Example:

```text
BASE_URL=https://practice.expandtesting.com/notes/api/
NAME=Jon Doe
PASSWORD=Demo1234
NEW_PASSWORD=Demo9999
```

Do not commit real passwords or other secrets.

---

# 📦 Installation

### 1. Install Node.js

Use a current LTS version of Node.js.

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

For this API-only framework, browsers are not required by the API requests themselves, but installing Playwright normally is recommended for a standard Playwright project setup.

---

# ▶️ Run Tests

Run all BDD and independent API tests:

```bash
npm test
```

Run only the independent Playwright API suite:

```bash
npm run test:independent
```

You can also run the independent suite directly:

```bash
npx playwright test api-independent.spec.js --project=api-independent
```

Generate BDD tests only:

```bash
npm run bddgen
```

---

# 🧹 Clean Generated Files

```bash
npm run clean
```

This removes generated folders such as:

```text
allure-results/
allure-report/
test-results/
playwright-report/
.features-gen/
```

Source files are not deleted.

---

# 📦 NPM Scripts

| Command | Purpose |
|---|---|
| `npm run bddgen` | Generate Playwright tests from Gherkin |
| `npm test` | Run BDD and independent tests |
| `npm run test:smoke` | Run `@simple` / `@smoke` BDD tests |
| `npm run test:case1` | Run `@case1` BDD tests |
| `npm run test:regression` | Run `@case1` through `@case7` |
| `npm run test:independent` | Run normal Playwright API tests |
| `allure generate path\to\allure-results -o allure-report --clean` | Generate Allure HTML report |
| `allure open allure-report` | Open Allure report |

---

# 🧑‍🎓 Beginner JavaScript Concepts Used

The framework intentionally uses basic JavaScript:

### Variables

```javascript
const response = await request.post(...);
```

### Objects

```javascript
const data = {
    email: 'test@example.com',
    password: 'Demo1234'
};
```

### Classes

```javascript
export class LoginApi {
    constructor(request) {
        this.request = request;
    }
}
```

### Async / Await

```javascript
const response = await this.request.post(...);
```

### Imports / Exports

```javascript
import { LoginApi } from '../api/LoginApi.js';
```

No advanced JavaScript patterns are required.

---

# 🎯 Why This Framework Is Beginner-Friendly

- Small classes
- Simple methods
- Straightforward API requests
- Clear assertions
- Minimal abstraction
- No Axios
- No complex design patterns
- No dependency injection
- No unnecessary interfaces

The intention is that a beginner can follow one API request from the feature file all the way to the REST API.

---

# 🔍 Execution Flow Example

For:

```gherkin
Given Complete formal registration
When Process profile login
Then Validate response for login
```

The execution is:

```text
DemoProfileMngt.feature
        ↓
api_steps_profile_mngt.js
        ↓
RegistrationApi.js
        ↓
LoginApi.js
        ↓
Playwright request
        ↓
Practice API
        ↓
Playwright expect()
        ↓
Allure
```

---

# 🧪 Independent API Tests

The framework also preserves the original independent Playwright suite:

```text
1 - POST create user
2 - POST user login
3 - DELETE user logout
4 - GET user profile
5 - POST forgot password
6 - POST change password
7 - DELETE account
```

Run it with:

```bash
npx playwright test api-independent.spec.js --project=api-independent
```

---

# ⚠️ Validation Note

The framework has been converted and its JavaScript syntax and project structure were checked in the available environment.

Full API execution depends on installing the npm dependencies and having network access to the sample API from the machine running the tests. The framework should therefore be validated locally with:

```bash
npm install
npx playwright install
npm run bddgen
npm test
npm run test:smoke
npm run test:regression
npm run allure:generate
```

---

# 🚀 Future Enhancements

Possible future additions include:

- Multiple environments
- More API scenarios
- JSON schema validation
- Request/response logging
- CI/CD integration
- Parallel execution
- Additional Allure attachments
- API contract testing

These can be added later without changing the basic architecture.

---

# 🤝 Contributing

Keep contributions simple and readable.

Prefer:

> **Readable code over clever code.**

---
