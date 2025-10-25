# Web Prototyping Tool Guide

This guide provides a comprehensive overview of the Web Prototyping Tool, including its architecture, setup, and maintenance.

## 1. Introduction

The Web Prototyping Tool is a powerful, web-based application designed for creating high-fidelity prototypes. Built on Angular and Firestore, it allows designers to use real components in their prototypes, streamlining the design-to-development workflow.

## 2. Architecture Overview

The application follows a modular architecture, with several key components:

*   **Frontend Application (`src/`)**: The main Angular application that users interact with. It includes the design surface, properties panel, layers tree, and other UI elements.
*   **Renderer (`projects/renderer/`)**: A separate application responsible for rendering the prototypes. It communicates with the main app to display the prototype accurately.
*   **Shared Libraries (`projects/`)**: A collection of libraries that share code and interfaces across the application. These include:
    *   `cd-interfaces`: Shared TypeScript interfaces.
    *   `cd-themes`: Material Design themes.
    *   `cd-metadata`: Metadata for web platform features (CSS, HTML, etc.).
    *   `cd-utils`: Reusable utility functions.
    *   `cd-common`: Components and services shared between the main app and the renderer.
*   **Backend Services (`backend-services/`)**: Contains backend services, likely for features like project management and collaboration.
*   **Firebase (`firebase/`)**: Handles backend functionality, including database (Firestore) and authentication.

## 3. Getting Started

Follow these steps to get the application up and running locally.

### 3.1. Prerequisites

*   [Node.js](https://nodejs.org/) (v14.x or later)
*   [npm](https://www.npmjs.com/) (v6.x or later)

### 3.2. Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/web-prototyping-tool.git
    cd web-prototyping-tool
    ```

2.  **Install dependencies:**
    ```bash
    npm i
    ```

### 3.3. Building the Application

Build all the libraries and the main application:

```bash
npm run build:all
```

### 3.4. Running the Application

There are two ways to run the application:

*   **Run the main app only:**
    ```bash
    npm start
    ```
    The application will be available at `http://localhost:4200/`.

*   **Run the main app with a live renderer:**
    ```bash
    npm run start:live-renderer
    ```
    This is useful for development, as it provides a live preview of the prototype.

## 4. Testing

The application has a comprehensive test suite, including unit tests, integration tests, and end-to-end (e2e) tests.

### 4.1. Unit Tests

To run all unit tests:

```bash
npm run test:full
```

To run tests for a specific package:

```bash
npm run test:app
npm run test:utils:headless
```

### 4.2. End-to-End (e2e) Tests

The e2e tests use Protractor and require a specific version of Chromium.

**Note:** The e2e test suite in this project is unreliable and prone to timeouts. It is recommended to create new, targeted tests using a modern framework like Playwright or Cypress.

1.  **Install the correct Chromium version:**
    ```bash
    npm run install-e2e-chrome
    ```

2.  **Run the e2e tests:**
    ```bash
    npm run e2e
    ```

## 5. Modernization and Maintenance

To keep the application up-to-date and maintainable, consider the following:

### 5.1. Dependency Updates

Regularly update dependencies to their latest versions. This can be done using `npm update` or a tool like [Dependabot](https://dependabot.com/). Pay close attention to major version updates, as they may introduce breaking changes.

### 5.2. Angular Migration

The application is built on an older version of Angular. To take advantage of the latest features and performance improvements, plan a migration to the latest stable version of Angular. The official [Angular Update Guide](https://update.angular.io/) is an excellent resource for this process.

### 5.3. State Management

The application uses NgRx for state management. While NgRx is a powerful library, it can be complex. For new features, consider using simpler state management solutions like [Akita](https.net.datorama.com/akita/) or component-level state where appropriate.

### 5.4. Component Library

The application uses a custom component library. To improve consistency and reduce maintenance, consider migrating to a modern, open-source component library like [Angular Material](https.material.angular.io/) or [Storybook](https://storybook.js.org/).

## 6. End User Experience

To ensure a good end-user experience, focus on the following:

*   **Performance**: Optimize bundle sizes and loading times. Use lazy loading for feature modules and tree-shaking to remove unused code.
*   **Usability**: Regularly conduct usability testing to identify pain points and areas for improvement.
*   **Accessibility**: Ensure the application is accessible to all users by following the [WCAG](https.www.w3.org/WAI/standards-guidelines/wcag/) guidelines.

By following this guide, you can successfully build, operate, and maintain the Web Prototyping Tool while ensuring a high-quality experience for your users.
