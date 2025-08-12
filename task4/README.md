# Task 4 – API Testing with mock-user-auth & supertest

This project contains automated tests for the API routes provided by the [`mock-user-auth`](https://www.npmjs.com/package/mock-user-auth) package.  
The tests are written using [`supertest`](https://www.npmjs.com/package/supertest) to send HTTP requests and validate responses against expected behavior.

## Table of Contents

- [About the Project](#about-the-project)
- [Prerequisites](#prerequisites)
- [Running the test](#running-the-tests)
- [Project Structure](#project-structure)

---

## About the Project

This project contains an **integration test suite** for the [`mock-user-auth`](https://www.npmjs.com/package/mock-user-auth) package using [Jest](https://jestjs.io/) and [Supertest](https://www.npmjs.com/package/supertest).

The goal is to validate **all API routes** (valid and invalid cases) against **expected HTTP status codes** and **basic response body structure**.

- Covers **all routes** provided by `mock-user-auth`:
  - `POST /api/v1/auth` – Authenticate user
  - `POST /api/v1/users` – Create user
  - `GET /api/v1/users` – Get current user (requires auth)
  - `PATCH /api/v1/users` – Update user (requires auth)
  - `DELETE /api/v1/users` – Delete user (requires auth)
  - `DELETE /api/v1/all-users` – Delete all users (admin key required)
- Tests **both valid and invalid cases** for each route.

### Tech Stack

- **Node.js** – JavaScript runtime environment
- **mock-user-auth** – Mock authentication and user management API
- **supertest** – HTTP assertions library for testing Node.js APIs
- **Jest** (or your chosen test runner) – Test framework to run and manage test cases

---

## Prerequisites

Before you can run these tests, ensure you have the following installed on your machine:

- **Node.js**: Version 14 or higher is recommended. You can download it from the official [Node.js website](https://nodejs.org/).
- **npm**: This comes bundled with Node.js.
- **Git**: You will need this to clone the repository.

---

## Running the test

Follow these steps to get the project up and running.

1.  **Install the npm packages** specified in `package.json`:

    ```bash
    npm install
    npm install --save-dev
    ```

2.  **Run the mockup server - Terminal 1**

    ```
    npm run mock-auth
    ```

3.  **Run Test - Terminal 2**

    ```
    npm run test
    ```

4.  **Output**: checkout put under reports/

## Project Structure

```
[
    task4
        ├── data                        # Contain test data
        │   ├── messages.json
        │   ├── statusCodes.json
        │   └── testData.json
        ├── tests/                         # Test scripts
        │   └── allRoutes.test.js
        ├── utils/                         # generator of users
        │   └── userFactory.js
        ├── .gitignore
        ├── pachage-lock.json
        ├── package.json
        └── README.md
]
```
