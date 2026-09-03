# Kyoto Private Guide Site — Design Specification

Last updated: 2026-09-03

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

## Pattern I — Living Kyoto Scrapbook

Pattern I is an approved English-site design pattern for Uma Academia. It is distinct from Pattern H and may be used as the design basis for a future English homepage implementation.

### Core idea

The homepage should feel like a real Kyoto weekend spread across a table rather than a conventional tour-company landing page. The central proposition is not only sightseeing, but being welcomed into Kyoto by one ordinary local resident who is also a licensed professional guide.

The visual language is a deliberately composed scrapbook / memory-table layout:

- a tactile tabletop or paper-like background;
- photographs treated as physical prints with white borders, shadows, slight rotation, overlap, tape, or pinned-note details;
- short handwritten-style English annotations placed beside or partly over photographs;
- a mixture of landmark Kyoto, ordinary food, shopping, local crafts, friends, neighbourhood life, and spontaneous guest requests;
- occasional strong large photographs surrounded by several smaller memory-like photographs;
- composition should look casually scattered but must actually be deliberately fixed and art-directed, not randomly generated on every page load.

### Brand proposition expressed by Pattern I

Pattern I should communicate that:

- Don was born and raised in Kyoto;
- Don is a National Government Licensed Guide Interpreter;
- Don has experience serving as an official guide at Nijo Castle;
- the website, enquiry communication, planning, and the guide day are handled directly by Don;
- there is no intermediary tour-company layer between the guest and Don;
- direct communication enables unusually flexible day-of adjustments;
- a Kyoto day may include famous sights, but can also include ordinary local life, food, shopping, cafés, karaoke, neighbourhoods, and spontaneous discoveries;
- guests do not need to decide every detail before meeting Don.

The desired emotional message is: “Do not only visit Kyoto. Spend a real Kyoto weekend with someone who lives here.”

### Recommended hero language

Primary direction:

“Kyoto is more than sightseeing.”

Supporting direction:

“Spend a real weekend in Kyoto with me.”

Alternative supporting idea:

“One guide. One conversation. One Kyoto day made for you.”

Copy should remain personal and conversational rather than sounding like a packaged tourism product.

### Handwritten note content

Handwritten annotations should be short, concrete, and based on real guest interests or real local-life examples. They are not decorative lorem ipsum. Appropriate examples include:

- “Went shopping for Japanese accessories. Perfect souvenirs!”
- “Suddenly looking for good green tea? Let’s find some.”
- “Ramen today? Why not.”
- “A guest wanted a painting by a local artist.”
- “Japanese stationery? I know the feeling.”
- “Plans changed. We went for karaoke!”
- “Found something special for the family.”
- “A little break with matcha and something sweet.”

Other authentic topics may include kimono, ukiyo-e, traditional crafts, tea utensils, incense, Japanese books in English translation, local art, stationery, cafés, shoes, eyewear, food courts, kaiten sushi, udon, donburi, Chinese food, inexpensive set meals, sweets, and local restaurants.

Traditional swords, armour, or antique-related requests must be described cautiously as cultural, craft, antique, or specialist-shopping interests rather than as a general weapons-shopping proposition.

### Personal everyday-Kyoto layer

The page may selectively show Don as a person, not only as a professional guide. Suitable authentic details include family life, being a husband and father of two daughters, baseball watching, weekend shopping, ramen, udon, inexpensive set meals, kaiten sushi, sweets, cafés, karaoke, and occasional drinks with friends.

These details should create familiarity and trust, not become a biography dump. The intended effect is that a prospective guest can imagine spending four to eight hours with Don comfortably.

### Photography rules

Pattern I depends heavily on photographic authenticity and therefore follows strict photo rules:

- Prefer Don's real Kyoto / guest / local-life photography whenever permission exists.
- A specific photograph must not be reused elsewhere in the Pattern I experience; one photograph equals one rendered use.
- Verify the source image's native resolution before assigning its display size.
- Never enlarge a low-resolution source into a large hero image.
- Use small-print treatment for lower-resolution photographs.
- Use `object-fit: cover` or an equivalent intentional crop rather than stretching.
- When first-party photography is insufficient, suitable high-resolution Kyoto imagery may be supplemented from a properly licensed source such as Unsplash.
- Do not imply that a stock image depicts Don, Don's guest, or a specific real event.

### Implementation model

Pattern I must not be implemented as one flattened screenshot. The scrapbook composition should be decomposed into real HTML/CSS components so that photographs, captions, links, and text remain replaceable, accessible, indexable, and responsive.

Recommended implementation structure:

- background / artboard layer;
- independent photo-print components;
- independent handwritten-note components;
- controlled z-index and rotation values;
- restrained shadow and tape treatments;
- semantic live text for the primary hero copy and important notes;
- fixed art-directed positions rather than runtime random placement.

Desktop and mobile may use different compositions. Do not simply scale the desktop collage down to mobile. Mobile should preserve the same photographs and story but reorder and restack them for legibility and touch interaction.

The existing Pattern H left-side vertical navigation may be retained with Pattern I. A preferred desktop composition is therefore a stable vertical navigation rail plus a large scrapbook-style hero artboard.

### Conversion structure

Pattern I should still support the site's business purpose. A recommended homepage hierarchy is:

1. Scrapbook hero: identity, real-Kyoto proposition, and immediate emotional differentiation.
2. “What kind of day would you like?” — concise service benefits such as private, flexible, local, direct, and personally handled by Don.
3. Representative tour ideas / ways to spend the day.
4. Transparent rate and weekend/public-holiday availability.
5. Trust / personal introduction / guest evidence.
6. Enquiry CTA and form path.

Do not let the scrapbook concept obscure the guide rate, availability wording, guiding-only boundary, or enquiry status.

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
