# Upgrade Readiness

Technical upgrade notes for the Kyoto Private Guide site.

Current baseline: Next.js 13.5.1, React 18.2.0, Node 20.9.0+ within Node 20.

Migration order: Next.js 13 to 14 with React 18; validate; then Next.js 14 to 15 with React 19; validate; consider Next.js 16 separately.

Known audit findings: no @next/font, no ImageResponse from next/server, no cookies() or headers(), no custom webpack configuration. The current next lint script must be replaced before or during Next.js 16 because that command is removed there.

For dependency upgrades, update package.json and package-lock.json together and validate npm ci, typecheck, tests, lint, build, Formspree enquiry behaviour, metadata, sitemap, robots, route-generator disclaimer, and non-live calendar wording.
