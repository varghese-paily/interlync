# Interlynk UI Automation Testing

## Overview

This repository contains an automated ui testing solution for Interlynk. The framework is implemented in Node.js,Playwright and Typescript facilitating efficient ui testing based on specified criteria.

## Prerequisites

Before using the automation solution, ensure the following prerequisites are met:

- **Node.js and npm:** Install Node.js and npm on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

## Installation

1. **Clone the Repository:**
    ```bash
   cd git clone <repository-url>
   ```
2. **Navigate to Repository:**

   ```bash
   cd interlynk
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

## UI Testing

## Running Tests

1. **Run Individual Test:**
   Navigate to the root folder adn Execute the following command to run an individual test script:

   ```cmd
   npx playwright test <test_script_name>
   ```

2. **Parallel Execution:**
   For parallel execution of tests, use the following command:
   ```cmd
   npx playwright test
   ```

## Additional Notes

- **Test Results:**
  After execution of tests results will be available in `playwright-report` folder and if we want show the report by using following command
  ```cmd
  npx playwright show-report
  ```
- **Dependency Installation:**
  Ensure all required dependencies are installed before running commands.