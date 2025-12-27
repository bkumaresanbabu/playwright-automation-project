const { test } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {
  const login = new LoginPage(page);
  await page.goto('/');
  await login.openLogin();
  await login.login('testuser', 'Test@123');
  await login.verifyLogin('testuser');
});
