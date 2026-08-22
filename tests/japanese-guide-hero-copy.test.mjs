import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('hero copy uses phrase-safe line structure and trust cues', async () => {
  const [page, css] = await Promise.all([
    read('app/japanese-guide/page.tsx'),
    read('app/japanese-guide/luxury-uat.css'),
  ]);

  for (const token of [
    'jp-hero-title-line',
    'jp-hero-title-chunk',
    '何度来ても、',
    'まだ知らない',
    '京都がある。',
    'jp-hero-assurance',
    '京都検定1級',
    'クラブツーリズムでも活動',
  ]) {
    assert.ok(page.includes(token), `${token} missing from hero`);
  }

  assert.match(css, /jp-hero-title-chunk[\s\S]*white-space:\s*nowrap/);
  assert.match(css, /@media \(max-width: 520px\)[\s\S]*jp-hero-title-chunk[\s\S]*display:\s*block/);
});
