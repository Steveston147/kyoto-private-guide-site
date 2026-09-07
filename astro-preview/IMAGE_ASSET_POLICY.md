# H+ image asset policy

This preview must prefer photographic clarity over aggressive file-size reduction.

## Display-quality rules

- Hero / large editorial photography: use source imagery with at least ~2x the expected CSS display width whenever practical.
- Large portrait/editorial panel: target at least 1200 px on the long edge; 1200 x 1600 or larger is preferred for portrait photography.
- Large landscape editorial panel: target at least 1400 px wide; 1400 x 1050 or larger is preferred.
- Small cards may use smaller derivatives, but a card derivative must not replace the large-display master.
- Do not upscale a low-resolution source to disguise insufficient resolution.
- Prefer WebP at visually checked quality; compression must not visibly smear hair, text, architecture, foliage, faces, or fine fabric detail.
- Preserve the original uploaded source outside the generated web derivative whenever possible.

## Uploaded-photo audit — 2026-09-08

Primary H+ candidates visually checked from the user-provided originals:

1. `guest-fushimi-inari-photography.webp`
   - Source: IMG_7053 (2).JPG
   - Source size: 1536 x 2048
   - Approved large derivative: 1200 x 1600
   - Role: Experience / real Kyoto day
   - Visual check: torii inscriptions, hair and clothing edges remain distinct; no visible blur from scaling.

2. `guests-hozugawa-boat.webp`
   - Source: IMG_9119.JPG
   - Source size: 2048 x 1536
   - Approved large derivative: 1400 x 1050
   - Role: Real Guests / editorial gallery
   - Visual check: faces, life-jacket lettering, water and mountain detail remain distinct.

Reserve assets retained for later Tours/editorial use include craft activity, Arashiyama monkey experience, cherry blossoms, samurai armour, taiko arcade, Japanese food and cafe/sweets imagery.

## Safety

The production `main` branch is not to be changed during H+ preview work. New photographs are integrated only on the isolated H+ preview branch until desktop/mobile visual UAT is complete.
