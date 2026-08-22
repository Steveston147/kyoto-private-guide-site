import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('canonical specification files exist and declare project boundaries', async () => {
  const [project, agents, design, tech] = await Promise.all([
    read('PROJECT.md'), read('AGENTS.md'), read('DESIGN.md'), read('TECH.md'),
  ]);
  assert.match(project, /not a booking engine/i);
  assert.match(agents, /not a booking engine/i);
  assert.match(design, /sending an enquiry or request/i);
  assert.match(tech, /Node\.js 20\.9\.0/i);
});

test('sample routes keep a reservation disclaimer', async () => {
  const page = await read('app/page.tsx');
  assert.match(page, /sample route, not a final reservation/i);
});

test('final public service boundaries stay visible', async () => {
  const page = await read('app/page.tsx');
  assert.match(page, /Saturdays, Sundays, and Japanese public holidays/i);
  assert.match(page, /guiding service only/i);
  assert.match(page, /¥40,000/);
  assert.match(page, /¥80,000/);
  assert.match(page, /do not arrange or book hotels, private cars, vans/i);
  assert.doesNotMatch(page, /Kyoto Route Planner/i);
});

test('Japanese guide controlled business rules stay visible', async () => {
  const page = await read('app/japanese-guide/page.tsx');
  assert.match(page, /4時間 ¥26,000/);
  assert.match(page, /¥6,000/);
  assert.match(page, /ツアー当日に現金でお支払いください/);
  assert.match(page, /eltontanaka@gmail\.com/);
  assert.match(page, /タクシーも利用できます/);
  assert.match(page, /タクシー代はお客様の実費負担/);
  assert.match(page, /ホテル、専用車、ハイヤー等の予約・手配は行いません/);
  assert.match(page, /お問い合わせ時点では予約確定ではありません/);
});

test('Japanese guide activity and knowledge evidence stays explicit', async () => {
  const page = await read('app/japanese-guide/page.tsx');
  for (const item of ['京都検定 1級', '奈良検定', '神社検定', '温泉ソムリエ', 'びわ湖検定']) {
    assert.ok(page.includes(item), `${item} missing`);
  }
  assert.match(page, /club-t\.com\/keyword\/%E5%8C%97%E5%B0%BB/);
  assert.match(page, /北尻ガイド同行/);
  assert.match(page, /北尻ナビゲーター同行/);
  assert.match(page, /2026年8月22日確認/);
  assert.match(page, /別商品/);
});

test('Japanese guide UAT gallery stays photo-led and page-scoped', async () => {
  const [page, layout, css, galleryCss] = await Promise.all([
    read('app/japanese-guide/page.tsx'),
    read('app/japanese-guide/layout.tsx'),
    read('app/japanese-guide/japanese-guide.css'),
    read('app/japanese-guide/proof-gallery.css'),
  ]);
  assert.match(page, /className="site-shell japanese-guide-page"/);
  assert.match(page, /実際のご案内風景/);
  assert.match(page, /jp-destination-grid/);
  assert.match(page, /kitajiri-incline\.webp/);
  assert.match(page, /kitajiri-adashino\.webp/);
  assert.match(page, /kitajiri-honenin\.webp/);
  assert.match(page, /kitajiri-manshuin\.webp/);
  assert.match(layout, /import ['"]\.\/japanese-guide\.css['"]/);
  assert.match(layout, /import ['"]\.\/proof-gallery\.css['"]/);
  assert.match(css, /\.japanese-guide-page \.route-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2,/);
  assert.match(galleryCss, /\.jp-destination-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(4,/);
  assert.match(galleryCss, /@media \(max-width: 980px\)[\s\S]*\.jp-destination-grid[\s\S]*repeat\(2,/);
});

test('Japanese guide strict visual UAT keeps premium hero, Japanese typography and left-aligned contact', async () => {
  const [page, layout, polishCss] = await Promise.all([
    read('app/japanese-guide/page.tsx'),
    read('app/japanese-guide/layout.tsx'),
    read('app/japanese-guide/uat-polish.css'),
  ]);

  assert.match(page, /\/kitajiri-kimono\.webp/);
  assert.match(page, /jp-kimono-hero/);
  assert.match(page, /京都在住・京都検定1級/);
  assert.match(page, /次の京都を、まずはメールでご相談ください。/);
  assert.doesNotMatch(page, /次の京都について、まずはメールで話しましょう。/);
  assert.match(layout, /import ['"]\.\/uat-polish\.css['"]/);
  assert.match(polishCss, /--jp-sans:/);
  assert.match(polishCss, /--jp-serif:/);
  assert.match(polishCss, /\.japanese-guide-page \.contact-section\s*\{[\s\S]*grid-template-columns:/);
  assert.match(polishCss, /\.japanese-guide-page \.jp-contact-head\s*\{[\s\S]*text-align:\s*left/);
  assert.match(polishCss, /\.japanese-guide-page \.jp-contact-card \.contact-lead\s*\{[\s\S]*text-align:\s*left/);
  assert.match(polishCss, /@media \(max-width: 760px\)[\s\S]*\.japanese-guide-page \.contact-section[\s\S]*grid-template-columns:\s*1fr/);
});

test('Japanese guide social metadata does not inherit the English Twitter card', async () => {
  const page = await read('app/japanese-guide/page.tsx');
  assert.match(page, /twitter:\s*\{/);
  assert.match(page, /何度来ても、まだ知らない京都がある。/);
  assert.match(page, /\/kitajiri-kimono\.webp/);
  assert.match(page, /京都 リピーター 観光/);
});

test('final responsive UAT safeguards stay enabled', async () => {
  const [layout, uatCss] = await Promise.all([read('app/layout.tsx'), read('app/uat.css')]);
  assert.match(layout, /import ['"]\.\/uat\.css['"]/);
  assert.match(uatCss, /focus-visible/);
  assert.match(uatCss, /prefers-reduced-motion/);
  assert.match(uatCss, /min-height:\s*44px/);
  assert.match(uatCss, /overflow-x:\s*hidden/);
});

test('runtime baseline is declared consistently', async () => {
  const [pkgText, nvmrc] = await Promise.all([read('package.json'), read('.nvmrc')]);
  const pkg = JSON.parse(pkgText);
  assert.equal(pkg.engines?.node, '>=20.9.0 <21');
  assert.equal(nvmrc.trim(), '20.9.0');
});

test('package manifest and lockfile root dependencies stay in sync', async () => {
  const [pkgText, lockText] = await Promise.all([read('package.json'), read('package-lock.json')]);
  const pkg = JSON.parse(pkgText);
  const lock = JSON.parse(lockText);
  const locked = lock.packages?.['']?.dependencies ?? {};
  for (const [name, version] of Object.entries(pkg.dependencies ?? {})) {
    assert.equal(locked[name], version, `${name} differs between package.json and package-lock.json`);
  }
});

test('known pre-upgrade hazards are absent', async () => {
  const [page, layout, config] = await Promise.all([read('app/page.tsx'), read('app/layout.tsx'), read('next.config.js')]);
  const source = `${page}\n${layout}\n${config}`;
  assert.doesNotMatch(source, /@next\/font/);
  assert.doesNotMatch(source, /from ['\"]next\/server['\"].*ImageResponse/);
  assert.doesNotMatch(source, /\bcookies\s*\(/);
  assert.doesNotMatch(source, /\bheaders\s*\(/);
});
