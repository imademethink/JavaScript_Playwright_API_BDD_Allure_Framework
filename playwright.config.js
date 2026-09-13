import 'dotenv/config';
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddTestDir = defineBddConfig({
    features: 'features/**/*.feature',
    steps: 'steps/**/*.js',
    outputDir: '.features-gen'
});

export default defineConfig({
    timeout: 30000,
    fullyParallel: false,
    workers: 1,
    retries: 0,
    reporter: [
        ['line'],
        ['allure-playwright', { resultsDir: 'allure-results' }]
    ],
    use: {
        baseURL: process.env.BASE_URL || 'https://practice.expandtesting.com/notes/api/',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    projects: [
        {
            name: 'bdd',
            testDir: bddTestDir
        },
        {
            name: 'api-independent',
            testDir: './tests'
        }
    ]
});
