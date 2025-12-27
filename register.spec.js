const { test } = require('@playwright/test');
const { RegisterPage } = require('../pages/RegisterPage');

test('User Registration Test', async ({ page }) => {
  const register = new RegisterPage(page);
  await page.goto('/');
  await register.register('kuma_auto_01', 'Test@123');
  await register.verifySuccess();
});
