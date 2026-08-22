import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('Japanese guide final UAT stylesheet is loaded last', async () => {
  const layout = await read('app/japanese-guide/layout.tsx');
  const luxuryIndex = layout.indexOf("./luxury-uat.css");
  const inquiryIndex = layout.indexOf("./inquiry-form.css");
  assert.ok(luxuryIndex > inquiryIndex, 'luxury UAT stylesheet must load after earlier page styles');
});

test('Hero typography avoids awkward Japanese phrase breaks and is responsive', async () => {
  const css = await read('app/japanese-guide/luxury-uat.css');

  assert.match(css, /word-break:\s*auto-phrase/);
  assert.match(css, /line-break:\s*strict/);
  assert.match(css, /grid-template-columns:\s*minmax\(0, 1\.18fr\) minmax\(420px, 0\.82fr\)/);
  assert.match(css, /font-size:\s*clamp\(2\.9rem, 3\.15vw, 3\.35rem\)/);
  assert.match(css, /@media \(max-width: 980px\)[\s\S]*grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width: 760px\)[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /@media \(max-width: 520px\)[\s\S]*grid-template-columns:\s*1fr/);
  assert.match(css, /hero-image-wrap\.jp-kimono-hero[\s\S]*order:\s*0/);
});
