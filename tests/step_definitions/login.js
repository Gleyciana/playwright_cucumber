const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium, expect } = require("playwright/test");

let browser;
let page;

Given('que estou na página de login', { timeout: 10000 }, async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    await page.goto('https://www.saucedemo.com');
  
});

When('insiro um {string} e {string}', async function (username, password) {
  await page.locator("#user-name").fill(username);
  await page.locator("#password").fill(password);
  await page.locator("#login-button").click();

});

Then('devo ser redirecionado para a página inicial do sistema', async function () {
    await page.waitForSelector("[data-test='title']", { timeout: 5000 });
    
    const pageTitle = await page.locator("[data-test='title']").innerText();
    expect(pageTitle).toContain('Products');
});

Then('será apresentada mensagem de erro', async function () {
  await page.waitForSelector('h3', { timeout: 5000 });
  
  const msgerror = await page.locator('h3').innerText();
  expect(msgerror).toContain('Epic sadface: Username and password do not match any user in this service');
});
