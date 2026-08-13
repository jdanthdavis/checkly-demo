import { test, expect } from '@playwright/test';

test('Astronomy Shop storefront loads', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('body')).toContainText(/Astronomy|Shop|Products|Home/i);
  await expect(page.locator('body')).toBeVisible();
});
