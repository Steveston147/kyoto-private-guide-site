# Pattern I — Living Kyoto Scrapbook
## Creative Frontend Production Playbook

Status: approved design/implementation doctrine for Uma Academia Pattern I
Last updated: 2026-09-03
Scope: English-site Pattern I prototype and any future production implementation derived from it

---

## 1. Why this document exists

Pattern I produced an important change in how the Uma Academia site should be designed and implemented.

The previous failure mode was not a lack of framework capability. The recurring problem was translation loss:

1. an image-generation or visual-design mockup looked rich, irregular, tactile, editorial and memorable;
2. implementation then translated that design into convenient web primitives such as hero + grid + cards + CTA;
3. the implementation technically worked, but much of the original art direction disappeared.

Pattern I rejects that workflow.

The implementation must be judged by how closely it preserves the visual and emotional intent of the approved composition, not merely by whether the code compiles or whether the page is conventionally responsive.

**Core production rule:**

> Do not simplify the mockup to suit an easy implementation. Choose the implementation techniques required to preserve the mockup.

This is the central breakthrough.

---

## 2. What Pattern I is

Pattern I is called **Living Kyoto Scrapbook**.

It should feel like a real Kyoto weekend spread across a table: photographs, notes, tickets, tape, small discoveries, landmarks, meals, shopping requests, and memories gathered around one personal guide.

It is not a generic scrapbook theme and not a decorative collage pasted onto a normal tour-company layout.

The design must communicate three things simultaneously:

1. **Professional trust** — Kyoto-born, licensed guide, Nijo Castle guiding experience, clear service boundaries.
2. **Direct relationship** — the person who receives the enquiry is the person who plans and normally guides the day.
3. **Living Kyoto** — famous sights plus everyday Kyoto, spontaneous interests, food, shopping, crafts, neighbourhood life and ordinary weekends.

Primary brand direction:

> Kyoto is more than sightseeing.

Supporting directions include:

> Spend a real Kyoto weekend with me.

> You do not need a perfect plan. Curiosity is enough.

> One guide. One conversation. One Kyoto day made for you.

The intended reaction is not merely “this looks nice.” It is:

> “Ah, I understand what spending a day with Don would actually feel like.”

---

## 3. The technical conclusion: no new programming language is required

The visual breakthrough does **not** require abandoning Next.js for another language or framework.

Framer and Webflow are useful reference models because they encourage canvas-like, visually placed composition. Award-style sites often combine standard web technologies with motion and graphics libraries. However, their visual power does not come from a secret replacement for HTML/CSS.

The production layers are:

- **HTML / React / Next.js** — semantic structure, navigation, copy, CTA, accessible content.
- **CSS** — composition, absolute positioning, rotation, overlap, depth, typography, masks, shadows, paper/wood texture.
- **Raster images (AVIF/WebP/JPEG where appropriate)** — real photography and any decorative artwork that is more efficiently rasterised.
- **SVG** — arrows, circles, underlines, tape-like shapes, scribbles, masks, irregular line work, scalable decorative marks.
- **JavaScript** — restrained interaction only: pointer parallax, subtle lift, scroll choreography if it materially improves the experience.
- **GSAP / Motion only when justified** — not mandatory. Add only when CSS and small React interactions cannot achieve the intended motion cleanly.
- **WebGL / Three.js** — normally unnecessary for Pattern I. Do not add it merely to make the technology sound advanced.

Therefore the correct question is not “Which new framework can make this design?”

The correct question is:

> “Which combination of HTML, CSS, SVG, image art direction and restrained JavaScript reproduces this approved design most faithfully?”

---

## 4. Creative Frontend, not template frontend

Pattern I must be built as **Creative Frontend**.

A template-first implementation tends to become:

- hero;
- equal-width cards;
- three-column grid;
- testimonial band;
- CTA;
- footer.

That is efficient but destroys the defining irregularity of Pattern I.

Instead, important areas — especially the homepage hero — should be treated as a **designed artboard**.

For desktop, think like editorial layout or digital DTP:

- every photo has an intentional x/y position;
- every photo has its own width and height;
- every photo has its own rotation;
- z-index is designed rather than incidental;
- whitespace is designed;
- notes occupy deliberate visual tension points;
- one or two elements may partially leave the nominal composition area;
- overlap should look casual but is actually fixed;
- the layout should not be runtime-randomised.

Example principle:

```text
Photo A: x 34%, y 8%, width 33%, rotate -2.8°
Photo B: x 61%, y 5%, width 19%, rotate +2.1°
Photo C: x 73%, y 37%, width 21%, rotate +3.6°
```

The exact values are design decisions and should be tuned visually.

**Designed randomness is preferred to real randomness.**

---

## 5. The hero is an artwork with semantic layers

The Pattern I hero should be understood as a multi-layer composition.

### Layer A — environment / texture

Possible techniques:

- CSS gradients;
- subtle wood grain;
- paper grain;
- vignette;
- low-opacity raster texture;
- masks;
- irregular edges.

Texture must support physicality without making the page dirty or reducing legibility.

### Layer B — photographic prints

Each important photograph remains independently controllable whenever practical.

A print can contain:

- image;
- white border;
- asymmetric lower margin;
- caption;
- rotation;
- shadow;
- tape/pin detail;
- hover lift;
- optional micro-parallax.

### Layer C — handwritten/story annotations

Notes are content, not lorem ipsum decoration.

They should explain what a visitor is seeing or what kind of spontaneous request can become part of a day.

Examples:

- “Japanese accessories? Perfect little gifts to take home.”
- “Ramen today? Why not. Plans can change.”
- “Looking for local art? Let’s see what we can find.”
- “Japanese stationery? I know the feeling.”
- “You do not need a perfect plan. Curiosity is enough.”

### Layer D — semantic hero copy

Important headline, proposition, navigation and CTA should normally remain live HTML.

This protects:

- accessibility;
- SEO;
- crisp text rendering;
- easy copy revision;
- translation potential;
- responsive control.

### Layer E — interaction

Interaction should create physical presence, not spectacle.

Good examples:

- 1–8 px pointer parallax differences between foreground/background prints;
- a print lifting a few pixels on hover;
- a slight reduction in rotation on hover;
- very subtle scroll depth;
- paper/tape response that stays nearly imperceptible.

Avoid movement everywhere. A scrapbook that constantly moves stops feeling like a scrapbook.

---

## 6. Hybrid rasterisation is legitimate

A crucial design decision: **do not treat rasterisation as cheating.**

If a decorative cluster is substantially easier to preserve as one optimised artwork, it may be rendered into WebP/AVIF and combined with live HTML overlays.

Possible hybrid structure:

1. background decorative artwork as AVIF/WebP;
2. important real photos as independent image elements;
3. headline/CTA/important note text as semantic HTML;
4. SVG scribbles/tape/arrows as overlays;
5. transparent HTML hotspots over purely decorative artwork when interaction is required.

A completely flattened hero image is a valid fallback when exact visual fidelity outweighs editability, provided:

- critical text is duplicated as accessible live content or kept outside the raster;
- appropriate desktop/tablet/mobile art-directed variants exist;
- image weight is optimised;
- links remain real interactive elements;
- the raster does not become the only source of business-critical information.

Preferred order of implementation:

1. HTML/CSS/SVG/real-image composition;
2. partial rasterisation of difficult decorative details;
3. fully composited hero artwork only when it materially improves fidelity.

The rule is outcome-based, not ideological.

---

## 7. Responsive art direction, not simple responsive scaling

Pattern I should not merely shrink the desktop artboard.

Desktop, tablet and mobile may be three different editions of the same composition.

### Desktop target

Primary visual baseline:

- Chromium 1440 × 900.

Desktop can use:

- fixed left navigation rail;
- broad horizontal hero artboard;
- 5–8 visible photographic memories;
- layered notes and scribbles;
- substantial negative space around primary copy.

### Tablet

Tablet may:

- reduce photo count;
- change overlap order;
- move copy above the collage;
- enlarge touch targets;
- simplify decorative marks.

### Mobile target

Primary visual baseline:

- Chromium 390 × 844.

Mobile should be art-directed separately:

- fewer simultaneous photographs;
- larger readable handwritten notes;
- intentional vertical overlap;
- reduced or disabled pointer effects;
- no horizontal overflow;
- no tiny desktop leftovers.

Responsive design here means preserving the **story and visual hierarchy**, not preserving identical coordinates.

---

## 8. Photography doctrine

Photography is the strongest differentiator of Pattern I.

### Authenticity hierarchy

1. Don’s real first-party Kyoto/guest/local-life photographs with permission.
2. Other real authorised production photography.
3. Licensed stock/Unsplash only to fill genuine gaps.

Stock should never impersonate a specific Don/guest event.

### One-photo-one-use rule

A specific image should appear only once within the Pattern I experience unless a deliberate exception is explicitly approved.

Reason:

- repeated photographs make the page feel templated;
- a scrapbook implies unique memories;
- repetition weakens authenticity.

### Resolution rule

Before assigning an image:

1. inspect native pixel dimensions;
2. estimate maximum CSS display size and device-pixel requirement;
3. do not upscale visibly weak files into hero roles;
4. use low-resolution images only as small prints;
5. crop intentionally with `object-fit: cover` or equivalent.

### Story metadata

Each first-party photo should ideally be tracked with:

- source filename;
- native dimensions;
- subject/event;
- public-safe story description;
- intended page/slot;
- handwritten caption;
- display size;
- whether already used.

Example:

```text
Source: IMG_xxxx
Story: guest wanted Japanese accessories
Caption: Japanese accessories? Perfect little gifts to take home.
Type: everyday Kyoto / shopping
Use: homepage hero only
```

Photos are evidence and micro-stories, not filler.

---

## 9. Handwriting doctrine

A handwritten font alone is insufficient.

The goal is to create the impression that someone annotated physical photos after the day.

Use variation through:

- slightly different sizes;
- short line lengths;
- intentional baseline changes;
- rotation;
- arrows;
- circles;
- double underlines;
- note-paper colour;
- position partly on the print border or beside the photo;
- occasional timestamp or ticket detail;
- different but related annotation treatments.

Do not make every note a yellow sticky note. Repetition creates a UI component library rather than a real scrapbook.

Handwritten notes must remain concise and believable.

---

## 10. Navigation doctrine

Pattern H’s vertical desktop navigation is compatible with Pattern I and is currently preferred.

However, it should gradually feel integrated with the artwork rather than like a generic app sidebar.

Potential directions:

- editorial index;
- notebook tab;
- printed margin;
- understated issue/section numbering.

Navigation must remain obvious and usable. Do not make discoverability pay the price for visual novelty.

---

## 11. Brand/content rules

The site should differentiate Don through identity and relationship rather than through vague claims such as “authentic experience.”

Important ideas:

- Kyoto-born and raised;
- licensed guide;
- Nijo Castle guiding experience;
- personally handles the website/enquiry/planning/guiding flow;
- ordinary local perspective;
- adaptability to spontaneous interests.

Preferred direct-flow framing:

> You message me → I reply → I plan → I guide.

This is better than leading with “no middleman” or “no intermediary margin.”

The commercial benefit may include less handoff and no travel-company layer, but the brand benefit is **continuity, flexibility and personal responsibility**.

Family/everyday details should humanise Don without becoming a biography dump.

Appropriate supporting material can include:

- husband and father of two;
- baseball fan;
- ordinary weekend shopping;
- food courts;
- ramen, udon, kaiten sushi, set meals, sweets;
- friend’s restaurant / omakase;
- karaoke;
- spontaneous shopping and cultural interests.

The top page should suggest a personality guests can comfortably spend several hours with.

---

## 12. Everyday Kyoto is not a packaged gimmick

Do not convert every authentic detail into a named tour product.

Bad direction:

- “AEON Experience Tour”;
- “Karaoke Local Immersion Package”;
- forced ordinary-life attractions.

Better direction:

> “If you feel like stopping for ramen, we can.”

> “If you suddenly want to look for Japanese stationery, let’s see what makes sense.”

The value is permission for the day to evolve naturally.

Also avoid overpromising specialist sourcing. For unexpected requests, promise help in figuring out what is realistic and where to look, not guaranteed access or procurement.

Traditional swords/armour should be framed cautiously as cultural, craft, specialist or antique interests, not broad weapons shopping.

---

## 13. Motion doctrine

Motion must support tactility and depth.

Preferred order:

1. CSS hover/transform;
2. lightweight React pointer interaction;
3. GSAP only for sequences that materially benefit from timelines/scroll triggers;
4. WebGL only if a future concept genuinely needs shader/3D effects.

Current Pattern I pointer movement is intentionally small.

Support `prefers-reduced-motion`.

Do not make mobile dependent on hover.

---

## 14. Performance doctrine

Visual richness must not become an excuse for uncontrolled payload.

Rules:

- optimise photos to appropriate dimensions;
- prefer AVIF/WebP when appropriate;
- provide responsive source sizes where useful;
- do not ship desktop-sized raster artwork to small mobile screens if an art-directed mobile variant exists;
- prioritise the LCP hero asset;
- lazy-load below-the-fold imagery;
- keep interaction JavaScript modest;
- monitor First Load JS when adding animation libraries;
- avoid WebGL when the same effect can be achieved cheaply with CSS/SVG.

Next.js `<Image>` should be considered for final production optimisation where it preserves the required art direction. Raw `<img>` is acceptable during rapid visual prototyping, but build warnings are not the final performance standard.

---

## 15. Accessibility and SEO doctrine

High art direction does not justify inaccessible structure.

Keep:

- semantic heading order;
- actual anchor/button elements;
- visible keyboard focus;
- meaningful alternative text for meaningful photos;
- decorative SVGs hidden from assistive technology;
- sufficient contrast;
- live HTML for business-critical information;
- reduced-motion handling.

If text is baked into artwork for fidelity, retain the essential semantic equivalent in accessible/live structure.

Do not hide prices, availability, service boundaries, enquiry status or important conditions exclusively inside images.

---

## 16. Mockup-to-code workflow

This workflow is mandatory for high-fidelity Pattern I work.

### Phase 1 — Art direction

Define:

- viewport/artboard;
- hero message;
- focal photos;
- hierarchy;
- whitespace;
- photo rotations;
- note locations;
- navigation relationship;
- mobile interpretation.

### Phase 2 — Build the structural composition

Implement major geometry first:

- rail;
- artboard;
- headline block;
- large/medium/small photos;
- overlap order;
- primary CTA.

Do not polish minor tape details before the composition is correct.

### Phase 3 — Add physical detail

Add:

- print borders;
- shadows;
- tape;
- pins;
- SVG arrows/circles/underlines;
- handwriting;
- grain;
- ticket/date fragments.

### Phase 4 — Visual comparison

Render the actual page at the target viewport.

Compare directly with the approved reference.

Useful method:

- reference screenshot at 50% opacity;
- implementation screenshot at 50% opacity;
- overlay them;
- identify geometric differences.

Look for:

- x/y offsets;
- wrong visual density;
- photos too small/large;
- incorrect rotation;
- empty areas;
- headline placement;
- whitespace imbalance;
- texture strength;
- wrong z-order.

### Phase 5 — Iterate

Repeat:

> implement → screenshot → compare → adjust → screenshot again.

This may require many tiny changes. That is not wasted effort; it is the core fidelity work.

### Phase 6 — Mobile art direction

Do not wait until the end and simply add one generic breakpoint.

Treat 390 × 844 as a second composition and tune it visually.

---

## 17. Definition of Done

Pattern I is **not done when the build passes**.

A substantial Pattern I page is done only when the following have been checked:

1. implementation compiles/builds;
2. desktop target is rendered at 1440 × 900;
3. actual render is visually compared with the design reference;
4. photo scale/position/rotation is tuned;
5. typography and line breaks are tuned;
6. whitespace and density are tuned;
7. z-index/overlap is intentional;
8. mobile target is rendered at 390 × 844;
9. no horizontal overflow exists;
10. touch/navigation remain usable;
11. photo native resolution vs rendered size has been checked;
12. one-photo-one-use audit has been performed;
13. CTA links work;
14. enquiry flow works;
15. reduced-motion behaviour is acceptable;
16. build warnings relevant to final production have been reviewed;
17. the implementation clearly looks like the approved design when viewed side by side.

**Final completion test:**

> “Does this look like the mockup?”

not:

> “Does this look like a respectable website?”

---

## 18. Local visual QA before Vercel

Vercel Preview authentication has previously made automated external visual inspection unreliable.

Pattern I should therefore prefer a local visual-QA loop before pushing:

```text
local implementation
→ local build/dev server
→ Chromium/Playwright screenshot
→ compare with reference
→ revise repeatedly
→ one consolidated Git commit
→ one Vercel Preview build
```

This has two advantages:

1. stronger visual QA;
2. fewer unnecessary Vercel builds during pixel-level refinement.

Vercel is a final preview/review surface, not the primary pixel-tuning loop.

---

## 19. Git/Vercel production safety

Pattern I development must remain isolated until explicitly approved.

Current safe development branch:

`demo/pattern-i-living-kyoto`

Current test route:

`/pattern-i-demo`

Production must not change simply because a Pattern I preview looks promising.

`/japanese-guide` remains outside this redesign unless explicitly approved.

Use dedicated preview branches and PRs for visual experiments.

Batch refinement work where practical to minimise unnecessary Vercel builds.

Do not merge to production without explicit approval.

---

## 20. Current implemented breakthrough

The first Pattern I implementation established that the mockup-to-web fidelity gap can be reduced substantially without changing the underlying Next.js platform.

The current prototype uses or demonstrates:

- fixed vertical navigation rail;
- a large scrapbook hero artboard;
- CSS-generated wood/paper texture;
- absolute-positioned photo prints;
- per-photo size/rotation/z-index;
- real first-party Japanese-accessories photograph;
- white print borders and shadows;
- handwritten annotations;
- sticky-note and paper-note variations;
- SVG arrow/circle/underline marks;
- masking-tape/pin/ticket details;
- semantic headline/CTA copy;
- lightweight pointer parallax;
- hover lift;
- `prefers-reduced-motion` support;
- distinct desktop/tablet/mobile composition rules.

This proves that the previous gap was mainly a **production-method problem**, not a Next.js capability limit.

---

## 21. How to push Pattern I further

Future refinement should concentrate on quality rather than novelty.

Priority areas:

### Composition

- make overlap more natural;
- allow selected prints to partially leave the visual frame;
- use stronger size hierarchy;
- avoid evenly distributed “CSS randomness.”

### Material realism

- improve paper edge variation;
- tune shadow direction and softness consistently;
- vary tape and annotation types;
- reduce the feeling of reusable UI components.

### Story density

- replace generic/stock moments with real guest micro-stories as photos become available;
- use 5–7 primary memories rather than cramming every idea into the hero;
- let each image answer “What happened here?”

### Navigation integration

- make the left rail feel like an editorial index / notebook margin without reducing usability.

### Interaction

- keep micro-motion restrained;
- consider subtle scroll-depth only after static composition is excellent;
- do not add animation to compensate for weak layout.

### Copy

Continue making the language specifically Don-shaped rather than generic tour copy.

Strong direction:

> Come spend a Kyoto weekend with me.

> You don’t need to know everything you want before we meet.

> The website is mine. The email is mine. The plan is mine. And on the day, I am the guide waiting for you.

---

## 22. Anti-patterns — do not regress

Do not:

- translate the collage into a normal card grid because it is easier;
- use the same photo repeatedly;
- randomise positions on every page load;
- use every note in the same sticky-note component;
- add heavy animation everywhere;
- add WebGL merely for prestige;
- bake important business copy only into a hero image;
- shrink the desktop composition and call it mobile;
- use stock photography as if it were a real guest event;
- overpromise access to specialist goods or experiences;
- package every ordinary Kyoto activity into a commercial “experience”;
- call the page complete merely because Vercel reports READY;
- merge the prototype into production without explicit approval.

---

## 23. Decision framework for future creative pages

The Pattern I breakthrough is reusable beyond this one page.

When a generated/mockup design is stronger than the first web implementation, diagnose the gap in this order:

1. **Was the composition simplified?**
2. **Were irregular coordinates converted to a grid?**
3. **Were textures/overlap/art direction removed?**
4. **Were real images replaced with generic placeholders?**
5. **Was mobile treated as a scaled desktop?**
6. **Was the implementation visually compared with the reference?**
7. **Could a difficult decorative layer be rasterised instead of simplified?**
8. **Could SVG/masks/clip-path reproduce the missing shape?**
9. **Would restrained JS/GSAP materially improve the physical interaction?**
10. **Is the limitation truly technical, or merely an implementation shortcut?**

Default stance:

> Look for the technique that preserves the design before concluding that the design cannot be implemented.

---

## 24. Quality bar

Pattern I should aspire to the discipline of a custom creative studio site while retaining the clarity and operational safety required by a real independent-guide business.

A useful internal scorecard:

- concept fit: ≥ 9.5/10;
- brand differentiation: ≥ 9.5/10;
- visual fidelity to approved reference: ≥ 9/10 before production consideration;
- mobile coherence: ≥ 9/10;
- authenticity of photography/story: ≥ 9.5/10;
- accessibility/clarity: no critical regressions;
- business facts: 100% accurate;
- production safety: 100% preserved.

The final objective is not to create a technically impressive website.

It is to create a website that makes a prospective guest immediately understand:

> **This is Don’s Kyoto — professional, personal, flexible, ordinary and memorable at the same time.**
