# Siemens EDA – SDET Technical Task

## 📌 Overview

This repository contains the solutions for the Siemens EDA SDET Technical Task.  
It includes automated tests for the following:

- **Task 1:** Website Functional & Usability Testing (NightwatchJS)
- **Task 2:** LinkedIn Registration Automation (NightwatchJS)
- **Task 3:** E-Commerce Website Testing (NightwatchJS)
- **Task 4:** API Testing

The CI/CD pipeline runs tests for each task sequentially using [CircleCI](https://circleci.com/).

---

## 🗂 Project Structure

```
[
    SDET Technical Task
        ├── task1
        ├── task2
        ├── task3
        ├── task4
        ├── .gitignore
        ├── .circleci       # CI/CD pipeline configuration
        ├── package.json
        └── README.md
]
```

---

## 🚀 Running Tests Locally

### Task 1

```bash
cd task1
npm install
npm install --save-dev
npx nightwatch
```

### Task 2

```bash
cd task2
npm install
npm install --save-dev
npx nightwatch
```

### Task 3

```bash
cd task3
npm install
npm install --save-dev
npx nightwatch
```

## 🔄 Continuous Integration (CI/CD)

This repository uses [CircleCI](https://circleci.com/) to run tests automatically on every push to the main branch.

#### Pipeline flow:

1. Run Task 1 tests
2. Run Task 2 tests
3. Run Task 3 tests
4. Run Task 4 API tests
