import { test, expect } from '@playwright/test';

const publicRoutes = [
  '/',
  '/town-guides/lincoln',
  '/places-to-stay',
  '/things-to-do',
  '/food-drink',
  '/blog/best-beaches',
  '/blog/rainy-day-activities',
  '/blog/things-to-do-with-kids',
  '/blog/weekend-breaks',
  '/blog/best-places-to-stay',
];

const blockedCopy = [
  /accommodation candidate/i,
  /food and drink candidate/i,
  /\bcandidate\b/i,
  /before recommending/i,
  /sourced from public directories/i,
  /needs verification/i,
  /needs review/i,
  /monetisation priority/i,
  /affiliate route/i,
  /\bCJ\b/,
];

test.describe('public content quality', () => {
  for (const route of publicRoutes) {
    test(`${route} does not expose internal wording`, async ({ page }) => {
      await page.goto(route);
      await expect(page.locator('body')).toBeVisible();
      const text = await page.locator('body').innerText();
      for (const pattern of blockedCopy) {
        expect(text, `${route} should not contain ${pattern}`).not.toMatch(pattern);
      }
    });
  }
});
