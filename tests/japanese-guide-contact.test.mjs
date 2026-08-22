import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('Japanese guide inquiry form is mounted and submits directly', async () => {
  const [layout, form, css] = await Promise.all([
    read('app/japanese-guide/layout.tsx'),
    read('app/japanese-guide/InquiryForm.tsx'),
    read('app/japanese-guide/inquiry-form.css'),
  ]);

  assert.match(layout, /InquiryForm/);
  assert.match(layout, /inquiry-form\.css/);
  for (const label of ['お名前', '返信先メール', 'ご希望日', '人数', '行ってみたい場所', 'ご希望・メッセージ']) {
    assert.ok(form.includes(label), `${label} missing`);
  }
  assert.match(form, /https:\/\/formspree\.io\/f\/mykdbwbl/);
  assert.match(form, /method="POST"/);
  assert.doesNotMatch(form, /mailto:/);
  assert.match(form, /予約確定ではありません/);
  assert.match(form, /問い合わせを送信する/);
  assert.match(form, /メールソフトは起動しません/);
  assert.match(css, /\.jp-form-grid/);
  assert.match(css, /grid-template-columns:\s*repeat\(2,/);
  assert.match(css, /@media \(max-width: 760px\)[\s\S]*grid-template-columns:\s*1fr/);
});

test('Kitajiri kimono hero chunks reconstruct a real WebP', async () => {
  const chunks = await Promise.all(
    [1, 2, 3, 4, 5].map((number) => read(`app/japanese-guide/hero-base64/chunk${number}.txt`)),
  );
  const encoded = chunks.map((chunk) => chunk.trim()).join('');
  const image = Buffer.from(encoded, 'base64');
  assert.ok(image.length > 15000, `kimono hero source is unexpectedly small: ${image.length} bytes`);
  assert.equal(image.subarray(0, 4).toString('ascii'), 'RIFF');
  assert.equal(image.subarray(8, 12).toString('ascii'), 'WEBP');

  const buildScript = await read('scripts/prepare-kitajiri-hero.mjs');
  assert.match(buildScript, /chunk\$\{number\}\.txt/);
  assert.match(buildScript, /public\/kitajiri-kimono\.webp/);
});
