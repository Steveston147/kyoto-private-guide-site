# Creative Frontend Fidelity Constitution

Status: normative visual implementation rule for this repository
Effective: 2026-09-03

## Supreme rule

Approved mockups and design patterns are specifications, not loose inspiration. Do not simplify or normalise a distinctive composition merely because a generic hero/grid/card/CTA implementation is easier, already exists, or is conventional for the framework.

Before accepting visual loss, ask: **Is this truly a technical limitation, or merely an implementation shortcut?**

## Visual source of truth

Use this order:

1. latest explicitly approved mockup/reference for the surface;
2. approved pattern/design specification;
3. explicit recorded design decisions;
4. current implementation only as evidence of current state.

Existing components, templates, framework conventions and prior implementations are not design authority.

If the authoritative reference is missing, conflicting, ambiguous, or cannot actually be inspected, do not guess. Surface the uncertainty before declaring visual work complete.

## No assumed verification

Never claim a page, screenshot, responsive state, image or rendering was checked unless it was actually inspected. Build success, valid code and existing breakpoints are not visual verification.

## Fidelity obligations

Preserve the defining design decisions as applicable: composition, hierarchy, asymmetry, negative space, scale, image crop/dominance, typography measure and art-directed line breaks, overlap/depth, navigation character, pacing/density, material/texture, motion, mobile interpretation and emotional tone.

Template is not authority. Previous implementation is evidence, not authority. Do not reuse a component merely because it already exists; first verify that it preserves the approved design.

## Creative Frontend method

Use the implementation layer that best preserves the approved design: semantic HTML, Grid/Flex where appropriate, absolute/coordinate-driven artboards, transforms, z-index, masks/clip-path, SVG, responsive images, partial rasterisation, composited artwork with live semantic overlays, selective JavaScript, GSAP/Motion, and WebGL/Three.js only when genuinely required.

Implementation purity is not a goal. Fidelity, usability, accessibility and measured performance are.

## Responsive art direction

Responsive design is not desktop shrinkage. Desktop, tablet and mobile may be separately art-directed editions of the same design. Review visually significant work at 320px, 390px, representative tablet and representative desktop (normally including 1440x900 when suitable to the reference).

## Mandatory workflow

For substantial visual work:

1. identify and inspect the authoritative reference;
2. analyse what makes it recognisable;
3. choose rendering strategy per region;
4. match macro geometry first;
5. add texture/detail second;
6. render the actual implementation in a browser;
7. compare it with the reference side by side and, when useful, by overlay/difference inspection;
8. identify material deviations;
9. adjust and re-render;
10. repeat until no unexplained major deviation remains.

A successful build is an engineering checkpoint, not visual completion.

## Visual deviation ledger

Any material remaining deviation must be recorded with reference/viewport, observed deviation, cause, fix attempted, remaining difference and status (`fixed` or `explicitly accepted`). No major deviation may be silently normalised as “close enough”.

## Evidence before invoking constraints

Performance, accessibility, maintainability, responsiveness and framework limitations are real constraints but may not be assumed reasons for simplification. Demonstrate the conflict where measurable and test alternatives such as responsive assets, AVIF/WebP, SVG, partial rasterisation, separate mobile artwork or semantic overlays before flattening the design.

## Photography

Inspect native dimensions before assigning a critical image role. Avoid visible upscaling, accidental crop, misleading stock use and unnecessary photo reuse where uniqueness/storytelling matters.

## Definition of done

Visual work is not complete unless the authoritative reference was actually inspected; desktop/mobile were actually rendered and reviewed; major geometry is intentionally faithful; image suitability was checked; interactive states and accessibility basics remain intact; relevant repository checks pass; material visual deviations are fixed or explicitly accepted; and evidence of visual comparison exists.

Final test: **When the approved reference and actual browser rendering are shown side by side, would an informed viewer immediately recognise the implementation as the intended design rather than a simplified approximation?** If not, it is not finished.

## Pattern library rule

This constitution applies to Patterns A-I and all future patterns. Each pattern retains its own visual identity. The transferable rule is the implementation discipline, not Pattern I's scrapbook appearance.

Every future pattern must define both a visual specification (references, desktop/mobile composition, typography, imagery, motion, distinctive details) and an implementation strategy (flow/artboard regions, SVG/raster opportunities, interaction, performance/accessibility risks and QA viewports).

## Attitude

Do not search first for reasons the design cannot be implemented. Search first for the responsible combination of techniques that can implement it. Avoidable design loss, unverified assumptions, blind precedent and “probably fine” are not completion criteria.