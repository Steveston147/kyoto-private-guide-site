# Upgrade Readiness

Technical upgrade notes for the Kyoto Private Guide site.

Current validated baseline: Next.js 14.2.35, React 18.2.0, Node 20.9.0+ within Node 20.

## V1 freeze rule

The current hardening work is intentionally separated from dependency/framework modernisation. Do not mix the V1 production hardening PR with the Next.js 15 / React 19 migration.

V1 hardening covers documentation synchronisation, stable committed assets, direct enquiry-form placement, privacy disclosure, and real-browser desktop/mobile UAT.

## Next migration step

After the V1 hardening PR is merged and production is stable, create a separate technical PR for:

1. dependency/security audit with exact affected packages reviewed;
2. supported ESLint/tooling alignment;
3. Next.js 14 to 15 and React 18 to 19 migration;
4. validation of Node runtime and GitHub Actions deprecation warnings;
5. browser UAT, Formspree behaviour, metadata, sitemap, robots, and public business rules after migration;
6. consideration of Next.js 16 only after the Next.js 15 baseline is stable.

Next.js 14 validation previously completed with a regenerated package-lock.json and successful npm ci, typecheck, contract tests, lint, and production build.

Known maintenance findings at the 2026-08-22 audit include deprecated/aging lint tooling, dependency audit warnings, GitHub Actions Node-runtime deprecation warnings, outdated Browserslist data, and remaining `<img>` optimisation warnings. These are maintenance items, not reasons to block the current public V1, but they must be handled deliberately in the separate upgrade PR.

Dependency upgrades must update `package.json` and `package-lock.json` together in the same change. Do not use `npm audit fix --force` as an unsupervised migration strategy.
