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

### Running All Tests

1.  **Clone the repository** to your local machine:
    ```bash
    git clone https://github.com/Nagy-Raouf/SDET-Technical-Task.git
    cd SDET-Technical-Task
    ```
2.  **Install the npm packages** specified in `package.json`:
    ```bash
    npm install
    npm install --save-dev
    ```
3.  **Use the following scripts**

    ##### Running All Tasks

        npm run test:all

    ##### Task 1

        npm run test:task1

    ##### Task 2

        npm run test:task2

    ##### Task 3

        npm run test:task3

## 🔄 Continuous Integration (CI/CD)

This repository uses [CircleCI](https://circleci.com/) to run tests automatically on every push to the main branch.

#### Pipeline flow:

1. Run Task 1 tests
2. Run Task 2 tests
3. Run Task 3 tests
4. Run Task 4 API tests
