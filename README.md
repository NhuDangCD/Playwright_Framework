# Playwright Testing Framework with Angular Demo App

This is a comprehensive Playwright testing framework that includes a modified Angular 14 application for practicing and demonstrating UI test automation.

## Overview

This repository contains:
- **Playwright Testing Framework**: A complete Page Object Model (POM) based test automation framework
- **Angular Demo Application**: A modified version of ngx-admin used as the application under test
- **Test Examples**: Various test scenarios demonstrating best practices in UI automation

## Architecture

### Testing Framework Structure
```
├── tests/                  # Test specifications
├── page-objects/          # Page Object Model classes
├── test-data/            # Test data storage (user credentials, etc.)
├── playwright.config.ts  # Playwright configuration
└── CLAUDE.md            # AI assistance documentation
```

### Application Under Test
The Angular application is a modified, lightweight version of the original ngx-admin application from akveo.com, included here for testing purposes.

Original repository: https://github.com/akveo/ngx-admin

## Features

### Test Framework Features
- ✅ Page Object Model (POM) architecture
- ✅ Base URL configuration for easy environment switching
- ✅ Random test data generation
- ✅ User data persistence between test runs
- ✅ Reusable page components and helper methods
- ✅ Cross-browser testing support (Chrome, Firefox, Safari)

### Test Coverage
- Registration and Login flows
- Form interactions
- Date picker functionality
- Smart table operations
- Tooltip interactions
- Temperature slider controls

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/NhuDangCD/Playwright_Framework.git
cd Playwright_Framework
```

2. Install dependencies:
```bash
npm install --force
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Running the Application

Start the Angular development server:
```bash
npm start
```
The application will be available at http://localhost:4200

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/registerPage.spec.ts
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
```

### View test report
```bash
npx playwright show-report
```

## Test Data Management

The framework automatically:
- Generates random user data for each test run
- Saves registered users to `test-data/userData.json`
- Reuses saved credentials for login tests

Example of generated user data:
```json
{
  "fullName": "Emma Williams",
  "email": "emma.williams924@test.com",
  "password": "Welcome924!"
}
```

## Writing New Tests

1. Create a new test file in `tests/` directory
2. Create corresponding page objects in `page-objects/`
3. Use the established patterns:

```typescript
import { test, expect } from '@playwright/test'
import { YourPage } from '../page-objects/yourPage'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('your test description', async ({ page }) => {
    const yourPage = new YourPage(page)
    // Your test logic here
})
```

## Configuration

Main configuration file: `playwright.config.ts`

Key settings:
- Base URL: `http://localhost:4200`
- Default timeout: 30 seconds
- Parallel execution enabled
- HTML reporter configured

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project includes code from:
- Original ngx-admin by akveo.com (MIT License)
- Modifications and test framework by NhuDangCD

## Author

**Nhu Dang**
- GitHub: [@NhuDangCD](https://github.com/NhuDangCD)

## Acknowledgments

- Original Angular application by [Akveo](https://github.com/akveo/ngx-admin)
- Built with [Playwright](https://playwright.dev/)
- Uses [Nebular](https://akveo.github.io/nebular/) UI components