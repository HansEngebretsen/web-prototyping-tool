# LLM Instructions and Guidance

This document provides a guide for LLMs working on the Web Prototyping Tool. It includes a high-level architectural overview, style notes, and instructions for maintaining a consistent end-user experience.

## 1. Architectural Overview

The Web Prototyping Tool is a web-based application built with Angular and Firebase. It allows users to create high-fidelity prototypes in their browser using real components. The application is divided into several libraries, each with a specific purpose:

- **`cd-interfaces`:** Shared TypeScript interfaces.
- **`cd-themes`:** Material Design themes.
- **`cd-metadata`:** Web platform metadata.
- **`cd-utils`:** Generic reusable utilities.
- **`cd-common`:** Library shared across the renderer and the main application.
- **`renderer`:** The rendering engine for the prototypes.
- **`cd-export`:** The application for exporting prototypes.

The main application is located in the `src` directory and uses NgRx for state management. It communicates with the renderer to display the prototypes and uses Firebase for data storage.

## 2. Style Notes

To ensure a consistent end-user experience, all future development should adhere to the following style notes:

### 2.1. Coding Style

- **Follow the existing style guides:** The project has a comprehensive set of style guides for CSS, Angular, TypeScript, and Git commits. These can be found in the `documentation` directory.
- **Maintain a consistent coding style:** Use the existing Prettier and ESLint configurations to maintain a consistent coding style across the codebase. For example, all TypeScript code should be formatted with Prettier and should adhere to the rules defined in the `.eslintrc.json` file.
- **Use meaningful variable names:** All variable names should be descriptive and should accurately reflect the data they represent. For example, instead of `const d = new Date();`, use `const currentDate = new Date();`.

### 2.2. User Experience

- **Prioritize the end-user experience:** All new features and changes should be designed with the end-user in mind. The goal is to create a seamless and intuitive user experience.
- **Maintain visual consistency:** Use the existing design system to maintain visual consistency across the application. This includes using the same colors, fonts, and icons.

## 3. Development Process

To ensure the quality and stability of the application, all future development must include the following:

### 3.1. End-to-End Testing

- **Write end-to-end tests for all new features:** All new features must be accompanied by end-to-end tests that verify the feature works as expected. The new tests should be written using Playwright, and should be located in the `e2e` directory.
- **Ensure all tests pass before submitting a change:** All existing and new tests must pass before a change can be submitted.

### 3.2. Screenshots

- **Provide screenshots of all visual changes:** All visual changes must be accompanied by screenshots that demonstrate the changes. This will help to ensure that the changes are in line with the design system and do not introduce any visual regressions.

## 4. Programmatic Checks

To ensure that the above requirements are met, the following programmatic checks must be run before submitting a change:

- **Lint the code:** `npm run lint`
- **Run all unit tests:** `npm run test:headless`
- **Run all e2e tests:** `npm run e2e:headless`
