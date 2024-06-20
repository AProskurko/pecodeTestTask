import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
  );
  await page.getByPlaceholder("Username").fill("123");
  await page.getByPlaceholder("Password").fill("123");
  await page.getByRole("button", { name: "Login" }).click();
});
