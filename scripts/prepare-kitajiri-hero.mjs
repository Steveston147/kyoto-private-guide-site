import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const chunkPaths = [1, 2, 3, 4, 5].map((number) =>
  resolve(`app/japanese-guide/hero-base64/chunk${number}.txt`),
);
const target = resolve('public/kitajiri-kimono.webp');

const chunks = await Promise.all(chunkPaths.map((path) => readFile(path, 'utf8')));
const encoded = chunks.map((chunk) => chunk.trim()).join('');
const image = Buffer.from(encoded, 'base64');

if (image.length < 15000) {
  throw new Error(`Kitajiri hero source is unexpectedly small: ${image.length} bytes`);
}
if (image.subarray(0, 4).toString('ascii') !== 'RIFF' || image.subarray(8, 12).toString('ascii') !== 'WEBP') {
  throw new Error('Kitajiri hero source is not a valid WebP container');
}

await mkdir(dirname(target), { recursive: true });
await writeFile(target, image);
console.log(`Prepared Kitajiri hero image: ${image.length} bytes`);
