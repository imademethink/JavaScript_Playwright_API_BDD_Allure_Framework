import fs from 'fs';
import path from 'path';

const folders = [
    'allure-results',
    'allure-report',
    'test-results',
    'playwright-report',
    '.features-gen'
];

for (const folder of folders) {
    const folderPath = path.join(process.cwd(), folder);

    if (fs.existsSync(folderPath)) {
        fs.rmSync(folderPath, { recursive: true, force: true });
    }
}

console.log('Generated files cleaned successfully.');
