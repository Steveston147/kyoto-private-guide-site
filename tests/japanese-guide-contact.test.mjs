import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const readBytes = (path) => readFile(new URL(`../${path}`, import.meta.url));

test('Japanese guide inquiry form is mounted directly and submits through Formspree', async () => {
  const [page, layout, form, css] = await Promise.all([
    read('app/japanese-guide/page.tsx'),
    read('app/japanese-guide/layout.tsx'),
    read('app/japanese-guide/InquiryForm.tsx'),
    read('app/japanese-guide/inquiry-form.css'),
  ]);

  assert.match(page, /import InquiryForm from ["']\.\/InquiryForm["']/);
  assert.match(page, /<InquiryForm \/>/);
  assert.doesNotMatch(layout, /InquiryForm/);
  assert.match(layout, /inquiry-form\.css/);
  assert.doesNotMatch(form, /createPortal|querySelector|useEffect|useState/);

  for (const label of ['お名前', '返信先メール', 'ご希望日', '人数', '行ってみたい場所', 'ご希望・メッセージ']) {
    assert.ok(form.includes(label), `${label} missing`);
  }
  assert.match(form, /https:\/\/formspree\.io\/f\/mykdbwbl/);
  assert.match(form, /method="POST"/);
  assert.doesNotMatch(form, /mailto:/);
  assert.match(form, /予約確定ではありません/);
  assert.match(form, /問い合わせを送信する/);
  assert.match(form, /メールソフトは起動しません/);
  assert.match(form, /Formspree/);
  assert.match(form, /\/privacy/);
  assert.match(css, /\.jp-form-grid/);
  assert.match(css, /grid-template-columns:\s*repeat\(2,/);
  assert.match(css, /\.jp-form-privacy/);
  assert.match(css, /@media \(max-width: 760px\)[\s\S]*grid-template-columns:\s*1fr/);
});

test('Kitajiri kimono hero is a committed WebP asset with adequate intrinsic dimensions', async () => {
  const image = await readBytes('public/kitajiri-kimono.webp');
  assert.ok(image.length > 10000, `kimono hero asset is unexpectedly small: ${image.length} bytes`);
  assert.equal(image.subarray(0, 4).toString('ascii'), 'RIFF');
  assert.equal(image.subarray(8, 12).toString('ascii'), 'WEBP');

  const vp8FrameMarker = image.indexOf(Buffer.from([0x9d, 0x01, 0x2a]));
  assert.ok(vp8FrameMarker > 0, 'VP8 frame marker not found in kimono hero');
  const width = image.readUInt16LE(vp8FrameMarker + 3) & 0x3fff;
  const height = image.readUInt16LE(vp8FrameMarker + 5) & 0x3fff;
  assert.ok(width >= 500, `kimono hero width is too small: ${width}px`);
  assert.ok(height >= 600, `kimono hero height is too small: ${height}px`);

  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.scripts?.prebuild, undefined, 'hero image should not depend on a prebuild reconstruction step');
});
