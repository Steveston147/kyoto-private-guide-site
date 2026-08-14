import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('canonical specification files exist and declare project boundaries', async () => {
  const [project, agents, design, tech] = await Promise.all([
    read('PROJECT.md'),
    read('AGENTS.md'),
    read('DESIGN.md'),
    read('TECH.md'),
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

test('final responsive UAT safeguards stay enabled', async () => {
  const [layout, uatCss] = await Promise.all([
    read('app/layout.tsx'),
    read('app/uat.css'),
  ]);
  assert.match(layout, /import ['"]\.\/uat\.css['"]/);
  assert.match(uatCss, /focus-visible/);
  assert.match(uatCss, /prefers-reduced-motion/);
  assert.match(uatCss, /min-height:\s*44px/);
  assert.match(uatCss, /overflow-x:\s*hidden/);
});

test('runtime baseline is declared consistently', async () => {
  const [pkgText, nvmrc] = await Promise.all([
    read('package.json'),
    read('.nvmrc'),
  ]);
  const pkg = JSON.parse(pkgText);

  assert.equal(pkg.engines?.node, '>=20.9.0 <21');
  assert.equal(nvmrc.trim(), '20.9.0');
});

test('package manifest and lockfile root dependencies stay in sync', async () => {
  const [pkgText, lockText] = await Promise.all([
    read('package.json'),
    read('package-lock.json'),
  ]);
  const pkg = JSON.parse(pkgText);
  const lock = JSON.parse(lockText);
  const locked = lock.packages?.['']?.dependencies ?? {};

  for (const [name, version] of Object.entries(pkg.dependencies ?? {})) {
    assert.equal(locked[name], version, `${name} differs between package.json and package-lock.json`);
  }
});

test('known pre-upgrade hazards are absent', async () => {
  const [page, layout, config] = await Promise.all([
    read('app/page.tsx'),
    read('app/layout.tsx'),
    read('next.config.js'),
  ]);
  const source = `${page}\n${layout}\n${config}`;

  assert.doesNotMatch(source, /@next\/font/);
  assert.doesNotMatch(source, /from ['\"]next\/server['\"].*ImageResponse/);
  assert.doesNotMatch(source, /\bcookies\s*\(/);
  assert.doesNotMatch(source, /\bheaders\s*\(/);
});
