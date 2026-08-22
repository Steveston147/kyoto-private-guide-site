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
- no horizontal overflow;
- visible and correctly placed direct enquiry form;
- Formspree form action and enquiry-only wording.

When dependency versions change, update `package.json` and regenerate `package-lock.json` together.

## Static assets

Production-critical images should be committed as normal files under `public/` where practical. Do not reconstruct the Kitajiri hero image from Base64/text chunks during `prebuild`. Asset validation belongs in tests and browser UAT, not in a custom build-generation path.

## Framework migration

Upgrade in stages: Next.js 14 to 15 with React 19, validate, then consider Next.js 16 separately.

See `UPGRADE.md` for the current compatibility audit and migration notes.

Do not combine a major framework/dependency upgrade with the V1 hardening PR, a major visual redesign, or controlled business-content changes.
