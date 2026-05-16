import { test, expect } from '@playwright/test';

const CORE_TOWNS = [
  'Lincoln', 'Skegness', 'Stamford', 'Louth', 'Boston',
  'Grantham', 'Spalding', 'Sleaford', 'Mablethorpe', 'Woodhall Spa',
];

test.describe('Home', () => {
  test('home loads', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header').getByRole('link', { name: /Lincs.*Staycation.*Guide/i })).toBeVisible();
  });
});

test.describe('Main navigation dropdowns (desktop)', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  for (const section of ['Places to Stay', 'Caravan Parks', 'Things to Do', 'Food & Drink', 'Town Guides']) {
    test(`"${section}" dropdown opens and lists locations`, async ({ page }) => {
      await page.goto('/');
      const header = page.locator('header');
      await header.getByRole('button', { name: new RegExp(`Open ${section.toLowerCase()} by location`) }).hover();
      const menu = header.getByRole('menu').filter({ hasText: 'Lincoln' }).first();
      await expect(menu).toBeVisible();
      await expect(menu.getByRole('menuitem', { name: 'Lincoln', exact: true })).toBeVisible();
      await expect(menu.getByRole('menuitem', { name: 'Skegness', exact: true })).toBeVisible();
    });
  }

  test('clicking the main label goes to the category landing page (not Lincoln)', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await header.getByRole('link', { name: 'Places to Stay', exact: true }).click();
    await expect(page).toHaveURL(/\/places-to-stay$/);
  });

  test('selecting a location in dropdown navigates to that town', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await header.getByRole('button', { name: /Open things to do by location/i }).hover();
    const menu = header.getByRole('menu').filter({ hasText: 'Lincoln' }).first();
    await expect(menu).toBeVisible();
    await menu.getByRole('menuitem', { name: 'Stamford', exact: true }).click();
    await expect(page).toHaveURL(/\/things-to-do\/stamford$/);
  });
});

test.describe('Town guides routes', () => {
  for (const town of CORE_TOWNS) {
    const slug = town.toLowerCase().replace(/\s+/g, '-');
    test(`/town-guides/${slug} returns 200`, async ({ page }) => {
      const response = await page.goto(`/town-guides/${slug}`);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toContainText(new RegExp(town, 'i'));
    });
  }
});

test.describe('Critical pages return 200', () => {
  const routes = [
    '/', '/places-to-stay', '/things-to-do', '/food-drink',
    '/caravan-parks', '/town-guides', '/lincolnshire-coast',
    '/dog-friendly', '/family-days-out', '/image-credits',
    '/about', '/contact', '/add-your-business', '/advertise',
    '/editorial-policy', '/privacy-policy', '/affiliate-disclosure',
  ];
  for (const route of routes) {
    test(`${route} loads`, async ({ page }) => {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
    });
  }
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile menu opens and shows location sections', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: 'Open menu' }).click();
    const dialog = page.getByRole('dialog', { name: /Mobile navigation menu/i });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: /^Places to Stay$/ }).click();
    await expect(dialog.getByRole('menuitem', { name: 'Lincoln', exact: true })).toBeVisible();
  });
});
