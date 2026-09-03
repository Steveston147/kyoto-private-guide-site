# AGENTS.md

## Purpose

This repository is the public website for Don Tanaka's private guide service and Kitajiri's Japanese private guide page in Kyoto. AI-assisted changes must preserve business accuracy, trust, privacy, the personal nature of the services, and the approved visual design.

## Supreme visual implementation rule

For any substantial visual design, redesign, pattern implementation, or mockup-to-code work, `docs/CREATIVE_FRONTEND_CONSTITUTION.md` is the highest implementation rule in this repository.

Approved mockups and pattern references are specifications, not loose inspiration. Existing components, templates, previous implementations and framework conventions are not visual authority. If they conflict with an approved visual reference, preserve business/technical constraints but implement the approved design using the appropriate frontend technique.

Do not claim visual verification unless the actual rendered page was inspected. Build success is not visual completion.

## Read before editing

Before changing code or copy, read:

1. `PROJECT.md`
2. `DESIGN.md`
3. `TECH.md`
4. `docs/CREATIVE_FRONTEND_CONSTITUTION.md` for any visual/pattern work
5. `UPGRADE.md` when technical dependencies or framework versions are involved
6. `app/japanese-guide/UAT_CHECKLIST.md` when the Japanese page is affected
7. the files directly affected by the change

Do not assume the current UI text or current visual implementation is the only source of truth.

## Never change casually

Treat the following as controlled business content:

- guide identity and licence/qualification wording;
- prices and guide fees;
- payment methods or currencies;
- cancellation/refund terms;
- group-size limits;
- weekday/weekend/public-holiday availability policy;
- service areas;
- what costs are included or excluded;
- contact details, Formspree endpoint, and enquiry destinations;
- statements that imply availability, booking confirmation, reservations, or guaranteed access.

If a task appears cosmetic but touches one of these, preserve the existing rule unless the user explicitly requested the business change.

## Product boundaries

The site is an enquiry and marketing website, not a booking engine.

Do not introduce automatic reservation confirmation, live availability claims, payment processing, customer accounts, autonomous outbound communication, hotel booking, or vehicle booking without an explicit approved specification.

Sample routes must remain examples. They must not be presented as guaranteed opening hours, exact travel times, confirmed reservations, or live operational data.

## Privacy

Do not expose private family information, employer/internal-work information, home address, private schedules, credentials/secrets, API keys, or unrelated personal data.

Collect only information reasonably necessary to answer a tour enquiry.

The Japanese form must keep its short privacy disclosure and link to `/privacy`. If the form provider or collected fields change, review the privacy copy in the same PR.

## Japanese enquiry implementation

The Japanese enquiry form is intentionally rendered directly inside the contact section. Do not move it back to a DOM-query/Portal mount or a `mailto:`-only interaction.

The form posts to the approved Formspree endpoint and remains an enquiry only. Do not submit real test enquiries from automated CI.

## Photography / critical assets

The authoritative Kitajiri kimono hero source is the version-controlled five-chunk source under `app/japanese-guide/hero-base64/` together with `scripts/prepare-kitajiri-hero.mjs`. `predev` and `prebuild` intentionally reconstruct `public/kitajiri-kimono.webp` from that source.

Do not remove this preparation path, replace its chunks, substitute a historical static WebP, or silently use a different person/image without explicit approval and successful browser visual UAT. A valid WebP container and plausible dimensions are not sufficient: the 2026-08-22 regression showed that a blank beige image can satisfy both checks.

Any change to the Kitajiri hero must pass desktop and mobile Playwright checks for dimensions, pixel/luminance variation, colour variation, and rendered screenshot complexity before merge.

For all critical photography, inspect native dimensions before assigning display roles. Do not upscale weak assets into hero roles or reuse photography in ways that contradict an approved pattern's uniqueness/storytelling rules.

## Technical change discipline

Prefer small, reviewable pull requests.

Separate dependency/framework modernisation from major content or design changes when practical. V1 production hardening must not include the planned Next.js/React dependency migration.

Before merge, run the repository's quality checks. For changes affecting the Japanese public page, the GitHub Actions browser UAT must pass at both desktop and mobile baseline viewports.

Do not remove SEO metadata, sitemap, robots rules, form submission, privacy disclosure, or accessibility-related behaviour as collateral damage from visual refactors.

## Content discipline

Keep public English concise, calm, and credible. Keep Japanese copy calm, knowledgeable, and appropriate for repeat Kyoto visitors. Avoid invented statistics, fake testimonials, unsupported awards, superlatives, keyword stuffing, or overt luxury clichés.

When editing route suggestions, check geographic realism and stated duration. Comfort claims should be reflected in practical route choices and optional guest-paid taxi use, not only marketing wording.

## Availability

Do not introduce a hard-coded or visual calendar as live availability. For Don, regular availability remains mainly Saturdays, Sundays, and Japanese public holidays. For Kitajiri, requested dates are reviewed after enquiry.

## Visual definition of done

For substantial design or pattern work, the change is not ready merely because code compiles or a preview exists. In addition to the general requirements below, follow the mandatory render -> reference comparison -> deviation correction workflow in `docs/CREATIVE_FRONTEND_CONSTITUTION.md`.

A visual change may not be described as complete if the authoritative reference was not actually inspected, the relevant desktop/mobile render was not actually viewed, or material deviations remain unexplained.

## Definition of done

A change is ready for review only when:

- the requested behaviour is implemented;
- controlled business content has not changed accidentally;
- privacy boundaries are preserved;
- contact/enquiry flow still works conceptually;
- desktop/mobile readability is considered and actually inspected when visual work is substantial;
- metadata and visible claims are consistent;
- relevant lint/type/test/build checks pass;
- browser UAT passes when the Japanese page is affected;
- visual reference comparison is completed when a mockup/pattern governs the work;
- material visual deviations are fixed or explicitly recorded/accepted;
- limitations or deferred technical risks are stated in the PR description.
