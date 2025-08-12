# Siemens EDA – SDET Technical Task

## 📌 Overview

This repository contains the solutions for the Siemens EDA SDET Technical Task.  
It includes automated tests for the following:

- **Task 1:** Website Functional & Usability Testing (NightwatchJS)
- **Task 2:** LinkedIn Registration Automation (NightwatchJS)
- **Task 3:** E-Commerce Website Testing (NightwatchJS)
- **Task 4:** API Testing
- **Report:** All the PDFs report requested

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
        ├── .circleci                 # CI/CD pipeline configuration
        ├── package.json
        ├── Technical Reports         # Contain all the reports documents
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

    ##### Task 1

        npm run test:task1

    ##### Task 2

        npm run test:task2

    ##### Task 3

        npm run test:task3

    ##### Task 4

    - Move: `cd task4`.
    - Terminal 1: `npm run mock-auth`.
    - Terminal 2: `npm run test`.

## 🔄 Continuous Integration (CI/CD)

This repository uses [CircleCI](https://circleci.com/) to run tests automatically on every push to the main branch.

#### Pipeline flow:

1. Run Task 1 tests
2. Run Task 2 tests
3. Run Task 3 tests
