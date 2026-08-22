import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');

test('below-fold English guide photos stay lazy and async', () => {
  assert.match(page, /src="\/don\.jpg"[^>]*loading="lazy"[^>]*decoding="async"/);
  assert.match(page, /src="\/recent-guests-austria\.jpg"[^>]*loading="lazy"[^>]*decoding="async"/);
});

test('English hero remains eager for LCP', () => {
  assert.match(page, /src="\/kyoto-hero\.jpg"[^>]*fetchPriority="high"/);
});
