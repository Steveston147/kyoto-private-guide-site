# V1 Hardening Record — 2026-08-22

## Purpose

This hardening pass freezes the current public product after the Japanese guide page reached a usable sales state and the Formspree enquiry path was manually verified end to end.

## Completed in the original hardening PR

1. Synchronised `PROJECT.md`, `README.md`, `DESIGN.md`, `AGENTS.md`, `TECH.md`, `UPGRADE.md`, and the Japanese UAT checklist with then-current production behaviour.
2. Replaced the Japanese form's DOM-query/Portal mounting with direct rendering inside the contact section.
3. Kept direct Formspree submission and added a short privacy disclosure plus `/privacy` notice page.
4. Added real Chromium browser UAT for 1440x900 desktop and 390x844 mobile, including hero-image validation, form validation, and horizontal-overflow checks.
5. Attempted to simplify the Kitajiri hero into a normal committed WebP asset.
6. Added `/privacy` to the sitemap.

## Hero regression and final hotfix — 2026-08-22

After the V1 hardening merge, the Japanese hero displayed a beige/blank image again. The cause was not Vercel caching or a browser problem.

The original hardening change removed the known-working deterministic hero preparation path and selected a historical static WebP blob as the permanent asset. Investigation then showed that multiple historical WebP blobs were technically valid and had plausible dimensions but were visually blank. This explains why the earlier container/dimension-only checks passed while the production page was visibly wrong.

The known-working portrait source was the version-controlled five-chunk source under `app/japanese-guide/hero-base64/`, reconstructed by `scripts/prepare-kitajiri-hero.mjs`. The hotfix restores that preparation path through both `predev` and `prebuild`.

The regression guardrails are now stronger:

- source-level tests verify that the five source chunks reconstruct to a valid WebP with adequate dimensions and that `predev` / `prebuild` invoke the preparation script;
- Playwright browser UAT checks actual image pixel/luminance variation and colour variation, not only dimensions;
- Playwright also checks the rendered hero screenshot complexity;
- the blank static WebP demonstrably failed the new browser UAT on both desktop and mobile with zero luminance variation;
- after restoring the chunk-based preparation path, lint, typecheck, tests, production build, desktop browser UAT, and mobile browser UAT all passed.

This source path is intentional until a future dedicated asset-migration PR replaces it with a normal binary asset and proves the replacement through the same visual UAT before merge.

## Human UAT evidence carried into the freeze

Before the original hardening PR, a real Japanese enquiry was submitted through the public form and received successfully at the configured inbox. The Kitajiri kimono portrait had also been confirmed visible in production when the preparation path was active.

Automated browser UAT does **not** submit real enquiries; it validates the form endpoint, placement, controls, enquiry-only wording, and hero rendering without generating mail.

## Intentionally deferred to a separate technical PR

- Next.js 15 / React 19 migration.
- ESLint/tooling modernisation and dependency/security remediation.
- GitHub Actions Node-runtime deprecation cleanup.
- Remaining Next `<img>` optimisation warnings.
- Root bilingual `<html lang>` architecture; the Japanese page currently scopes content with `lang="ja"`, but the root layout remains English.
- A future move from the chunk-based Kitajiri hero source to a normal committed binary asset, if desired, after equivalent visual verification.

These deferred items are maintenance work and must not be mixed into unrelated V1 content or business-rule changes.
