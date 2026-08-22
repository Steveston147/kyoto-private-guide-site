# Kyoto Private Guide Site — Technical Specification

Last updated: 2026-08-22

`PROJECT.md` remains authoritative for business rules.

## Runtime

Use Node.js 20.9.0 or later within Node 20. The baseline is declared in `package.json` and `.nvmrc`.

## Validation

Run `npm ci`, `npm run typecheck`, `npm test`, `npm run lint`, and `npm run build` as applicable before merging technical changes.

The GitHub Actions quality gate additionally performs real-browser UAT for the Japanese guide page. Playwright is installed ephemerally in CI with `--no-save --package-lock=false`, so browser-test tooling is not added to the production dependency tree or Vercel install burden.

Browser UAT must cover at least:

- desktop Chromium at 1440 x 900;
- mobile Chromium at 390 x 844;
- hero image visibility and intrinsic size;
- hero pixel/luminance and colour variation sufficient to reject a blank or near-uniform placeholder;
- rendered hero screenshot complexity;
- no horizontal overflow;
- visible and correctly placed direct enquiry form;
- Formspree form action and enquiry-only wording.

When dependency versions change, update `package.json` and regenerate `package-lock.json` together.

## Critical image assets

Production-critical images should normally be committed as ordinary files under `public/` where practical.

The Kitajiri hero is a deliberate exception because the known-good portrait source is currently stored as five version-controlled Base64 chunks under `app/japanese-guide/hero-base64/`. `scripts/prepare-kitajiri-hero.mjs` deterministically reconstructs `public/kitajiri-kimono.webp` through both `predev` and `prebuild`.

Do not remove that preparation path or substitute a historical static WebP merely because the substitute has a valid WebP container and plausible dimensions. The 2026-08-22 regression demonstrated that such a file can still be visually blank. Source-level tests validate reconstruction and dimensions; Playwright validates actual rendered visual variation.

A future migration to a normal committed binary hero asset is acceptable only in a dedicated, visually verified change that passes the same browser UAT before merge.

## Framework migration

Upgrade in stages: Next.js 14 to 15 with React 19, validate, then consider Next.js 16 separately.

See `UPGRADE.md` for the current compatibility audit and migration notes.

Do not combine a major framework/dependency upgrade with V1 production hardening, a major visual redesign, or controlled business-content changes.
