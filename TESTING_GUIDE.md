# Testing Guide

This document provides instructions for running the existing end-to-end (e2e) tests for the Web Prototyping Tool.

## 1. Setting up the Environment

Before running the e2e tests, you will need to set up the testing environment. This involves the following steps:

### 1.1. Install Dependencies

- **Install all of the project's dependencies:**
  ```bash
  npm install
  ```

### 1.2. Install ChromeDriver

- **Install the correct version of ChromeDriver:** The e2e tests require a specific version of ChromeDriver to be installed.
  ```bash
  npm run install-e2e-chrome
  ```

## 2. Running the Tests

Once the environment has been set up, you can run the e2e tests using the following command:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run e2e:headless
```

**Note:** The `--openssl-legacy-provider` flag is required due to an incompatibility between the version of Node.js in the environment and the older version of Webpack used by Angular 12.

## 3. Current Status and Recommendations

As of October 2025, the existing e2e test suite is not passing. The tests are timing out while waiting for certain elements to appear on the page. This is likely due to a combination of factors, including the use of a deprecated testing framework (Protractor) and potential race conditions in the tests themselves.

Given the current state of the test suite, it is recommended to migrate to a modern e2e testing framework like Cypress or Playwright. This will provide a more reliable and stable testing environment and will be a better investment of time and resources than trying to fix the existing tests. A detailed plan for this migration can be found in the `OPTIMIZATIONS.md` guide.

## 4. Screenshots

As the e2e tests are not currently running, I am unable to provide screenshots of the application. However, once the test suite has been migrated to a modern framework and the tests are passing, screenshots should be taken and added to this guide.
