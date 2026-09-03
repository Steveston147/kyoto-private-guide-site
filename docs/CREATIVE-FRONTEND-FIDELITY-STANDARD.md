# Creative Frontend Fidelity Standard

Status: approved cross-pattern implementation doctrine
Last updated: 2026-09-03
Scope: all existing design patterns A–I, all future patterns, and any site derived from the pattern library

## 1. Purpose

This standard generalises the breakthrough achieved while implementing Pattern I — Living Kyoto Scrapbook.

The recurring failure mode before Pattern I was not lack of framework capability. It was translation loss between an approved visual mockup and implementation. A mockup could be rich, irregular, cinematic, editorial, immersive or tactile, then become a conventional web layout during coding because the implementation was simplified into familiar primitives such as hero + grid + cards + CTA.

That is no longer an acceptable production method.

**Primary rule:**

> Do not simplify an approved mockup merely because a simpler implementation is easier. Choose the implementation techniques needed to preserve the approved visual and emotional intent.

This applies retroactively to Patterns A–H, to Pattern I, and to every future pattern.

## 2. What changes — and what does not

The visual identity of each pattern remains distinct. This standard does not make every pattern look like Pattern I.

Pattern A should still look like Pattern A. Pattern B should still look like Pattern B. The same applies through Pattern I and future patterns.

What changes is the **implementation discipline**.

Each pattern must now be implemented as a designed experience rather than translated into the nearest convenient template.

The implementation must preserve, as appropriate to the pattern:

- composition;
- visual hierarchy;
- asymmetry;
- negative space;
- scale relationships;
- image treatment;
- crop logic;
- typography rhythm;
- line breaks where art-directed;
- overlaps and depth;
- transitions;
- section pacing;
- navigation character;
- background texture/materiality;
- interaction intent;
- mobile interpretation;
- emotional tone.

## 3. Definition of fidelity

Fidelity is not pixel-perfect imitation at all viewport sizes. It is preservation of the design's defining decisions.

A high-fidelity implementation should make an informed viewer say that the coded page and the approved mockup are clearly the same design system and composition.

For a reference viewport, major visual geometry should be deliberately matched:

- focal element position;
- headline location and measure;
- image sizes and relative dominance;
- section height;
- visual density;
- whitespace distribution;
- overlaps;
- foreground/background relationships;
- CTA location;
- navigation relationship.

Small browser rendering differences are acceptable. Replacing a distinctive composition with a generic grid is not.

## 4. Creative Frontend principle

High-fidelity patterns are built as **Creative Frontend**, not template frontend.

The framework is a delivery environment, not the design language.

Next.js, Astro, React, vanilla HTML, or another framework may all support high-fidelity work. The key is the combination of technologies and the willingness to use them deliberately.

Available layers include:

- semantic HTML for structure, copy, navigation, forms and accessibility;
- CSS Grid/Flexbox for genuinely structured regions;
- CSS absolute positioning for art-directed compositions;
- transforms for rotation, scale and offset;
- z-index for designed depth;
- CSS masks, clip-path and pseudo-elements for irregular geometry;
- SVG for lines, arrows, cut-outs, masks, diagrams, doodles and scalable decoration;
- AVIF/WebP/JPEG/PNG for photography and raster artwork;
- CSS or raster textures for physical/material surfaces;
- JavaScript for interaction that cannot be expressed well in CSS;
- GSAP/Motion when timeline or scroll choreography materially improves the approved concept;
- Canvas/WebGL/Three.js only when the concept genuinely requires shader, 3D or advanced visual effects.

Do not add sophisticated technology merely to appear sophisticated. Use the least complex technique that faithfully preserves the design.

## 5. Artboard thinking

When a mockup behaves more like a poster, magazine spread, exhibition panel, map, collage, dashboard composition or cinematic frame than a normal document flow, treat the important region as an **artboard**.

Artboard implementation may use manually designed coordinates and relationships.

Examples:

- independent x/y placement;
- independent widths/heights;
- intentionally different rotations;
- planned overlap order;
- controlled clipping;
- elements partly leaving the nominal frame;
- asymmetric whitespace;
- fixed visual tension points.

Runtime randomness is usually inferior to designed randomness. If a layout should appear spontaneous, its apparent randomness should normally be art-directed and repeatable.

## 6. Hybrid implementation is explicitly permitted

Implementation purity is not a goal. Fidelity, usability and performance are the goals.

A pattern may combine:

1. live HTML for important semantic copy;
2. CSS for layout and visual treatment;
3. SVG for scalable visual detail;
4. real images as independent elements;
5. partially rasterised decorative artwork;
6. interactive overlays or hotspots;
7. small JavaScript interactions.

Rasterisation is not cheating.

If a decorative cluster can be preserved more faithfully and efficiently as an optimised AVIF/WebP asset, it may be rasterised while important text and controls remain live HTML.

A fully composited hero image is also allowed as a deliberate fallback when it materially improves fidelity, provided that:

- essential text remains accessible/semantic;
- important controls remain real controls;
- business-critical information is not trapped only in the image;
- desktop/tablet/mobile variants are art-directed as necessary;
- file weight is controlled;
- SEO/accessibility are preserved.

Decision order:

1. live HTML/CSS/SVG/image composition;
2. partial rasterisation where useful;
3. full composited artwork only where justified.

## 7. Responsive art direction

Responsive design does not mean shrinking a desktop mockup.

For expressive patterns, desktop, tablet and mobile may be different editions of the same design.

Preserve the same product meaning and visual identity, but allow different:

- element order;
- image count;
- image crop;
- composition;
- overlap;
- decorative density;
- navigation form;
- text measure;
- heading line breaks;
- interaction behaviour.

The mobile version should look intentionally designed for mobile, not like the damaged remainder of a desktop composition.

Baseline review widths should include at least:

- 320px;
- 390px;
- tablet;
- 1440 × 900 desktop when appropriate.

## 8. Mockup-to-code production workflow

High-fidelity patterns use the following workflow.

### Phase A — Analyse the reference

Before coding, identify:

- what makes this pattern recognisable;
- focal point;
- visual hierarchy;
- grid or intentional lack of grid;
- dominant image relationships;
- typography character;
- section rhythm;
- navigation behaviour;
- motion intent;
- desktop and mobile differences;
- which details are semantic and which are decorative.

Do not begin by deciding which reusable cards to create.

### Phase B — Choose the rendering strategy

For every important region decide whether it is best represented by:

- normal flow;
- grid/flex;
- artboard/absolute layout;
- SVG;
- raster asset;
- hybrid layers;
- interactive JavaScript.

Ask:

> Is this truly a technical limitation, or merely an implementation shortcut?

### Phase C — Build macro geometry first

Match:

- major section proportions;
- focal element size;
- headline geometry;
- whitespace;
- image dominance;
- overlap order;
- navigation placement.

Do not spend time on micro-decoration while the composition is still wrong.

### Phase D — Add material and detail

Then refine:

- border weight;
- shadows;
- masks;
- paper/material texture;
- decorative SVG;
- typography details;
- crop focal points;
- hover feedback;
- subtle motion.

### Phase E — Visual comparison

Render the actual implementation at controlled viewport sizes.

Compare it against the approved reference.

Where possible use screenshot overlays or side-by-side comparison. A useful diagnostic is 50% reference + 50% implementation overlay.

Look specifically for:

- position drift;
- wrong scale;
- incorrect density;
- excessive symmetry;
- weak overlap;
- incorrect whitespace;
- typography too generic;
- crop mismatch;
- missing texture;
- mobile degradation.

### Phase F — Iterate

Implementation is not complete after the first successful build.

Repeat:

implement → render → compare → adjust → render again.

High-fidelity visual work may require many small changes. Those changes should preferably be performed locally before triggering remote preview builds.

## 9. Definition of done

A design implementation is not complete merely because:

- code compiles;
- build succeeds;
- routes load;
- responsive breakpoints exist.

For a visually significant pattern, Definition of Done also requires:

- reference comparison performed;
- major visual geometry is faithful;
- mobile composition is intentionally art-directed;
- no horizontal overflow;
- image resolution is appropriate for display size;
- image crops are intentional;
- interactive states are checked;
- motion respects reduced-motion preferences;
- important content remains semantic;
- accessibility basics remain intact;
- performance cost is proportionate to visual value;
- implementation no longer looks like a generic substitute for the mockup.

**Final design test:**

> If the reference and implementation are shown side by side, would a reasonable viewer immediately recognise the implementation as the intended design rather than a simplified approximation?

If not, the visual implementation is not finished.

## 10. Photography and image discipline

Photography must be treated as a design asset rather than filler.

Rules:

- inspect native dimensions before assigning display roles;
- avoid visible upscaling;
- use intentional crop and focal position;
- provide responsive image delivery;
- use authentic first-party imagery when the project benefits from authenticity;
- never imply that stock imagery documents a real event or person when it does not;
- avoid unnecessary photo reuse when the pattern relies on uniqueness or editorial storytelling;
- record source/use information for important assets where practical.

A beautiful layout with visibly weak images is not high fidelity.

## 11. Motion discipline

Motion is part of art direction, not decoration added at the end.

Use motion only when it supports:

- hierarchy;
- spatial understanding;
- continuity;
- tactility;
- narrative progression;
- interaction feedback.

Preferred escalation:

1. CSS state transitions;
2. lightweight local JavaScript;
3. GSAP/Motion for meaningful choreography;
4. WebGL/Three.js only for concepts that truly need them.

Avoid constant motion, scroll hijacking and effects that delay access to information.

## 12. Performance is part of fidelity

A design that only works on a powerful development machine is not faithfully implemented for real users.

Use:

- correctly sized responsive images;
- AVIF/WebP where appropriate;
- lazy loading below the fold;
- prioritisation/preloading for genuine hero/LCP assets;
- restrained hydration;
- minimal JavaScript where possible;
- separate mobile artwork when sending the desktop asset would be wasteful.

Do not sacrifice the defining visual language for marginal optimisation without evidence. Likewise, do not ship uncontrolled visual weight merely because the mockup is rich.

## 13. Accessibility and semantics

Creative frontend must remain a real website.

Keep:

- logical heading structure;
- live text for important content whenever practical;
- real links/buttons/forms;
- keyboard usability;
- visible focus;
- sufficient contrast;
- useful alt text;
- decorative graphics hidden appropriately from assistive technology;
- reduced-motion support.

If visual fidelity requires text inside raster artwork, provide the essential semantic equivalent in the live DOM.

## 14. Framework-specific rule

This doctrine is framework-independent.

For Next.js, use React/CSS/SVG/images and selective client interaction.

For Astro, prefer Astro-native static rendering and CSS first, then add islands/client JavaScript only where interaction materially requires it.

Do not change framework solely because a mockup appears visually ambitious. First ask whether the existing framework can express the required design layers. In most cases it can.

## 15. Applying this standard to Patterns A–I

Patterns A–I retain their individual design definitions. The following rule is added to every one of them:

> The pattern mockup is a design specification, not loose inspiration. Implementation must preserve the pattern's defining composition, hierarchy, image treatment, motion, typography and responsive art direction. Generic web primitives may be used only where they match the pattern; they must not replace distinctive design decisions for convenience.

When an older pattern is revisited:

1. reopen its approved mockup/reference;
2. identify what was lost in the existing implementation;
3. classify each loss as geometry, typography, imagery, material, motion or responsive art direction;
4. rebuild the distinctive areas using the most appropriate frontend layers;
5. visually compare before calling it finished.

This means older patterns do not need to be discarded. They should be **re-implemented with higher fidelity**.

## 16. Future pattern creation rule

Every future pattern must include both:

### A. Visual specification

- concept;
- reference mockup(s);
- desktop composition;
- mobile interpretation;
- typography;
- photography/image treatment;
- motion intent;
- distinctive details.

### B. Implementation strategy

- normal-flow regions;
- artboard regions;
- SVG opportunities;
- rasterisation candidates;
- required interactivity;
- performance risks;
- accessibility requirements;
- visual QA viewport(s).

A pattern is not fully specified until its implementation strategy has been considered.

## 17. Cross-project adoption

This is not an Uma Academia-only technique.

The same doctrine should be used for Study Abroad / RSJP-family sites and other future sites, with project-specific brand, accessibility, factual-governance and localisation rules layered on top.

The transferable principle is:

> Preserve the design idea first. Choose the frontend technique second. Do not let the convenience of the technique redefine the design.

## 18. Non-negotiable attitude

The most important change is cultural rather than technical.

Do not stop at “good enough for a website” when an approved design clearly asks for more.

Do not use responsiveness, maintainability, framework conventions or performance as automatic reasons to flatten a design. Treat them as engineering constraints to solve alongside fidelity.

Do not search first for reasons the mockup cannot be implemented.

Search first for the combination of techniques that can implement it responsibly.

The correct standard is not perfection at any cost. It is **disciplined refusal to accept avoidable design loss**.
