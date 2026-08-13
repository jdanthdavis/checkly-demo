import { test, expect } from '@playwright/test';

test('Checkout button intentionally throws a browser JavaScript error for the Checkly demo', async ({ page }) => {
  const pageErrors: string[] = [];
  page.on('pageerror', (error) => {
    pageErrors.push(error.message);
  });

  await page.goto('/');
  await page.locator('#checkout-button').click();

  await expect(pageErrors).toContain('Checkout button intentionally broken for the Checkly demo');
});
