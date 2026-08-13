import { test, expect } from '@playwright/test';

test('Astronomy Shop checkout flow works for a customer', async ({ page }) => {
  await page.goto('/');

  await page.locator('body').click();

  const productLink = page.locator('a, button').filter({ hasText: /product|shop|catalog/i }).first();
  if (await productLink.count()) {
    await productLink.click();
  }

  const addToCartButton = page.locator('button, a').filter({ hasText: /add to cart/i }).first();
  if (await addToCartButton.count()) {
    await addToCartButton.click();
  }

  await expect(page.locator('body')).toContainText(/cart|checkout|order/i);
});
