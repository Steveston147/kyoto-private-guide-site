import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Keep Astro self-contained. Never point publicDir at the repository-root
  // public/ directory used by the legacy Next.js implementation.
  build: {
    assets: '_assets',
  },
});
