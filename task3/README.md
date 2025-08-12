# Task 3 – My Store Automation

A suite of end-to-end tests for an e-commerce website using Nightwatch.js and the Page Object Model.

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

This project automates the testing of the **My Store** website ([multiformis.com](https://multiformis.com)) using **Nightwatch.js**.

The test script covers:

1. Searching for the keyword **"dress"** on the homepage.
2. Verifying that the search results page title matches the search keyword.
3. Asserting that each listed product name contains the search keyword.

The implementation strictly follows the **Nightwatch Page Object Model** (POM) with no hardcoded selectors.

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
    Task 3
        ├── data
        │   └── searchData.json             # Contain test data
        ├── nightwatch/page_objects/        # Page Object Models
        │   ├── homePage.js
        │   └── searchResultPage.js
        ├── tests/                          # Test scripts
        │   └── script.js
        ├── .gitignore
        ├── nightwatch.conf.js
        ├── pachage-lock.json
        ├── package.json
        └── README.md
]
```
