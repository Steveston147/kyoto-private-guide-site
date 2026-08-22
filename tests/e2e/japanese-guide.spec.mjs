import { test, expect } from '@playwright/test';

async function expectNoHorizontalOverflow(page) {
  const overflow = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
}

test.beforeEach(async ({ page }) => {
  await page.goto('/japanese-guide', { waitUntil: 'domcontentloaded' });
});

test('Japanese guide hero is the real portrait, not a blank placeholder', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1, name: /何度来ても.*京都がある/ })).toBeVisible();
  const hero = page.locator('.jp-kimono-hero .hero-image');
  await expect(hero).toBeVisible();

  await expect.poll(async () => hero.evaluate((image) => image.naturalWidth)).toBeGreaterThanOrEqual(360);
  const imageState = await hero.evaluate((image) => ({
    complete: image.complete,
    naturalWidth: image.naturalWidth,
    naturalHeight: image.naturalHeight,
  }));
  expect(imageState.complete).toBeTruthy();
  expect(imageState.naturalWidth).toBeGreaterThanOrEqual(360);
  expect(imageState.naturalHeight).toBeGreaterThanOrEqual(450);

  const visualStats = await hero.evaluate((image) => {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 40;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) throw new Error('Canvas 2D context unavailable');
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const luminance = [];
    const colourBuckets = new Set();
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      luminance.push(0.2126 * r + 0.7152 * g + 0.0722 * b);
      colourBuckets.add(`${r >> 4}-${g >> 4}-${b >> 4}`);
    }
    const mean = luminance.reduce((sum, value) => sum + value, 0) / luminance.length;
    const variance = luminance.reduce((sum, value) => sum + (value - mean) ** 2, 0) / luminance.length;
    return {
      luminanceStdDev: Math.sqrt(variance),
      colourBucketCount: colourBuckets.size,
    };
  });
  expect(visualStats.luminanceStdDev).toBeGreaterThan(18);
  expect(visualStats.colourBucketCount).toBeGreaterThan(40);

  const renderedHero = await page.locator('.jp-kimono-hero').screenshot();
  expect(renderedHero.length).toBeGreaterThan(20_000);
  await expectNoHorizontalOverflow(page);
});

test('Japanese enquiry form is visible, direct and non-booking', async ({ page }) => {
  const contact = page.locator('#contact');
  await contact.scrollIntoViewIfNeeded();
  await expect(contact.getByLabel('お名前 必須')).toBeVisible();
  await expect(contact.getByLabel('返信先メール 必須')).toBeVisible();
  await expect(contact.getByRole('button', { name: '問い合わせを送信する' })).toBeVisible();

  const form = contact.locator('form.jp-inquiry-form');
  await expect(form).toHaveAttribute('method', /post/i);
  await expect(form).toHaveAttribute('action', 'https://formspree.io/f/mykdbwbl');
  await expect(contact).toContainText('お問い合わせ時点では予約確定ではありません');
  await expect(contact.getByRole('link', { name: 'プライバシーについて' })).toHaveAttribute('href', '/privacy');
  await expectNoHorizontalOverflow(page);
});

test('Japanese page keeps premium hierarchy at the configured viewport', async ({ page }, testInfo) => {
  const title = page.locator('.jp-hero-title');
  const image = page.locator('.jp-kimono-hero');
  const titleBox = await title.boundingBox();
  const imageBox = await image.boundingBox();
  expect(titleBox).not.toBeNull();
  expect(imageBox).not.toBeNull();

  if (testInfo.project.name === 'desktop-chromium') {
    expect(titleBox.width).toBeGreaterThan(430);
    expect(imageBox.width).toBeGreaterThan(380);
    expect(imageBox.x).toBeGreaterThan(titleBox.x);
  } else {
    expect(titleBox.width).toBeLessThanOrEqual(390);
    expect(imageBox.width).toBeLessThanOrEqual(390);
    const buttons = page.locator('.hero-actions .btn');
    await expect(buttons.first()).toBeVisible();
    await expect(buttons.nth(1)).toBeVisible();
  }

  await expectNoHorizontalOverflow(page);
});
