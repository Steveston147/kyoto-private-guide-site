# Kyoto Private Guide Site — Technical Specification

Last updated: 2026-08-13

`PROJECT.md` remains authoritative for business rules.

## Runtime

Use Node.js 20.9.0 or later within Node 20. The baseline is declared in `package.json` and `.nvmrc`.

## Validation

Run `npm ci`, `npm run typecheck`, `npm test`, `npm run lint`, and `npm run build` as applicable before merging technical changes.

When dependency versions change, update `package.json` and regenerate `package-lock.json` together.

## Framework migration

Upgrade in stages: Next.js 13 to 14 with React 18, validate, then Next.js 14 to 15 with React 19, validate again, and consider Next.js 16 separately.

See `UPGRADE.md` for the current compatibility audit and migration notes.

Do not combine a major framework upgrade with the planned large `app/page.tsx` refactor.
