import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');

test('below-fold English guide photos stay lazy and async', () => {
  assert.match(page, /src="\/don\.jpg"[^>]*loading="lazy"[^>]*decoding="async"/);
  for (const image of [
    'recent-tour-arashiyama-couple.jpg',
    'recent-tour-arashiyama-family.jpg',
    'recent-tour-kiyomizudera-couple.jpg',
    'recent-tour-kiyomizudera-family.jpg',
  ]) {
    const escaped = image.replaceAll('.', '\\.');
    assert.match(page, new RegExp(`src="/${escaped}"[^>]*loading="lazy"[^>]*decoding="async"`));
  }
});

test('English hero remains eager for LCP', () => {
  assert.match(page, /src="\/kyoto-hero\.jpg"[^>]*fetchPriority="high"/);
});
