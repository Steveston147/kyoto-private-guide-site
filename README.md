# Kyoto Private Guide Site

Public website for Don Tanaka's private guide service in Kyoto and nearby areas.

Production domain: https://www.umaacademia.com

## Purpose

This site introduces the guide service, provides sample tour ideas and planning guidance, and accepts enquiries from prospective guests.

It is not a live booking, payment, or availability system.

## Specification documents

Read these before making substantial changes:

- `PROJECT.md` — canonical business and product specification.
- `AGENTS.md` — guardrails for AI-assisted development.
- `DESIGN.md` — visual, responsive, accessibility, and interaction rules.

Additional technical/content specifications may be added as the project is hardened. If documentation and implementation disagree, do not silently rewrite business rules; flag the discrepancy for deliberate review.

## Current stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Formspree contact form
- SEO metadata, sitemap, and robots configuration

Dependency versions are locked in `package.json` and `package-lock.json`.

## Local development

```bash
npm ci
npm run dev
```

Then open `http://localhost:3000`.

Available project scripts are defined in `package.json`.

## Main implementation

- `app/page.tsx` — current main public page, content, route generator, calendar guidance, and enquiry UI.
- `app/globals.css` — global styling.
- `app/layout.tsx` — site metadata and root layout.
- `app/robots.ts` — robots configuration.
- `app/sitemap.ts` — sitemap configuration.

## Important maintenance notes

The current page contains business-sensitive public content and hard-coded Japanese holiday dates. Treat pricing/payment/availability/service-area/contact changes as controlled business changes rather than ordinary copy edits.

Major dependency upgrades, large visual redesigns, and business-content changes should be separated into reviewable pull requests when practical.

## Deployment

The project is designed for Vercel-compatible deployment. Changes should normally be made on a branch and reviewed through a pull request before merging to `main`.