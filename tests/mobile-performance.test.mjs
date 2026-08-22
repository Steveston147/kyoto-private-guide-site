import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

async function exists(path) {
  try {
    await access(new URL(`../${path}`, import.meta.url));
    return true;
  } catch {
    return false;
  }
}

test('mobile font stack uses system fonts without a downloaded webfont', async () => {
  const [layout, css] = await Promise.all([
    read('app/layout.tsx'),
    read('app/mobile-performance.css'),
  ]);

  assert.doesNotMatch(layout, /next\/font\/google/);
  assert.doesNotMatch(layout, /Inter\(/);
  assert.match(layout, /mobile-performance\.css/);
  assert.match(css, /-apple-system/);
  assert.match(css, /BlinkMacSystemFont/);
  assert.match(css, /Hiragino Kaku Gothic ProN/);
  assert.match(css, /Hiragino Mincho ProN/);
});

test('mobile rendering safeguards prioritise readability and low paint overhead', async () => {
  const css = await read('app/mobile-performance.css');
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /content-visibility:\s*auto/);
  assert.match(css, /contain-intrinsic-size:\s*auto 620px/);
  assert.match(css, /font-size:\s*0\.96rem/);
  assert.match(css, /box-shadow:\s*0 5px 16px/);
});

test('unused heavyweight Kyoto photos are not shipped in the deployment bundle', async () => {
  for (const path of [
    'public/kyoto/arashiyama.jpg',
    'public/kyoto/gion-yasaka.jpg',
    'public/kyoto/kinkakuji.jpg',
    'public/kyoto/kiyomizu-dera.jpg',
  ]) {
    assert.equal(await exists(path), false, `${path} should not be deployed when unused`);
  }
});
