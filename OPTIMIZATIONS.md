# Optimizations Guide

This document outlines a plan to optimize and modernize the Web Prototyping Tool. The focus is on front-end technologies and best practices, without significantly altering the application's core functionality.

## 1. Dependency Upgrades

The application is currently using Angular 12. Upgrading to the latest stable version of Angular will provide significant performance improvements, new features, and better security.

### 1.1. Angular Upgrade

- **Upgrade to the latest Angular version:** Follow the official Angular upgrade guide to update the application and its dependencies. This will likely involve a multi-step process, upgrading one major version at a time.
- **Update Angular Material:** Ensure that the Angular Material library is also upgraded to a compatible version.
- **Update NgRx:** Upgrade NgRx to the latest version to take advantage of new features and performance improvements.

### 1.2. Other Dependencies

- **Review and update all other dependencies:** Use a tool like `npm-check-updates` to identify and update outdated dependencies.
- **Remove unused dependencies:** Analyze the `package.json` file and the codebase to identify and remove any dependencies that are no longer being used.

## 2. CSS Modernization

The current CSS architecture uses a custom Sass-based solution for CSS variables. While this works, it can be simplified and modernized by using native CSS custom properties.

### 2.1. Adopt Native CSS Custom Properties

- **Refactor Sass variables to CSS custom properties:** Convert the existing Sass variables in the `light` and `dark` themes to native CSS custom properties. This will allow for dynamic theme switching without requiring a separate build for each theme.
- **Remove the `sass-utils/cssvars` dependency:** Once all Sass variables have been converted to CSS custom properties, the `sass-utils/cssvars` dependency can be removed.

### 2.2. CSS Architecture

- **Promote the use of modern CSS features:** Encourage the use of modern CSS features like Flexbox and Grid for layout, and clamp() for responsive typography.
- **Adopt a consistent naming convention:** Enforce a consistent naming convention for CSS classes, such as BEM (Block, Element, Modifier), to improve code readability and maintainability.

## 3. Code Bloat Reduction

Over time, applications can accumulate unused code, which can negatively impact performance.

### 3.1. Tree-Shaking

- **Ensure tree-shaking is properly configured:** Verify that the Angular build process is properly configured to tree-shake unused code from the final bundle.
- **Identify and remove dead code:** Use a tool like `ts-prune` to identify and remove any unused code from the codebase.

### 3.2. Component Architecture

- **Promote the use of OnPush change detection:** Encourage the use of the `OnPush` change detection strategy for components to improve runtime performance.
- **Lazy load feature modules:** Identify any feature modules that can be lazy-loaded to reduce the initial bundle size.

## 4. Build Process Improvements

The `package.json` file contains a large number of complex build scripts. Simplifying and optimizing these scripts can improve the developer experience and reduce build times.

### 4.1. Script Simplification

- **Consolidate and simplify build scripts:** Review the existing build scripts and identify any opportunities to consolidate or simplify them.
- **Document the build process:** Create a document that clearly explains the purpose of each build script and how to use them.

### 4.2. Build Performance

- **Enable build caching:** Configure the Angular CLI to use build caching to improve build times.
- **Upgrade to a modern e2e testing framework:** The project is currently using Protractor, which is deprecated. Migrating to a modern e2e testing framework like Cypress or Playwright will provide a better testing experience and more reliable tests.
