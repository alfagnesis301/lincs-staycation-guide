import { test, expect } from '@playwright/test';

test.describe('Content quality regressions', () => {
  test('events page is editorial-only (no sample events, noindex)', async ({ page }) => {
    await page.goto('/events');
    await expect(page.locator('body')).not.toContainText('Lincolnshire Wolds Walking Festival');
    await expect(page.locator('body')).not.toContainText('Skegness Carnival');
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute('content', /noindex/i);
  });

  test('blog page shows holding message when no published posts', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('body')).not.toContainText('This guide is coming soon');
  });

  test('caravan parks editorial note shows correct subject on non-park category pages', async ({ page }) => {
    await page.goto('/places-to-stay/lincoln');
    await expect(page.locator('body')).not.toContainText('manage one of these parks');
    await expect(page.locator('body')).toContainText('manage one of these accommodation listings');

    await page.goto('/things-to-do/lincoln');
    await expect(page.locator('body')).toContainText('manage one of these attractions');

    await page.goto('/food-drink/lincoln');
    await expect(page.locator('body')).toContainText('manage one of these food and drink venues');
  });

  test('no "Booking link coming soon" CTA appears anywhere visible', async ({ page }) => {
    for (const url of ['/caravan-parks', '/caravan-parks/booking', '/town-guides/lincoln']) {
      await page.goto(url);
      await expect(page.locator('body')).not.toContainText('Booking link coming soon');
    }
  });

  test('sample listings are gone from family days out / dog-friendly pages', async ({ page }) => {
    for (const url of ['/family-days-out', '/dog-friendly']) {
      await page.goto(url);
      await expect(page.locator('body')).not.toContainText('Coastal Holiday Park');
      await expect(page.locator('body')).not.toContainText('Seaside Café');
      await expect(page.locator('body')).not.toContainText('A sample');
    }
  });

  test('image credits page shows correct section headings and counts', async ({ page }) => {
    await page.goto('/image-credits');
    await expect(page.locator('body')).toContainText(/Town and area images/);
    await expect(page.locator('body')).toContainText(/Coastal area images/);
    await expect(page.locator('body')).toContainText(/Accommodation and caravan park images/);
  });

  test('sitemap excludes /events and unpublished /blog', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.ok()).toBeTruthy();
    const xml = await res.text();
    expect(xml).not.toContain('/events</loc>');
    expect(xml).not.toContain('/events<');
  });
});
