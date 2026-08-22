# Japanese Guide UI/UAT Audit — 2026-08-22

## Target persona

Primary target is an affluent couple living in Tokyo who have visited Kyoto many times, consider themselves knowledgeable about Kyoto, and want to learn more from an experienced Kyoto-based guide. They value depth, local knowledge, quieter places and places their friends have not visited. They are willing to use taxis when it improves comfort or makes the route better.

## Audit findings before revision

### High priority

1. The page positioned the service correctly for repeat visitors, but the wording still felt like a general sightseeing guide page rather than a product for knowledgeable Kyoto repeaters.
2. `Public transport + walking` in the hero could be read as excluding taxis, even though the target customer is comfortable paying for taxis when useful.
3. Four sample routes used a three-column global grid, resulting in an unbalanced 3+1 desktop/tablet layout.
4. The destination list reused the testimonial card component, including a decorative quotation mark, which visually misclassified place names as guest quotes.
5. The same guide photograph appeared twice without a strong editorial reason, reducing visual variety.
6. Page-level Open Graph metadata was Japanese, but Twitter metadata inherited the English Don Tanaka defaults.

### Medium priority

1. The strongest product value is not simply 'slow guiding' but learning Kyoto from an experienced Kyoto-based guide. The hierarchy should communicate this earlier.
2. The `旅行代理店ではありません` heading is operationally accurate but overly defensive for an affluent audience. The service boundary should remain clear while using more positive language.
3. Price clarity is good, but the page should frame ¥26,000 as a private four-hour experience rather than a bargain product.
4. Typography and spacing should feel more editorial and culturally refined on the Japanese page without changing the English site's established visual system.

## Revision principles

- Keep the existing calm Uma Academia visual system.
- Add a Japanese-page-specific editorial layer rather than redesigning the entire site.
- Target repeat visitors implicitly; do not label visitors as wealthy.
- Emphasise learning, local context, discretion, customisation and quiet places.
- Keep guide-only boundaries and cash-payment rules explicit.
- State that taxis may be used when useful, with fares paid separately by guests; do not imply vehicle arrangement.
- Maintain enquiry-only flow and no live availability claims.
