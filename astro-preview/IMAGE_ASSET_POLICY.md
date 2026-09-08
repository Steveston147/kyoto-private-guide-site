# H+ image asset policy

## Scope and ownership

The Astro preview is a self-contained site. Its runtime/public assets live only under `astro-preview/public/`.

- Do not configure Astro to use the repository-root `public/` directory.
- Do not reference images from the legacy Next.js implementation under `/app` or repository-root `/public`.
- Every image used by `index.astro` must be declared in `src/data/site-assets.ts`.
- Pattern changes should normally update the asset manifest and pattern-specific styles, not scatter image paths across templates.
- Duplicate filenames outside `astro-preview/public/` are legacy assets and must not influence the Astro preview.

## Display-quality rules

- Hero / large editorial photography: use source imagery with at least ~2x the expected CSS display width whenever practical.
- Large portrait/editorial panel: target at least 1200 px on the long edge.
- Large landscape editorial panel: target at least 1400 px wide.
- Do not upscale a low-resolution source to disguise insufficient resolution.
- Compression must not visibly smear architecture, foliage, faces, text, hair or fabric detail.
- Preserve user-approved originals outside generated web derivatives whenever practical.

## Guest-photo privacy/cropping rule

- Approved guest faces remain visible; do not blur or mosaic them.
- When Don appears on the left side of a guest photo, crop the displayed frame from the left rather than altering or blurring guest faces.
- Cropping is metadata-driven through `site-assets.ts` (`crop: 'guide-left'`) and implemented in `gallery.css`.
- Do not destructively edit the source JPEG solely to achieve layout cropping.

## Yasaka Pagoda source

`/kyoto/yasaka-pagoda.jpg` is generated at build time from the approved Wikimedia/Unsplash source by `scripts/fetch-assets.mjs`. This is an explicit exception to the normal no-remote-assets rule because GitHub text APIs previously corrupted the binary asset. The generated file is local before Astro builds, and the asset audit verifies the site-local path. If a verified binary master is committed later, remove the fetch step.

## Build gate

`npm run build` runs the prebuild asset fetch and `scripts/audit-assets.mjs`. The audit fails when:

- Astro points at `../public`;
- the page embeds image data URIs/base64;
- the asset manifest contains remote URLs;
- a declared local asset is missing or empty.

## Branch safety

The production `main` branch remains untouched during H+ preview work. Changes are isolated to `preview/hplus-astro-resume` until visual UAT is complete.
