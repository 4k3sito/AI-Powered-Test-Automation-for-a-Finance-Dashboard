
import { test, expect } from '@playwright/test';

test('User is redirected to /dashboard after login', async ({ page }) => {
  // Navigate to the login page
  await page.goto('/login');

  // Fill in login credentials
  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'password');

  // Submit the login form
  await page.click('button:has-text("Log In")');

  // Assert that the user is redirected to /dashboard
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.locator('h1')).toContainText('Welcome back');
});