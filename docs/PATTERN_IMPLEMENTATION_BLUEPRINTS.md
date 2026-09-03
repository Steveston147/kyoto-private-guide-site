# Pattern Implementation Blueprint Registry

Status: production companion to `DESIGN.md`, `docs/CREATIVE_FRONTEND_CONSTITUTION.md`, and `docs/VISUAL_FIDELITY_PRODUCTION_PROTOCOL.md`

## Rule

A pattern is not production-complete merely because a mockup exists. Each pattern must have:

1. an approved visual reference;
2. a Pattern Specification;
3. an Implementation Blueprint;
4. a QA Baseline.

Do not reconstruct missing blueprint details from the current web implementation. Existing web code is evidence of current state, not authority for the intended visual design.

## Registry

| Pattern | Approved reference inspectable from current repository context | Blueprint status | Rule |
|---|---|---|---|
| A | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| B | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| C | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| D | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| E | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| F | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| G | Not confirmed in main during 2026-09-03 governance audit | PENDING REFERENCE AUDIT | Reopen original approved mockup before implementation/refinement |
| H | Pattern implementation exists on demo work, but original approved reference must be inspected before a normative blueprint is declared | PENDING REFERENCE AUDIT | Do not treat current implementation as source of truth |
| I — Living Kyoto Scrapbook | Approved specification and implemented demo are available; original approved visual reference must still be used for final visual measurements | ACTIVE BLUEPRINT BELOW | Use blueprint below plus reference-specific measurements |

This registry deliberately marks unknowns rather than guessing. As each original reference is reopened, replace `PENDING REFERENCE AUDIT` with a measured blueprint and QA baseline.

---

# Pattern I — Living Kyoto Scrapbook

## Design identity

A tactile, deliberately composed Kyoto memory-table / scrapbook experience. It should feel like photographs and handwritten notes from an actual Kyoto weekend arranged by a real local guide, not like a tourism landing-page template.

## Authoritative source order

1. latest explicitly approved Pattern I mockup/reference;
2. approved Pattern I specification in project design documentation/history;
3. explicit Pattern I design decisions;
4. existing demo implementation only as current-state evidence.

If the latest approved image reference is unavailable, do not declare final fidelity measurements complete.

## Signature visual requirements

- stable editorial/vertical navigation may coexist with the scrapbook composition;
- tactile wood/paper/tabletop field rather than generic white-card background;
- several independently positioned photographic prints with deliberate rotation and overlap;
- one or two visually dominant photographs plus smaller memory fragments;
- handwritten English notes that carry real micro-stories, not decorative filler;
- tape/pin/underline/arrow/circle details used selectively;
- strong irregularity that is fixed and designed, not runtime-random;
- substantial negative space preserved where the reference uses it;
- live semantic hero copy and CTA rather than baked-in essential text;
- real photography prioritised; one-photo-one-use where the active Pattern I specification requires it.

## Region implementation strategy

| Region | Visual requirement | Preferred strategy | Responsive strategy |
|---|---|---|---|
| Navigation | editorial index / strong pattern identity | real HTML nav; fixed/rail on desktop where reference calls for it | transform to intentional compact mobile navigation |
| Hero background | tactile table/paper field | CSS texture and/or optimised raster material layer | mobile may use simplified/lighter crop, not generic flattening |
| Hero photos | physical prints with independent hierarchy | independent DOM images/cards, coordinate-driven artboard, explicit x/y/size/rotation/z-index | separate mobile positions/order/count where needed |
| Tape/pins/doodles | tactile storytelling details | SVG/CSS/raster fragments depending shape/texture | reduce only when density harms legibility; preserve identity |
| Handwritten notes | authentic micro-story layer | live HTML where important; handwritten-capable font stack/SVG accents | art-directed wrapping/placement per viewport |
| Main headline/CTA | semantic conversion layer | live HTML, not embedded in a hero screenshot | locale/viewport-specific line breaks allowed |
| Lower content | calmer editorial continuation | normal flow/grid where appropriate; avoid generic repetitive cards | normal responsive layout with deliberate pacing |

## Desktop art direction

- Treat the signature hero as an artboard rather than a conventional two-column marketing hero.
- Establish macro geometry from the approved reference before detail styling.
- Preserve the relative dominance of the largest photo(s), headline block and whitespace.
- Use explicit deterministic transforms and z-order.
- Do not regularise the collage into equal cards.

## Tablet art direction

- Rebalance overlap before reducing everything uniformly.
- Preserve at least one dominant photo, tactile material field and handwritten story cues.
- Prevent the navigation and collage from competing for the same narrow horizontal space.

## Mobile art direction

- Mobile is a separate edition, not a scaled desktop artboard.
- Reorder/restack photos and notes intentionally.
- Reduce the number of simultaneous fragments if necessary while preserving the scrapbook identity.
- Keep hero copy and CTA legible and dominant enough to function.
- Preserve the sense of layered physical objects; do not collapse to a conventional single-image hero unless explicitly approved.

## Typography strategy

- Hero typography must be measured against the approved reference: width, line count, x/y, leading and relationship to photos are all visual geometry.
- Handwritten notes should vary naturally in size/baseline/rotation and may use SVG marks, arrows, underlines or circles.
- Avoid excessive decorative fonts for body copy.

## Image strategy

- Inspect native dimensions before assigning every major photo role.
- Do not promote a low-resolution image to a dominant hero role.
- Use intentional crop/focal points and responsive sources where available.
- Prefer authentic Don/guest/Kyoto-life imagery when permission is available.
- Stock imagery may supplement gaps but must never be presented as a specific real event involving Don or his guests.

## Material strategy

- Wood/paper grain, print borders, tape and shadows should create tactile depth without turning into decorative noise.
- Shadow direction/softness, border thickness and tape opacity are part of fidelity and should be tuned after macro geometry.
- Partial rasterisation is acceptable for difficult decorative clusters if it materially improves fidelity while preserving semantic controls/text.

## Motion strategy

- Static composition must already match before motion is added.
- Motion should remain restrained: slight hover lift, tiny parallax, subtle entrance/choreography.
- Respect reduced-motion preference.
- Do not use motion to disguise weak static fidelity.

## QA baseline

Mandatory visual QA for a substantial Pattern I change:
- desktop: 1440 x 900 reference comparison;
- mobile: 390 x 844 reference/art-direction comparison;
- minimum-width sanity check: 320px;
- representative tablet width;
- photo native-resolution/display-size audit;
- one-photo-one-use audit where required;
- horizontal overflow/clipping check;
- real-browser screenshot comparison;
- seven-axis scoring from `docs/VISUAL_FIDELITY_PRODUCTION_PROTOCOL.md`.

Acceptance target:
- overall fidelity >= 9.5/10;
- Composition and Geometry >= 9.2/10;
- no applicable axis below 9.0 without explicit acceptance;
- zero unexplained Major deviations.

## Required refinement order

1. approved reference inspection;
2. visual measurement worksheet;
3. macro geometry;
4. typography and image hierarchy;
5. overlap/depth/materiality;
6. browser screenshot;
7. difference audit;
8. correction loop until threshold;
9. mobile separate art direction;
10. final QA record.
