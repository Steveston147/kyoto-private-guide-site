# Visual Fidelity Production Protocol

Status: mandatory operating procedure under `docs/CREATIVE_FRONTEND_CONSTITUTION.md`

## Required gates

For substantial mockup/pattern implementation, do not begin with detailed CSS. Pass these gates in order.

### A. Reference Gate
Identify and actually inspect the authoritative mockup/reference. Record its location/version. Current code is never a substitute for the approved visual reference. If the reference is missing, conflicting or not inspectable, stop rather than infer.

### B. Measurement Gate
Before detailed implementation, record the important visual targets: reference viewport, hero/section height, headline x/y and measure, primary/secondary image size and position, overlaps/z-order, dominant whitespace, navigation, CTA, major rotations, crop/focal point and section spacing. Use px, %, ratios or bounded estimates as appropriate.

### C. Blueprint Gate
For each major region, state the rendering strategy: normal flow, Grid/Flex, coordinate-driven artboard, SVG, raster/composite artwork, semantic overlay and/or motion layer. Also state desktop/mobile art direction, typography strategy, image roles and known performance/accessibility risks.

### D. Convergence Gate
Render the actual browser page and compare it with the authoritative reference. Use this loop until no unexplained major deviation remains:

`Reference -> Render V1 -> Difference Audit -> Correction -> Render V2 -> Difference Audit -> ... -> Acceptance`

Build success is not a visual checkpoint substitute. If the first render already meets the acceptance threshold with evidence, a redundant correction cycle is not required.

### E. Acceptance Gate
Retain a Visual QA Record containing references, viewports/locales, scores, deviations, fixes, image checks and final acceptance status.

## Seven-axis fidelity score

Score each affected reference surface from 0-10:

1. Composition
2. Geometry
3. Typography
4. Imagery
5. Materiality
6. Responsive Art Direction
7. Motion / Interaction (N/A when not part of the design)

For a fidelity-led pattern/mockup implementation:
- target average: **9.5+**;
- no applicable axis below **9.0** without explicit design-owner acceptance;
- Composition and Geometry must be **9.2+** for signature art-directed hero sections;
- N/A axes are excluded from the average.

Scores require comparison notes. An unsupported score is unverified, not evidence.

## Difference audit order

### Tier 1 — Macro geometry
Section height, headline block, primary image scale/position, visual centre of gravity, dominant whitespace, major overlaps. Fix these before polishing details.

### Tier 2 — Typography and imagery
Type character, weight, size, line-height, line breaks, text measure, image crop/focal point and hierarchy.

### Tier 3 — Material/detail
Texture, tape/pins/doodles, borders, shadows, rotations, micro-spacing and restrained motion.

## Deviation classes

- **Major:** changes recognisable composition, hierarchy, focal point, image dominance, signature navigation or mobile art direction. Must be fixed or explicitly accepted.
- **Moderate:** noticeable typography, crop, spacing, overlap, texture or density difference. Normally fix.
- **Minor:** small browser/font/rendering variance that does not alter design perception. May remain if recorded.

Do not dismiss a difference merely as `responsive`, `framework limitation`, `maintainability`, `performance` or `close enough` without evidence.

## Visual Measurement template

```md
# Visual Measurement
Reference:
Reference viewport:

## Macro geometry
- Hero/section height:
- Headline x/y:
- Headline width:
- Primary image x/y/w/h:
- Secondary image(s):
- Main overlap(s):
- Dominant whitespace:
- Navigation:
- CTA:
- Section spacing:

## Typography
- Heading character/weight:
- Approx size:
- Line-height:
- Intended line breaks:
- Body measure:

## Imagery
- Primary role:
- Crop/focal point:
- Native resolution checked: yes/no

## Signature details
- Rotations:
- Texture/material:
- SVG/doodles/masks:
- Motion:
```

## Implementation Blueprint template

```md
# Implementation Blueprint
Pattern/surface:
Authoritative reference:

| Region | Visual requirement | Rendering strategy | Responsive strategy | Risk |
|---|---|---|---|---|
| Hero | | | | |

## Art direction
- Desktop:
- Tablet:
- Mobile:
- Locale-specific differences:

## Typography strategy
## Image strategy
## Motion strategy
## Accessibility/performance constraints
```

## Visual QA Record template

```md
# Visual QA Record
Reference:
Implementation URL/build:
Date:

| Viewport / locale | Composition | Geometry | Typography | Imagery | Materiality | Responsive | Motion | Average |
|---|---:|---:|---:|---:|---:|---:|---:|---:|

## Difference ledger
| Severity | Observed difference | Cause | Fix attempted | Final status |
|---|---|---|---|---|

## Evidence
- reference actually inspected: yes/no
- actual browser render inspected: yes/no
- screenshot/reference comparison performed: yes/no
- image native dimensions checked: yes/no
- overflow/clipping checked: yes/no

## Acceptance
- no unexplained major deviation remains: yes/no
- overall target >= 9.5: yes/no
- final status: ACCEPTED / NOT READY
```

## Pattern production requirement

Every reusable pattern must ultimately have:
1. Pattern Specification — what it is.
2. Implementation Blueprint — how its defining visual logic is normally built.
3. QA Baseline — mandatory viewports/signature details/axes to inspect.

Do not fabricate missing blueprints from an old implementation. Reopen the approved mockup/reference first.

Operating rule: **Measure before coding. Blueprint before detailing. Render before claiming. Compare before accepting. Iterate until material differences are gone or explicitly approved.**
