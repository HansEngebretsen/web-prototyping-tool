# Testing Guide

This document provides instructions for running the existing end-to-end (e2e) tests for the Web Prototyping Tool. It also includes a detailed analysis of the current state of the test suite and a prescriptive plan for migrating to a modern testing framework.

## 1. Running the Existing Tests

The following steps can be taken to run the existing e2e tests:

### 1.1. Set up the Environment

- **Install all of the project's dependencies:**
  ```bash
  npm install
  ```

- **Install the correct version of ChromeDriver:**
  ```bash
  npm run install-e2e-chrome
  ```

### 1.2. Run the Tests

- **Run the e2e tests in headless mode:**
  ```bash
  NODE_OPTIONS=--openssl-legacy-provider npm run e2e:headless
  ```

## 2. Current Status and Analysis

The existing e2e test suite is not passing. The tests are consistently failing with timeout errors, even after significantly increasing the timeout values in the Protractor configuration. As a result, it is not possible to provide screenshots of the application at this time.

### 2.1. Analysis of Failures

The test logs indicate that the tests are timing out while waiting for certain elements to appear on the page. This is likely due to a combination of factors:

- **Deprecated Framework:** The test suite is built with Protractor, which is deprecated and no longer actively maintained. This means that it may not be compatible with the latest versions of Chrome and WebDriver.
- **Race Conditions:** The tests may contain race conditions that are causing them to fail intermittently.
- **Application Performance:** The application may be running slowly in the test environment, which is causing the tests to time out.

### 2.2. Recommendation

Given the current state of the test suite, it is strongly recommended to migrate to a modern e2e testing framework. This will provide a more reliable and stable testing environment and will be a better investment of time and resources than trying to fix the existing tests.

## 3. Migration Plan

The following is a prescriptive plan for migrating the e2e test suite to Playwright:

### 3.1. Why Playwright?

Playwright is recommended for its speed, reliability, and cross-browser support. It also has excellent documentation and a growing community.

### 3.2. First Steps

- **Install and configure Playwright:** The first step is to install and configure Playwright. This will involve creating a new Playwright configuration file and setting up any necessary plugins or integrations.
- **Create a new e2e test suite:** A new e2e test suite should be created for Playwright. This will be where all new e2e tests will be written.
- **Write the first test:** The first test should be a simple test that verifies that the application is running and that the home page is displayed correctly. This will help to ensure that the new test suite is set up correctly.

### 3.3. Gradual Migration

- **Write new tests in Playwright:** All new e2e tests should be written in Playwright.
- **Prioritize critical user flows:** The first tests to be written should be for the most critical user flows.
- **Gradually replace old tests:** As new tests are written in Playwright, the old Protractor tests should be gradually replaced.
- **Remove the old test suite:** Once all of the old Protractor tests have been replaced, the old test suite should be removed from the codebase.
