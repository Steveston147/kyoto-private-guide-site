import { access, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicRoot = fileURLToPath(new URL('../public/', import.meta.url));
const configPath = fileURLToPath(new URL('../astro.config.mjs', import.meta.url));
const pagePath = fileURLToPath(new URL('../src/pages/index.astro', import.meta.url));
const manifestPath = fileURLToPath(new URL('../src/data/site-assets.ts', import.meta.url));

const [config, page, manifest] = await Promise.all([
  readFile(configPath, 'utf8'),
  readFile(pagePath, 'utf8'),
  readFile(manifestPath, 'utf8'),
]);

const failures = [];
if (/\.\.\/public/.test(config)) failures.push('Astro must not expose repository-root public/.');
if (/readFileSync|data:image\//.test(page)) failures.push('Page must not embed image files as base64/data URIs.');
if (/https?:\/\//.test(manifest)) failures.push('Asset manifest must use site-local paths only.');

const paths = [...manifest.matchAll(/(?:src|firstTime|highlights|gentlePace):\s*'([^']+)'/g)].map((m) => m[1]);
for (const assetPath of new Set(paths)) {
  if (!assetPath.startsWith('/')) {
    failures.push(`Asset path must be root-relative: ${assetPath}`);
    continue;
  }
  const filePath = `${publicRoot}${assetPath.slice(1)}`;
  try {
    await access(filePath);
    const info = await stat(filePath);
    if (info.size === 0) failures.push(`Asset is empty: ${assetPath}`);
  } catch {
    failures.push(`Missing local asset: ${assetPath}`);
  }
}

if (failures.length) {
  console.error(`Asset audit failed in ${root}`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Asset audit passed: ${new Set(paths).size} local assets verified.`);
