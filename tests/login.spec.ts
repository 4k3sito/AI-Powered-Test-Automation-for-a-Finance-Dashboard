import { test, expect } from '@playwright/test'

test('successful login redirects to dashboard', async ({ page }) => {
  await page.goto('/login')
  await page.fill('input[type="email"]', 'test@example.com')
  await page.fill('input[type="password"]', 'password')
  await page.click('button:has-text("Log In")')
  await expect(page).toHaveURL(/.*dashboard/)
  await expect(page.locator('h1')).toContainText('Welcome back')
})

test('invalid login shows error', async ({ page }) => {
  await page.goto('/login')
  await page.fill('input[type="email"]', 'wrong@example.com')
  await page.fill('input[type="password"]', 'wrong')
  await page.click('button:has-text("Log In")')
  await expect(page.locator('text=Invalid credentials')).toBeVisible()
})
