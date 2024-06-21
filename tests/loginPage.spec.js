const { test, expect } = require("@playwright/test");
const LoginPage = require("../jsFiles/loginPage.js");
// const userData = require("../jsFiles/credentials");
const useJson = process.env.USE_JSON || false;
const userData = useJson
  ? require("../sources/credentialsAlt.json")
  : require("../sources/credentials.js");
import { loginPageElements, loginPageErrors } from "../jsFiles/elements.js";

//* Select user for test
const user = userData.user1;

test("Test 1: Open Web page", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await expect(page).toHaveTitle("Login");
  await loginPage.wait();
});

test("Test 2: Login, without check", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(user.username, user.password);
  await loginPage.wait();
});

//* Test 3: Check
test("Test 3: Elements check", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.checkElementsVisible(loginPageElements, test);
  await loginPage.wait();
});

test("Test 4: Error messages", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await test.step("Error messages are not visible by default", async () => {
    await loginPage.checkErrorsAreHidden();
  });

  await loginPage.login("", "");
  await test.step(`Error message for empty username and password are visible`, async () => {
    await loginPage.checkErrorsAreVisible([
      loginPageErrors.noUsername,
      loginPageErrors.noPassword,
    ]);
  });

  await loginPage.login(user.username, user.password);

  await test.step(`Error message for wrong username is visible`, async () => {
    await loginPage.checkErrorsAreVisible([loginPageErrors.wrongUsername]);
  });
  //! I had no valid username to check Error message for correct username and wrong password.
  //! Code bellow is valid and will work after adding valid username to credentials.js and noPassword to elements.js
  // await loginPage.login(userData.username, userData.password);

  // await test.step(`Error message for wrong username is visible`, async () => {
  //   await loginPage.checkErrorsAreVisible([loginPageErrors.noPassword]);
  // });

  await loginPage.wait();
});

test("Test 5: Unsuccessful login (test must fail)", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(user.username, user.password);
  //! I do not know what url should be expected, so I used main page URL.
  await expect.soft(page).toHaveURL("https://www.pecodesoftware.com");
  await loginPage.wait();
});
