import { test, expect } from '@playwright/test';

test('Astronomy Shop checkout flow works for a customer', async ({ page }) => {
  await page.goto('/');
  await page.locator('#checkout-button').click();

  await expect(page.locator('body')).toContainText(/order confirmed|checkout complete|thank you/i);
});
