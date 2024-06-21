/*
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.helpBlocks = page.locator(".help-block");
  }

  async navigate() {
    await this.page.goto(
      "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
    );
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async countHelpBlocks() {
    return await this.helpBlocks.count();
  }

  async isHelpBlockVisible(index) {
    return await this.helpBlocks.nth(index).isVisible();
  }

  async isHelpBlockHidden(index) {
    return await this.helpBlocks.nth(index).isHidden();
  }
}

module.exports = LoginPage;
*/

const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder("Username");
    this.passwordInput = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.loginErrors = page.locator(".help-block");
  }

  async goto() {
    await this.page.goto(
      "https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php"
    );
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async checkElementsVisible(pageElements, test) {
    for (let element of pageElements) {
      const locator = this.page.locator(element.selector);
      await test.step(element.title, async () => {
        await expect.soft(locator).toBeVisible();
      });
    }
  }

  async checkErrorsAreHidden() {
    const errorsCount = await this.loginErrors.count();
    for (let i = 0; i < errorsCount; i++) {
      await expect(this.loginErrors.nth(i)).toBeHidden();
    }
  }

  async checkErrorsAreVisible(pageErrors) {
    for (const error of pageErrors) {
      await expect.soft(this.page.getByText(error)).toBeVisible();
    }
  }

  async wait() {
    await this.page.waitForTimeout(3000);
  }
}

module.exports = LoginPage;
