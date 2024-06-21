export const loginPageElements = [
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

export const loginPageErrors = {
  noUsername: "Please enter username.",
  noPassword: "Please enter your password.",
  wrongUsername: "No account found with that username.",
  wrongPassword: "",
};
