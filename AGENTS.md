# AGENTS.md

## Purpose

This repository is the public website for Don Tanaka's private guide service in Kyoto. AI-assisted changes must preserve business accuracy, trust, privacy, and the personal nature of the service.

## Read before editing

Before changing code or copy, read:

1. `PROJECT.md`
2. `CONTENT.md` if it exists
3. `DESIGN.md` if it exists
4. `TECH.md` if it exists
5. the files directly affected by the change

Do not assume the current UI text is the only source of truth.

## Never change casually

Treat the following as controlled business content:

- guide identity and licence wording;
- prices and guide fees;
- payment methods or currencies;
- cancellation/refund terms;
- group-size limits;
- weekday/weekend/public-holiday availability policy;
- service areas;
- what costs are included or excluded;
- contact details and enquiry destinations;
- statements that imply availability, booking confirmation, reservations, or guaranteed access.

If a task appears cosmetic but touches one of these, stop the automatic rewrite and preserve the existing rule unless the user explicitly requested the business change.

## Product boundaries

The site is an enquiry and marketing website, not a booking engine.

Do not introduce automatic reservation confirmation, live availability claims, payment processing, customer accounts, or autonomous outbound communication without an explicit approved specification.

Sample routes must remain examples. They must not be presented as guaranteed opening hours, exact travel times, confirmed reservations, or live operational data.

## Privacy

Do not expose private family information, employer/internal-work information, home address, private schedules, credentials/secrets, API keys, or unrelated personal data.

Collect only information reasonably necessary to answer a tour enquiry.

## Technical change discipline

Prefer small, reviewable pull requests.

Separate dependency/framework modernisation from major content or design changes when practical.

Before merge, run the repository's available quality checks. At minimum, preserve buildability and avoid introducing TypeScript or lint regressions beyond already documented legacy limitations.

Do not remove SEO metadata, sitemap, robots rules, form submission, or accessibility-related behaviour as collateral damage from visual refactors.

## Content discipline

Keep public English concise, calm, and credible. Avoid invented statistics, fake testimonials, unsupported awards, superlatives, and keyword stuffing.

When editing route suggestions, check geographic realism and stated duration. Family and senior-friendly claims should be reflected in practical route choices, not only marketing wording.

## Availability and holidays

A hard-coded calendar is not live availability. Never relabel it as such.

Hard-coded Japanese holiday data is time-sensitive and must be reviewed before its covered years expire.

## Definition of done

A change is ready for review only when:

- the requested behaviour is implemented;
- controlled business content has not changed accidentally;
- privacy boundaries are preserved;
- contact/enquiry flow still works conceptually;
- desktop/mobile readability is considered;
- metadata and visible claims are consistent;
- relevant build/lint/type checks have been run where available;
- limitations or follow-up risks are stated in the PR description.
