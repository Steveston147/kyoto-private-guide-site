# Japanese Guide UAT Checklist

Last updated: 2026-08-22

## Visual / responsive

- [ ] Desktop 1440px: hero copy and Kitajiri kimono portrait are both visible and balanced; no awkward Japanese phrase breaks.
- [ ] Desktop/tablet: four sample routes render as a balanced 2x2 grid.
- [ ] Mobile 390px: navigation remains horizontally usable without clipping the page.
- [ ] Mobile: hero heading, badges, buttons, route cards, destination cards, pricing cards and enquiry form wrap without horizontal overflow.
- [ ] Destination areas do not show testimonial quotation marks.
- [ ] The hero portrait is the approved corrected committed WebP asset; source-level tests reject the previously used blank-placeholder blob.
- [ ] Browser UAT verifies not only intrinsic image dimensions but also pixel/luminance variation and rendered screenshot complexity, so a beige/blank placeholder cannot pass simply because it is a technically valid WebP.

## Business rules

- [ ] Taxi wording is clear: optional during the tour, guest-paid, no pre-arranged vehicle service.
- [ ] Guide fee is clearly ¥26,000 / 4 hours per group; extension ¥6,000/hour; cash on the day.
- [ ] Page states that an enquiry is not a confirmed reservation.
- [ ] No live availability or guaranteed access claims.
- [ ] Guiding-only boundaries and excluded costs remain visible.

## Enquiry / privacy

- [ ] The on-page form collects only enquiry information needed for reply and tour planning.
- [ ] The form posts directly to the approved Formspree endpoint and does not open a local mail client.
- [ ] A successful test submission is received at the configured enquiry inbox before V1 freeze or after any form-path change.
- [ ] The form includes a short privacy disclosure and links to `/privacy`.

## Metadata / engineering

- [ ] Japanese Open Graph and Twitter metadata are page-specific.
- [ ] Sitemap contains `/`, `/japanese-guide`, and `/privacy`.
- [ ] Lint, typecheck, unit/contract tests and production build pass.
- [ ] Playwright browser UAT passes on desktop Chromium (1440x900) and mobile Chromium (390x844).

The automated browser UAT is a regression gate, not a replacement for occasional human visual review after substantial copy, image, typography, or layout changes.
