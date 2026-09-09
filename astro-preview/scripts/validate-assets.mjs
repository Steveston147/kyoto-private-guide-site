import { access, readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

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
    if (info.size === 0) {
      failures.push(`Asset is empty: ${assetPath}`);
      continue;
    }

    const lower = assetPath.toLowerCase();
    if (/\.(jpe?g|png|webp)$/.test(lower)) {
      const data = await readFile(filePath);
      const isJpeg = data.length >= 3 && data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff;
      const isPng = data.length >= 8 && data.subarray(0, 8).equals(Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]));
      const isWebp = data.length >= 12 && data.subarray(0,4).toString() === 'RIFF' && data.subarray(8,12).toString() === 'WEBP';

      if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) {
        if (!isJpeg) failures.push(`Invalid JPEG binary: ${assetPath}`);
      } else if (lower.endsWith('.png')) {
        if (!isPng) failures.push(`Invalid PNG binary: ${assetPath}`);
      } else if (lower.endsWith('.webp')) {
        if (!isWebp) failures.push(`Invalid WebP binary: ${assetPath}`);
      }
    }
  } catch {
    failures.push(`Missing local asset: ${assetPath}`);
  }
}

if (failures.length) {
  console.error('Asset validation failed.');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Asset validation passed: ${new Set(paths).size} local assets verified.`);
