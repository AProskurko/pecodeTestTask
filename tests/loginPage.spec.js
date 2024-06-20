const { test, expect } = require("@playwright/test");
import { userData } from "../files/credentials";
import { loginPage } from "../files/elements";

test("Test 1: Open Web page", async ({ page }) => {
  await page.goto(
    "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  );
  await expect(page).toHaveTitle("Login");
});

test("Test 2: Login, without check", async ({ page }) => {
  await page.goto(
    "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  );
  await page.getByPlaceholder("Username").fill(userData.username);
  await page.getByPlaceholder("Password").fill(userData.password);
  await page.getByRole("button", { name: "Login" }).click();
});

//* Test 3: Check
test("Test 3: Elements check", async ({ page }) => {
  await page.goto(
    "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  );

  for (let i = 0; i < loginPage.length; i++) {
    const title = loginPage[i].title;
    const locator = page.locator(loginPage[i].selector);

    await test.step(title, async () => {
      await expect(locator).toBeVisible();
    });
  }
});

test("Test 4: Error messages", async ({ page }) => {
  await page.goto(
    "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  );
  const helpBlocks = page.locator(".help-block");
  const helpBlockCount = await helpBlocks.count();

  //*
  await test.step("Error messages are not visible by default", async () => {
    for (let i = 0; i < helpBlockCount; i++) {
      await expect(helpBlocks.nth(i)).toBeHidden();
    }
  });

  await page.getByRole("button", { name: "Login" }).click();
  await test.step("Error messages are visible on failed login", async () => {
    for (let i = 0; i < helpBlockCount; i++) {
      await expect(helpBlocks.nth(i)).toBeVisible();
    }
  });
});

test("Test 5: Unsuccessful login", async ({ page }) => {
  await page.goto(
    "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  );
  await page.getByPlaceholder("Username").fill(userData.username);
  await page.getByPlaceholder("Password").fill(userData.password);
  await page.getByRole("button", { name: "Login" }).click();
  //! I do not know what url should be expected, so I used main page URL.
  await expect.soft(page).toHaveURL("https://www.pecodesoftware.com");
});
