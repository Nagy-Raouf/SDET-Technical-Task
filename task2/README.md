# Task 2 – LinkedIn Registration Automation

This project automates the LinkedIn registration flow using **Nightwatch.js** and the **Page Object Model (POM)** structure.

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

This project serves as a basic automation testing suite built with Nightwatch.js to automate the linkedIn registration flow. The purpose is to demonstrate a foundational approach to end-to-end testing.

The tests are built using the **Nightwatch.js** framework and follow the **Page Object Model (POM)** design pattern. The POM separates the UI elements and interactions from the test logic, making the tests more readable, reusable, and easier to maintain. We use a local **Selenium WebDriver** for running tests on Chrome.

App URL: https://linkedin.com

The automation covers the following workflow:

1. Open the LinkedIn home page and verify it is loaded.
2. Click the **Join Now** button.
3. Fill in the registration form with email and password.
4. Click **Agree & Join**.
5. Fill in the first name and last name.
6. Click **Continue**.
7. Verify that the **Security Verification** page is displayed.

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
    Task 2
        ├── data
        │   └── registrationData.json      # Contain test data
        ├── nightwatch/page_objects/       # Page Object Models
        │   ├── linkedinHomePage.js
        │   ├── linkedinRegistrationPage.js
        │   └── linkedinSecurityPage.js
        ├── tests/                         # Test scripts
        │   └── script.js
        ├── .gitignore
        ├── nightwatch.conf.js
        ├── pachage-lock.json
        ├── package.json
        └── README.md
]
```
