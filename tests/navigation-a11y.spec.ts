import { test, expect } from '@playwright/test';

test.describe('town guide navigation and filters', () => {
  test('Lincoln quick links are separated and keyboard accessible', async ({ page }) => {
    await page.goto('/town-guides/lincoln');
    const nav = page.getByRole('navigation', { name: /page sections/i });
    await expect(nav).toBeVisible();

    const expectedLinks = [
      'Where to stay',
      'Things to do',
      'Parks & nature',
      'Food & drink',
      'Nearby caravan parks',
    ];

    for (const label of expectedLinks) {
      await expect(nav.getByRole('link', { name: new RegExp(label, 'i') })).toBeVisible();
    }

    await nav.getByRole('link', { name: /where to stay/i }).focus();
    await expect(nav.getByRole('link', { name: /where to stay/i })).toBeFocused();
  });

  test('filter chips use buttons with pressed state when available', async ({ page }) => {
    await page.goto('/caravan-parks/booking');
    const filters = page.getByRole('group', { name: /filter parks/i });
    const filterButton = filters.getByRole('button').first();
    await expect(filterButton).toBeVisible();
    await expect(filterButton).toHaveAttribute('aria-pressed', /true|false/);
    await filterButton.click();
    await expect(filterButton).toHaveAttribute('aria-pressed', /true|false/);
  });

  test('Lincoln town guide has clear landmarks and heading structure', async ({ page }) => {
    await page.goto('/town-guides/lincoln');
    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1, name: /Lincoln Travel Guide/i })).toBeVisible();
    await expect(page.getByRole('navigation', { name: /page sections/i })).toBeVisible();
  });
});
