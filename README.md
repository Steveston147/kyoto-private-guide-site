# Kyoto Private Guide Site

Public website for two direct guide services under Uma Academia:

- Don Tanaka's English-language private guide service in Kyoto.
- Kitajiri's Japanese-language private guide service for repeat Kyoto visitors.

Production domain: https://www.umaacademia.com

## Purpose

The site explains each guide service, fees, sample route ideas, service boundaries, and accepts direct enquiries from prospective guests.

It is a marketing and enquiry website. It is **not** a live booking engine, payment system, live availability calendar, transport booking service, hotel booking service, or travel agency.

## Public routes

- `/` — Don Tanaka English guide page.
- `/japanese-guide` — Kitajiri Japanese guide page.
- `/privacy` — enquiry privacy notice.
- `/robots.txt` and `/sitemap.xml` — search-engine support.

## Specification documents

Read these before making substantial changes, in this order:

1. `PROJECT.md` — canonical business and product specification.
2. `DESIGN.md` — visual, responsive, accessibility, and interaction rules.
3. `AGENTS.md` — guardrails for AI-assisted development.
4. `TECH.md` / `UPGRADE.md` — technical constraints and upgrade procedure.
5. `app/japanese-guide/UAT_CHECKLIST.md` — current Japanese-page UAT acceptance checklist.

If documentation and implementation disagree, do not silently rewrite controlled business rules. Resolve the discrepancy deliberately.

## Current stack

- Next.js 14 App Router
- React 18
- TypeScript
- CSS / Tailwind toolchain
- Formspree for enquiry delivery
- GitHub Actions quality gate
- Playwright browser UAT installed ephemerally in CI, so it does not become a Vercel production dependency
- SEO metadata, sitemap, and robots configuration

Dependency versions are locked in `package.json` and `package-lock.json`.

## Local development

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

Normal quality checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The CI workflow additionally installs Playwright without saving it to the project dependency tree, starts the production build locally, and performs real Chromium UAT at desktop and mobile viewport sizes.

## Main implementation

- `app/page.tsx` — English guide page and English enquiry form.
- `app/japanese-guide/page.tsx` — Japanese guide page and direct enquiry-form placement.
- `app/japanese-guide/InquiryForm.tsx` — Japanese Formspree enquiry form.
- `app/japanese-guide/*.css` — Japanese-page visual and responsive layers.
- `app/privacy/page.tsx` — privacy notice for enquiry data.
- `app/layout.tsx` — root metadata and layout.
- `app/robots.ts` / `app/sitemap.ts` — crawl and sitemap configuration.
- `tests/*.test.mjs` — contract and source-level regression tests.
- `tests/e2e/japanese-guide.spec.mjs` — real-browser Japanese-page UAT.

## Controlled business content

Treat the following as controlled, not cosmetic:

- guide identity and qualifications;
- guide fees and payment method;
- availability wording;
- included/excluded costs;
- taxi and transport wording;
- booking/reservation status;
- contact destination and form endpoint;
- service boundaries.

See `PROJECT.md` for the canonical rules.

## Deployment

The project is designed for Vercel-compatible deployment. Changes should normally be made on a branch and reviewed through a pull request before merging to `main`.

For the V1 freeze, prefer small maintenance changes over feature additions. Substantial dependency/framework upgrades should be isolated in a separate PR from content or visual work.
