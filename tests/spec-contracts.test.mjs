import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('canonical specification files exist and declare project boundaries', async () => {
  const [project, agents, design] = await Promise.all([
    read('PROJECT.md'),
    read('AGENTS.md'),
    read('DESIGN.md'),
  ]);

  assert.match(project, /not a booking engine/i);
  assert.match(agents, /not a booking engine/i);
  assert.match(design, /sending an enquiry or request/i);
});

test('route generator keeps a reservation disclaimer', async () => {
  const page = await read('app/page.tsx');
  assert.match(page, /sample route, not a final reservation/i);
});
