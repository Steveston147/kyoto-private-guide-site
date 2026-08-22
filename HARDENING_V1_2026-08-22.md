# V1 Hardening Record — 2026-08-22

## Purpose

This hardening pass freezes the current public product after the Japanese guide page reached a usable sales state and the Formspree enquiry path was manually verified end to end.

## Completed in this PR

1. Synchronised `PROJECT.md`, `README.md`, `DESIGN.md`, `AGENTS.md`, `TECH.md`, `UPGRADE.md`, and the Japanese UAT checklist with current production behaviour.
2. Replaced the Japanese form's DOM-query/Portal mounting with direct rendering inside the contact section.
3. Kept direct Formspree submission and added a short privacy disclosure plus `/privacy` notice page.
4. Added real Chromium browser UAT for 1440x900 desktop and 390x844 mobile, including hero-image validation, form validation, and horizontal-overflow checks.
5. Restored the Kitajiri kimono hero as a normal committed WebP under `public/` and removed Base64/text-chunk reconstruction and the `prebuild` image-generation step.
6. Added `/privacy` to the sitemap.

## Human UAT evidence carried into the freeze

Before this hardening PR, a real Japanese enquiry was submitted through the public form and received successfully at the configured inbox. The Kitajiri kimono portrait was also confirmed visible in production.

Automated browser UAT does **not** submit real enquiries; it validates the form endpoint, placement, controls, and enquiry-only wording without generating mail.

## Intentionally deferred to a separate technical PR

- Next.js 15 / React 19 migration.
- ESLint/tooling modernisation and dependency/security remediation.
- GitHub Actions Node-runtime deprecation cleanup.
- Remaining Next `<img>` optimisation warnings.
- Root bilingual `<html lang>` architecture; the Japanese page currently scopes content with `lang="ja"`, but the root layout remains English.
- Further image-resolution improvements beyond the stable committed V1 portrait if a better source asset is later selected.

These deferred items are maintenance work and must not be mixed into V1 content or business-rule changes.
