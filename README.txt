Pecode Test Task

This project is an automation test suite for the login functionality of the Pecode QA portal using Playwright.

Prerequisites:
- Node.js (version 16 or later)
- Playwright (version 1.44.1)

Setup
1. Install Playwright and Dependencies
   npm install playwright@1.44.1
   npm install cross-env --save-dev

Running the Tests
1. Run the Default Test Suite
   npm test
2. Run the Test Suite with Alternate Credentials
   npm run test:alt

Note on Test Cases
- The test case checking the error message for a correct username with a wrong password is commented out. This test case is valid but requires a valid username to run. Once a valid username is added to credentials.js or credentialsAlt.json, you can uncomment and run this test.

Author
Artem Proskurko
