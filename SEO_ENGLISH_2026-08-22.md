# English Guide SEO / Conversion Recovery — 2026-08-22

## Why this change exists

The English page was intentionally simplified, but removing too much route detail can reduce two useful signals:

1. search relevance for genuine visitor intent such as half-day Kyoto tour, Kyoto history tour, family-friendly Kyoto tour, senior-friendly Kyoto guide, Nijo Castle guide, and Ryoan-ji guide;
2. conversion confidence, because prospective guests often want to picture a realistic day before sending an enquiry.

A decline in enquiries cannot be attributed to route removal without Search Console / analytics evidence. This change therefore restores useful route depth without returning to a long catalogue or booking-engine design.

## V1 English SEO / conversion baseline

The English home page should retain:

- a clear `Private Kyoto Guide` page title and natural search-intent description;
- visible Kyoto-born / National Government Licensed Guide Interpreter credibility;
- half-day and full-day pricing near the top;
- six representative, geographically realistic route ideas covering first-time, full-day highlights, history, northwest Kyoto, family, and senior-traveller intent;
- an explicit reminder that routes are examples, not reservations;
- a route-interest selector in the Formspree enquiry form, including `Not sure yet`;
- a clear CTA after the route examples;
- English canonical metadata plus reciprocal-language discovery pointing to `/japanese-guide`;
- JSON-LD describing the public `Person` and `Service`, using only claims and prices that are visible on the page;
- desktop/mobile Playwright UAT for route count, form action, structured data, canonical/hreflang, and horizontal overflow.

## What not to do

- Do not keyword-stuff headings or paragraphs.
- Do not create separate thin pages for every temple just to target search phrases.
- Do not mark sample routes as booked products or guaranteed itineraries.
- Do not add fake reviews, aggregate ratings, unsupported awards, or fake availability.
- Do not remove route examples again merely to shorten the page without first considering search intent and enquiry conversion.
- Do not change the Kitajiri Japanese V1 image pipeline or Japanese business rules as part of English SEO work.

## Measurement

After deployment, use Google Search Console performance data when available to compare:

- impressions and clicks for `private Kyoto guide`, `Kyoto private tour`, `licensed Kyoto guide`, `family Kyoto tour`, `senior Kyoto guide`, and place-specific queries;
- click-through rate for the home-page title/description;
- enquiry volume and which `route_interest` values are submitted.

Allow time for recrawling and re-indexing before judging SEO impact. Conversion changes may be visible earlier than ranking changes.
