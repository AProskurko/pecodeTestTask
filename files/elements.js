// import { page } from "@playwright/test";

// export const loginPage = [
//   {
//     title: `Test 3.1: Logo`,
//   },
//   {
//     title: `Test 3.2: Heading`,
//     locator: page.getByRole("heading", { name: "AQA internship Login" }),
//   },
//   {
//     title: `Test 3.3: Username`,
//     locator: page.getByPlaceholder("Username"),
//   },
//   {
//     title: `Test 3.4: Password `,
//     locator: page.getByPlaceholder("Password"),
//   },
//   {
//     title: `Test 3.5: Button`,
//     locator: page.getByRole("button", { name: "Login" }),
//   },
// ];

export const loginPage = [
  {
    title: `Test 3.1: Logo`,
    selector: "#logomini",
  },
  {
    title: `Test 3.2: Heading`,
    selector: 'role=heading[name="AQA internship Login"]',
  },
  {
    title: `Test 3.3: Username`,
    selector: 'input[name="username"]',
  },
  {
    title: `Test 3.4: Password`,
    selector: 'input[name="password"]',
  },
  {
    title: `Test 3.5: Button`,
    selector: 'role=button[name="Login"]',
  },
];

// await test.step("Test 3.2: Headline", async () => {
//   await expect(
//     page.getByRole("heading", { name: "AQA internship Login" })
//   ).toBeVisible();
// });
// await test.step("Test 3.3: Logo", async () => {
//   await expect(page.locator("#logomini")).toBeVisible();
// });
// await test.step("Test 3.4: Logo", async () => {
//   await expect(page.locator("#logomini")).toBeVisible();
// });
// await test.step("Test 3.5: Logo", async () => {
//   await expect(page.locator("#logomini")).toBeVisible();
// });
