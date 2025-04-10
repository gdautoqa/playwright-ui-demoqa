# DemoQA UI Automation

This project is a Playwright UI automation suite for [DemoQA](https://demoqa.com/). The suite uses Playwright's features to build tests that are reliable and easy to maintain. Tests are organized using the Page Object Model (POM), leverage auto-waiting mechanisms, and are written in strict TypeScript for clarity and consistency.

## Project Structure

- **src/pages/**: Contains page objects (e.g., `BasePage.ts`, `WebTablesPage.ts`, `ButtonsPage.ts`, etc.).
- **src/tests/**: Contains test files that verify page behavior and UI interactions.
- **playwright.config.ts**: The Playwright configuration file defining global settings and a browser matrix (Chromium, Firefox, WebKit, Pixel 8, iPhone 15).
- **.github/workflows/**: Contains GitHub Actions workflows for continuous integration and scheduled test runs.

## Features

- **Multi-Browser Testing**: Tests run across multiple browsers configured in the Playwright matrix.
- **Page Object Model (POM)**: Encapsulates page-specific logic into dedicated classes for better organization and reusability.
- **Auto Waiting**: Utilizes Playwright's built-in auto waiting methods for robust element interactions.
- **CI Integration**: Automated tests run on every push and pull request, with a scheduled run every Thursday at 7am EDT via GitHub Actions.

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install dependencies:**

   ```bash
   npm ci
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install --with-deps
   ```

## Running Tests

- **Run all tests:**
  ```bash
  npx playwright test
  ```

## GitHub Actions

The GitHub Actions workflow (`.github/workflows/playwright-demo-qa.yml`) runs tests on all configured browsers and is scheduled to run every Thursday at 7am EDT.
