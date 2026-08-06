import { test, expect } from '@playwright/test';

test('landing page has correct title and elements', async ({ page }) => {
  await page.goto('/index.html');

  // Verify the page title
  await expect(page).toHaveTitle('ARDS — AxiomOrdo Regulatory Data Standard');

  // Verify the nav logo is present and has the text 'ARDS'
  const navLogo = page.locator('a.nav__logo');
  await expect(navLogo).toBeVisible();
  await expect(navLogo).toHaveText('ARDS');
});
