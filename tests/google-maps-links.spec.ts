import { test, expect } from '@playwright/test';

const ROUTES = [
  '/places-to-stay/lincoln',
  '/things-to-do/lincoln',
  '/food-drink/lincoln',
  '/caravan-parks/best-caravan-parks-near-lincoln',
  '/town-guides/lincoln',
];

test.describe('Google Maps listing links', () => {
  for (const route of ROUTES) {
    test(`${route} renders Google Maps links on listings`, async ({ page }) => {
      await page.goto(route);
      const links = page.locator('a[data-google-maps-link]');
      const count = await links.count();
      expect(count).toBeGreaterThan(0);

      const first = links.first();
      await expect(first).toHaveAttribute('target', '_blank');
      await expect(first).toHaveAttribute('rel', /noopener/);
      await expect(first).toHaveAttribute('rel', /noreferrer/);
      const href = await first.getAttribute('href');
      expect(href).toBeTruthy();
      expect(href!).toMatch(/^https:\/\/(www\.)?google\.[a-z.]+\//);

      // Verified URLs can say Google Maps directly; generated queries use a softer public CTA.
      const label = (await first.innerText()).trim();
      expect(['Open in Google Maps', 'View map/details']).toContain(label);

      // aria-label must be present and reference the listing for accessibility.
      const aria = await first.getAttribute('aria-label');
      expect(aria).toBeTruthy();
      expect(aria!.toLowerCase()).toContain('google maps');
    });
  }

  test('no Google Maps link is rendered with empty or invalid href', async ({ page }) => {
    await page.goto('/places-to-stay/lincoln');
    const badLinks = page.locator(
      'a[data-google-maps-link][href=""], a[data-google-maps-link]:not([href^="https://"])'
    );
    expect(await badLinks.count()).toBe(0);
  });
});
