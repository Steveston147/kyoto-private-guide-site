import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const source = resolve('app/japanese-guide/hero-base64/part1.txt');
const target = resolve('public/kitajiri-kimono.webp');

const encoded = (await readFile(source, 'utf8')).trim();
const image = Buffer.from(encoded, 'base64');

if (image.length < 20000) {
  throw new Error(`Kitajiri hero source is unexpectedly small: ${image.length} bytes`);
}
if (image.subarray(0, 4).toString('ascii') !== 'RIFF' || image.subarray(8, 12).toString('ascii') !== 'WEBP') {
  throw new Error('Kitajiri hero source is not a valid WebP container');
}

await mkdir(dirname(target), { recursive: true });
await writeFile(target, image);
console.log(`Prepared Kitajiri hero image: ${image.length} bytes`);
