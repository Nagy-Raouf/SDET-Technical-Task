# Task 1 - Nightwatch.js Automation Test Project (Navigation)

This is a basic automation test project using Nightwatch.js to demonstrate navigating and asserting page content.

## Table of Contents

- [About the Project](#about-the-project)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the Tests](#running-the-tests)
  - [Running Specific Tests](#running-specific-tests)
- [Project Structure](#project-structure)

---

## About the Project

This project serves as a basic automation testing suite built with Nightwatch.js. The purpose is to demonstrate a foundational approach to end-to-end testing.

The tests are built using the **Nightwatch.js** framework and follow the **Page Object Model (POM)** design pattern. The POM separates the UI elements and interactions from the test logic, making the tests more readable, reusable, and easier to maintain. We use a local **Selenium WebDriver** for running tests on Chrome.

App URL: http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/

---

## Prerequisites

Before you can run these tests, ensure you have the following installed on your machine:

- **Node.js**: Version 14 or higher is recommended. You can download it from the official [Node.js website](https://nodejs.org/).
- **npm**: This comes bundled with Node.js.
- **Git**: You will need this to clone the repository.

---

## Getting Started

Follow these steps to get a local copy of the project up and running.

### Installation

1.  **Install the npm packages** specified in `package.json`:
    ```bash
    npm install
    npm install --save-dev
    ```

### Configuration

The main configuration file is **`nightwatch.conf.js`**. You can modify this file to adjust settings such as `src_folders` (the directory where your test files are located) and `test_settings` (which define different test environments, like `chrome` or `firefox`).

## Running the Test

Here's how you can execute the test suite.

#### Running Specific Tests

    npx nightwatch tests/script.js

## Project Structure

```
[
    Task 1
        ├── nightwatch/page_objects/       # Page Object Models
        │   ├── contactPage.js
        │   └── homePage.js
        ├── tests/                         # Test scripts
        │   └── script.js
        ├── .gitignore
        ├── nightwatch.conf.js
        ├── pachage-lock.json
        ├── package.json
        └── README.md
]
```
