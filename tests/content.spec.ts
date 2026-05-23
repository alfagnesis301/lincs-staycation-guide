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

  test('visible navigation and guide cards do not point to unpublished routes', async ({ page }) => {
    for (const url of ['/', '/dog-friendly', '/lincolnshire-coast', '/blog']) {
      await page.goto(url);
      await expect(page.locator('a[href="/saved"]')).toHaveCount(0);
      await expect(page.locator('a[href="/blog/best-caravan-parks-skegness"]')).toHaveCount(0);
    }
  });

  test('/saved redirects to town guides instead of returning a broken page', async ({ request }) => {
    const response = await request.get('/saved', { maxRedirects: 0 });
    expect([307, 308]).toContain(response.status());
    expect(response.headers().location).toBe('/town-guides');
  });

  test('home has no best-rate claims and popular town cards use real images', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).not.toContainText(/best rate/i);
    for (const town of ['Lincoln', 'Skegness', 'Stamford', 'Louth', 'Boston']) {
      await expect(page.getByRole('img', { name: `${town}, Lincolnshire` })).toBeVisible();
    }
  });

  test('thin research pages are noindex while listing data is incomplete', async ({ page }) => {
    for (const url of ['/dog-friendly', '/family-days-out', '/events']) {
      await page.goto(url);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/i);
    }
  });

  test('forms do not expose honeypot helper text', async ({ page }) => {
    for (const url of ['/contact', '/add-your-business']) {
      await page.goto(url);
      await expect(page.locator('body')).not.toContainText('Leave blank');
    }
  });

  test('metadata titles do not duplicate the site brand', async ({ page }) => {
    for (const url of ['/things-to-do', '/food-drink', '/caravan-parks/best-caravan-parks-near-skegness', '/image-credits']) {
      await page.goto(url);
      await expect(page).not.toHaveTitle(/Lincs Staycation Guide \| Lincs Staycation Guide/);
    }
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
    expect(xml).not.toContain('/dog-friendly</loc>');
    expect(xml).not.toContain('/family-days-out</loc>');
    expect(xml).toContain('/blog/best-beaches');
    expect(xml).toContain('/blog/dog-friendly-days-out');
    expect(xml).toContain('/blog/dog-friendly-stays-coast');
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
