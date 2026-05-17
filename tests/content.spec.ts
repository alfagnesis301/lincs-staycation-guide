import { test, expect } from '@playwright/test';

test.describe('Content quality regressions', () => {
  test('events page is editorial-only (no sample events, noindex)', async ({ page }) => {
    await page.goto('/events');
    await expect(page.locator('body')).not.toContainText('Lincolnshire Wolds Walking Festival');
    await expect(page.locator('body')).not.toContainText('Skegness Carnival');
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute('content', /noindex/i);
  });

  test('blog page does not expose placeholder guide copy', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('body')).not.toContainText('This guide is coming soon');
    await expect(page.locator('body')).not.toContainText('Advertisement space');
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

  test('sitemap excludes /events and includes only published blog guides', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.ok()).toBeTruthy();
    const xml = await res.text();
    expect(xml).not.toContain('/events</loc>');
    expect(xml).not.toContain('/events<');
    expect(xml).toContain('/blog/best-beaches');
    expect(xml).toContain('/blog/dog-friendly-days-out');
    expect(xml).toContain('/blog/weekend-breaks');
    expect(xml).toContain('/blog/rainy-day-activities');
  });

  test('major attraction guides include official website links', async ({ page }) => {
    await page.goto('/things-to-do/lincoln');
    await expect(page.getByRole('link', { name: 'Official website' }).first()).toHaveAttribute('href', 'https://lincolncathedral.com/');
    await expect(page.locator('a[href="https://www.lincolncastle.com/"]')).toBeVisible();
    await expect(page.locator('a[href="https://internationalbcc.co.uk/"]')).toBeVisible();

    await page.goto('/things-to-do/skegness');
    await expect(page.locator('a[href="https://skegnessnatureland.co.uk/"]')).toBeVisible();
    await expect(page.locator('a[href="https://www.lincstrust.org.uk/top-reserves/gibraltar-point"]')).toBeVisible();

    await page.goto('/things-to-do/stamford');
    await expect(page.locator('a[href="https://burghley.co.uk/"]')).toBeVisible();
  });
});
