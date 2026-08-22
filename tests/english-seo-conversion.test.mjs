import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('English home keeps six useful route intents and route selection in the enquiry form', async () => {
  const page = await read('app/page.tsx');
  for (const route of [
    'First-Time Kyoto Half Day',
    'Kyoto Highlights Full Day',
    'Nijo Castle & Kyoto History',
    'Ryoan-ji & Northwest Kyoto',
    'Family-Friendly Kyoto Day',
    'Comfortable Kyoto for Senior Travellers',
  ]) {
    assert.ok(page.includes(route), `${route} missing`);
  }
  assert.match(page, /name="route_interest"/);
  assert.match(page, /Not sure yet/);
  assert.match(page, /Ask me to adjust a route/);
  assert.match(page, /sample routes, not final reservations/i);
});

test('English home exposes search-focused metadata, hreflang and service structured data', async () => {
  const page = await read('app/page.tsx');
  assert.match(page, /Private Kyoto Guide \| Don Tanaka, Licensed Guide Interpreter/);
  assert.match(page, /Custom half-day and full-day Kyoto tours/);
  assert.match(page, /"en-US": "\/"/);
  assert.match(page, /"ja-JP": "\/japanese-guide"/);
  assert.match(page, /application\/ld\+json/);
  assert.match(page, /"@type": "Person"/);
  assert.match(page, /"@type": "Service"/);
  assert.match(page, /National Government Licensed Guide Interpreter/);
  assert.match(page, /price: "40000"/);
  assert.match(page, /price: "80000"/);
});

test('English SEO refactor keeps client JavaScript scoped to the FAQ only', async () => {
  const [page, faq] = await Promise.all([read('app/page.tsx'), read('app/FaqList.tsx')]);
  assert.doesNotMatch(page, /^"use client"/m);
  assert.match(faq, /^"use client"/m);
  assert.match(page, /<FaqList items=\{faqItems\} \/>/);
});
