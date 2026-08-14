# Upgrade Readiness

Technical upgrade notes for the Kyoto Private Guide site.

Current validated baseline: Next.js 14.2.35, React 18.2.0, Node 20.9.0+ within Node 20.

Next migration step: Next.js 14 to 15 with React 19; validate; consider Next.js 16 separately.

Next.js 14 validation completed with a regenerated package-lock.json and successful npm ci, typecheck, contract tests, lint, and production build.

Known audit findings: no @next/font, no ImageResponse from next/server, no cookies() or headers(), no custom webpack configuration. The current next lint script must be replaced before or during Next.js 16 because that command is removed there.

Dependency upgrades must update package.json and package-lock.json together in the same change. Do not merge a framework version change unless npm ci can reproduce the dependency tree.

Validate npm ci, typecheck, tests, lint, build, Formspree enquiry behaviour, metadata, sitemap, robots, route-generator disclaimer, and non-live calendar wording.
