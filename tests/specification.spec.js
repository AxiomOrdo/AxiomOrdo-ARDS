const { test, expect } = require('@playwright/test');

test.describe('Specification Page', () => {
  test('should display correct title and headings', async ({ page }) => {
    await page.goto('/specification.html');

    // Verify title
    await expect(page).toHaveTitle('ARDS Specification — ARDS-SPEC-001 v1.0');

    // Verify main h1 heading
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toHaveText('ARDS v1.0 Specification');

    // Verify key h2 headings
    const scopeHeading = page.locator('h2', { hasText: '1. Scope & Purpose' });
    await expect(scopeHeading).toBeVisible();

    const normativeHeading = page.locator('h2', { hasText: '2. Normative References' });
    await expect(normativeHeading).toBeVisible();
  });
});
