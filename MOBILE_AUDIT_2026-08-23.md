# Mobile / Font / Performance Audit — 2026-08-23

## Scope

Audit the English and Japanese public pages for phone readability, font cost, initial rendering cost, and Vercel-conscious deployment size without changing business rules, enquiry endpoints, SEO positioning, or the protected Kitajiri hero-image pipeline.

## Findings

- English used `next/font` Inter even though a high-quality system UI stack is available on iOS, Android, Windows, and macOS. Removing the downloadable font eliminates one font asset request and its preload while keeping typography familiar and readable.
- Japanese already relied primarily on system Japanese fonts. This is the correct performance choice; no Japanese webfont should be added.
- Mobile body copy was generally readable, but several secondary text styles sat near 0.88–0.92rem. A small phone-only increase with more line height improves scanning without materially increasing page length.
- Card shadows and long below-the-fold sections can create unnecessary paint/layout work on phones. Mobile now uses lighter shadows and `content-visibility: auto` for below-the-fold content.
- Four large Kyoto JPEG files were still present in `public/` but are not used by the current English or Japanese pages: `arashiyama.jpg`, `gion-yasaka.jpg`, `kinkakuji.jpg`, and `kiyomizu-dera.jpg`. Together they exceed 8 MB. They are removed from the deployment bundle.
- The two route images currently used on the English page remain under Next Image optimisation because serving the original multi-megapixel JPEGs directly would be substantially heavier for mobile users. No new image-optimisation usage is introduced.
- The Kitajiri Japanese hero image source/build pipeline is not changed.

## Vercel cost policy

- No new runtime functions, API routes, database, analytics service, or client-side framework dependency is added.
- No Japanese webfont is added.
- Unused static assets are removed to reduce deployment payload.
- This work is intentionally batched into one branch/PR to minimise preview and production build churn.
- Future image work should prefer pre-sized static WebP/AVIF assets when source handling is safe, but must not compromise the protected Kitajiri image path.

## Mobile acceptance baseline

At phone widths around 390 px:

- no horizontal page overflow;
- navigation remains touch-friendly;
- English and Japanese body copy remains comfortably readable;
- Japanese section headings do not strand single semantic characters unnecessarily;
- forms retain 16 px controls to avoid iOS input zoom;
- below-the-fold sections may defer rendering until near the viewport;
- no downloaded Japanese font is required.
