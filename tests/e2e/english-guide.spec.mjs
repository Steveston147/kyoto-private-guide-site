import { test, expect } from '@playwright/test';

async function expectNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test.beforeEach(async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test('English private-guide page exposes useful route depth without layout overflow', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: 'Kyoto made simple, calm, and personal.' })).toBeVisible();
  await expect(page.locator('#routes .route-card')).toHaveCount(6);
  await expect(page.getByRole('heading', { name: 'Six useful starting points — then we adjust them to you' })).toBeVisible();
  await expect(page.getByText('Nijo Castle & Kyoto History', { exact: true })).toBeVisible();
  await expect(page.getByText('Comfortable Kyoto for Senior Travellers', { exact: true })).toBeVisible();
  await expectNoHorizontalOverflow(page);
});

test('English enquiry form lets guests choose a route without implying booking', async ({ page }) => {
  const contact = page.locator('#contact');
  await contact.scrollIntoViewIfNeeded();
  const routeSelect = contact.locator('select[name="route_interest"]');
  await expect(routeSelect).toBeVisible();
  await expect(routeSelect.locator('option')).toHaveCount(7);
  await expect(routeSelect).toHaveValue('Not sure yet');
  await expect(contact.getByRole('button', { name: 'Send enquiry' })).toBeVisible();
  await expect(contact.locator('form')).toHaveAttribute('action', 'https://formspree.io/f/mykdbwbl');
  await expect(contact).toContainText('does not create a reservation');
  await expectNoHorizontalOverflow(page);
});

test('English page publishes canonical, hreflang and service structured data', async ({ page }) => {
  await expect(page).toHaveTitle('Private Kyoto Guide | Don Tanaka, Licensed Guide Interpreter');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.umaacademia.com/');
  await expect(page.locator('link[rel="alternate"][hreflang="ja-JP"]')).toHaveAttribute('href', 'https://www.umaacademia.com/japanese-guide');

  const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
  expect(jsonLd).toBeTruthy();
  const data = JSON.parse(jsonLd);
  const types = data['@graph'].map((entry) => entry['@type']);
  expect(types).toContain('Person');
  expect(types).toContain('Service');
  await expectNoHorizontalOverflow(page);
});
