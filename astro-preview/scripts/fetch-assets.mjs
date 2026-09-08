import { mkdir, writeFile } from 'node:fs/promises';

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Kyoto%2C_Japan_%28Unsplash_UIN-pFfJ7c%29.jpg/2560px-Kyoto%2C_Japan_%28Unsplash_UIN-pFfJ7c%29.jpg';
const outDir = new URL('../public/kyoto/', import.meta.url);
const outFile = new URL('../public/kyoto/yasaka-pagoda.jpg', import.meta.url);

await mkdir(outDir, { recursive: true });
const res = await fetch(url, {
  headers: {
    'User-Agent': 'UmaAcademiaPreview/1.0 (build asset fetch)'
  }
});
if (!res.ok) throw new Error(`Failed to fetch Yasaka asset: ${res.status} ${res.statusText}`);
const buf = Buffer.from(await res.arrayBuffer());
if (buf.length < 100000) throw new Error(`Yasaka asset unexpectedly small: ${buf.length} bytes`);
await writeFile(outFile, buf);
console.log(`Fetched Yasaka asset: ${buf.length} bytes`);
