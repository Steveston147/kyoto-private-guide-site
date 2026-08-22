# Kyoto Private Guide Site — Design Specification

Last updated: 2026-08-22

## Design goal

The site should feel calm, trustworthy, personal, and easy to use. It should not look like a mass-tour marketplace or a luxury agency template.

For the Japanese guide page, the primary audience is a knowledgeable repeat Kyoto visitor. Express quality through editorial restraint, real guide evidence, thoughtful typography, depth, and comfort rather than overt luxury language.

## Visual principles

- Keep strong visual hierarchy and generous spacing.
- Prioritise readability over decoration.
- Use Kyoto imagery to support trust and place recognition, not as visual noise.
- Keep calls to action obvious but not aggressive.
- Avoid excessive animation, moving backgrounds, carousels, or effects that distract from reading.
- Maintain consistent typography, spacing, button treatment, cards, and section widths.
- Do not let browser-controlled line wrapping split key Japanese phrases awkwardly in primary headings.

## Responsive behaviour

Every public section must work on mobile and desktop.

Avoid layouts that rely on text clipping. Long place names, route descriptions, FAQ answers, form labels, and CTA text must wrap naturally.

The Japanese V1 browser-UAT baselines are:

- desktop Chromium: 1440 x 900;
- mobile Chromium: 390 x 844.

Automated browser UAT must reject horizontal page overflow. A substantial visual or copy change still requires human visual review; browser automation is a regression gate, not a substitute for design judgement.

## Accessibility basics

- Use semantic headings in a logical order.
- Keep visible keyboard focus.
- Maintain sufficient text/background contrast.
- Give meaningful images useful alternative text; decorative images should not create redundant screen-reader noise.
- Form controls must have understandable labels.
- Do not communicate availability or status by colour alone.
- Japanese content should carry an explicit Japanese language scope even while the bilingual root-layout language architecture remains a documented follow-up item.

## Photography

Prefer real, relevant Kyoto/location photography. Avoid misleading stock imagery that suggests services or access the guides do not provide.

Image crops should preserve the main subject on common desktop and mobile aspect ratios.

The Kitajiri hero portrait is generated deterministically from the version-controlled source chunks in `app/japanese-guide/hero-base64/` by `scripts/prepare-kitajiri-hero.mjs` before local development and production builds. Do not replace those source chunks, the preparation script, or the resulting portrait with a placeholder. Browser UAT must verify actual visual variation as well as image dimensions so a technically valid beige/blank WebP cannot pass.

## Forms

Forms should feel simple and low-pressure.

Group related choices, keep labels short, show required information clearly, and avoid collecting unnecessary personal data.

The final action should be phrased as sending an enquiry or request, not confirming a booking.

The Japanese enquiry form is mounted directly in the contact section and posts to the approved Formspree endpoint. Do not reintroduce a `mailto:`-only flow or DOM-query/Portal mounting. A short privacy disclosure and link to `/privacy` must remain visible near the form.

## Calendar

Do not add a large availability calendar unless there is a real operational need and source of truth. Static availability guidance must never be presented as live availability.

## Change rule

A visual redesign must not silently alter copy that controls price, payment, availability, cancellation, service area, group size, contact destination, transport boundaries, or booking status.
