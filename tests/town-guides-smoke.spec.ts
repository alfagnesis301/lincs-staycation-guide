import { expect, test } from '@playwright/test';

const CRITICAL_ROUTES = [
  '/',
  '/search',
  '/town-guides',
  '/town-guides/lincoln',
  '/town-guides/skegness',
  '/town-guides/stamford',
  '/places-to-stay',
  '/places-to-stay/lincoln',
  '/things-to-do',
  '/things-to-do/lincoln',
  '/food-drink',
  '/food-drink/lincoln',
  '/caravan-parks',
  '/caravan-parks/best-caravan-parks-near-skegness',
  '/caravan-parks/best-caravan-parks-near-lincoln',
  '/dog-friendly',
  '/family-days-out',
  '/lincolnshire-coast',
  '/events',
  '/blog',
  '/blog/best-beaches',
  '/blog/things-to-do-with-kids',
  '/blog/dog-friendly-stays-coast',
  '/blog/dog-friendly-days-out',
  '/blog/rainy-day-activities',
  '/blog/best-places-to-stay',
  '/about',
  '/contact',
  '/add-your-business',
  '/advertise',
  '/privacy-policy',
  '/cookie-policy',
  '/terms',
  '/affiliate-disclosure',
  '/editorial-policy',
  '/business-listing-terms',
  '/image-credits',
];

const VIEWPORTS = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];

test.describe('requested smoke checks', () => {
  for (const viewport of VIEWPORTS) {
    test(`critical routes render on ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      for (const route of CRITICAL_ROUTES) {
        const response = await page.goto(route);
        expect(response?.status(), route).toBe(200);
        await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
        await expect(page.locator('body')).not.toContainText('AD Sponsored');
        await expect(page.locator('body')).not.toContainText('ad_slot_');
      }
    });
  }

  test('home is not a places-to-stay duplicate', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Lincolnshire staycation/i);
    await expect(page.getByRole('heading', { level: 1 })).not.toContainText(/Places to stay in Lincolnshire/i);

    await page.goto('/places-to-stay');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Places to Stay in Lincolnshire/i);
  });

  test('town guide dropdown supports keyboard open and escape close', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const header = page.locator('header');
    const toggle = header.getByRole('button', { name: /Open town guides by location/i });

    await toggle.focus();
    await page.keyboard.press('ArrowDown');
    const menu = header.getByRole('menu', { name: /Town guides by location/i });
    await expect(menu).toBeVisible();
    await expect(menu.getByRole('menuitem', { name: 'Lincoln', exact: true })).toBeVisible();

    await page.keyboard.press('Escape');
    await expect(menu).toBeHidden();
  });

  test('town guides contain non-placeholder tourist content', async ({ page }) => {
    const checks = [
      { route: '/town-guides/lincoln', text: 'International Bomber Command Centre' },
      { route: '/town-guides/skegness', text: 'Gibraltar Point National Nature Reserve' },
      { route: '/town-guides/stamford', text: 'Burghley House' },
    ];

    for (const check of checks) {
      await page.goto(check.route);
      await expect(page.locator('body')).toContainText(check.text);
      await expect(page.locator('body')).toContainText('Places to Stay');
      await expect(page.locator('body')).toContainText('Caravan Parks near');
      await expect(page.locator('body')).toContainText('Food & Drink');
      await expect(page.locator('body')).not.toContainText('This guide is coming soon');
      await expect(page.locator('body')).not.toContainText('placeholder photo');
    }
  });
});
