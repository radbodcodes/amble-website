# Cinema-Evolved — Session Bookmark

**Last worked:** 2026-04-23
**Status:** Paused mid-iteration. Cinema-evolved is fully live with accumulated changes. User wants to restart from the ORIGINAL cinema palette at `/preview/cinema` and layer changes back one at a time.

---

## What exists live now

- `/preview/cinema` — untouched original from commit `a2a484f`. Warm copper (`#C47A4E`, `#EDE5D6`), "Reel 001 / Unhurried", Plate I–IV, dark About with Crosswalk.png backdrop, "Fin" in footer. Two fonts only: Cormorant + JetBrains Mono.
- `/preview/cinema-evolved` — all iterations applied on top.
- `/preview/cinema-evolved/compare-methodology` — three methodology layout options stacked (A/B/C). User picked A.

---

## Current cinema-evolved state (what's in the repo right now)

### Palette
- `--copper #CC8842`, `--copper-deep #8B4F1D`, `--copper-pale #E2BE8F`, `--copper-glow #F2C27E`, `--ember #D46F34`
- `--azure #5A7A8C`, `--azure-deep #2E4654`, `--azure-glow #8FA9B8`
- `--slate #1C2329`, `--slate-deep #10161B`
- `--paper #F3E9D4`, `--paper-warm #E2D1B2`, `--paper-deep #14100A`
- `--ink #18130A`, `--ink-soft #332B1F`
- **Morning (plaster cream)**: `--morning #E7DCC7`, `--morning-warm #EFE5D2`, `--morning-deep #A89678`

### Scroll gradient (current)
Holds dark through 66–72%, compresses plaster ramp into last 20%:
```
paper-deep 0%, paper-deep 20%, #1A140D 32%, #241D14 44%, #2E251B 56%,
#3A2E20 66%, #5A4930 72%, #8F7A4D 78%, #BAA378 84%, morning 90–100%
```

### Fonts (three-font system)
- Cormorant Garamond — serif narrative
- JetBrains Mono — textural mono
- Space Grotesk — SEQ labels, phase codes, HUD data (`--font-cinema-data`)

### Link binary
- `.link-cta`, `.link-inline`, `.link-nav`, `.card-link` — serif italic + copper + underline = clickable
- `.data`, `.data-sm`, `.data-num`, `.meta` — Space Grotesk / mono uppercase = decoration, never clickable
- No pill buttons anywhere

### Section character
- `.paper-section` (About, Contact, Footer) — solid plaster cream with warm ink typography, copper links
- `.slate-section` (Methodology) — semi-transparent cool overlay `rgba(16,22,27,0.55/0.35/0.0)` over page gradient
- Hero, Outcomes, Interlude — transparent, inherit gradient

### Motifs
- Orbital thin-line circles (around methodology letters, plus decorative)
- Azure blueprint grid backdrop (methodology only)
- Crosshair/hairline corner marks on images
- SEQ.01–SEQ.05 / PHASE mission-control labels across sections
- Letterbox bars CSS utility (`.letterbox`)
- Duotone filters: `.duotone` (sepia .7, hue-rotate -5deg) and `.duotone-dark`

### Methodology layout (Variant A — user-approved)
- Row 1: A M B as `col-span-4` each
- Row 2: L E as `col-span-4` each, centered between two `col-span-2` gutters
- Each cell stacks orb (120/140px) → phase code → label → description (`max-w-[360px]`)
- Orb: outer ring stroke 1, azure-glow, dashed 3/5, opacity .85 + two copper satellites (r=3.5 north, r=1.8 south); inner ring stroke .9, opacity .75
- File: `_components/methodology.tsx`

---

## Lessons learned (color / design)

1. **"Uplifting" isn't cooler and isn't more saturated.** It's desaturated warm with high luminance. Plaster > amber > sky-blue > wheat.
2. **Monochromatic gradients feel flat.** Warm-to-warm needs luminance compression. Warm-to-cool needs a neutral desaturation bridge.
3. **Sky blue destination felt out of place** — breaks the cinema warm world even if psychologically "open."
4. **Slate overlays need to hold opacity through the section** OR the gradient must stay dark underneath, or letter-on-ground contrast fails at the bottom.
5. **Compact ≠ clustered.** Halving padding is fine if descriptions are capped to tight columns. Orbs at 120/140px read as well as 200px.
6. **Pill buttons contaminate cinema aesthetic.** Text links only.
7. **Duplicate images break atmosphere.** Don't repeat the same photograph across sections.
8. **Three-font system** (serif + mono + data grotesk) gives SEQ labels their own voice without borrowing from the mono.

---

## User's plan for next session

**Restart from original cinema palette** (the warm copper state at `/preview/cinema`), then layer changes back **one at a time**. User priority order suggested:

1. Three-font system (add Space Grotesk for data labels)
2. Link binary (serif-italic-underlined vs. mono-caps)
3. SEQ data labels across sections
4. Orbital motif
5. Page scroll gradient
6. About flip to paper-section (cream ground with dark type)
7. Methodology Variant A layout (3-up / 2-up grid)

Each step should be a discrete diff so user can accept/reject without compounding.

---

## Resume instructions

1. Read this file first.
2. User will pick a starting change from the priority list above, or override with a different one.
3. **Do NOT overwrite `/preview/cinema-evolved`** — user wants to keep the current state available for reference. New iteration likely goes to `/preview/cinema` directly (layering on top of the original) OR to a new route like `/preview/cinema-v2`.
4. Ask before destroying current cinema-evolved or creating a third route.

---

## Files modified in current session (uncommitted until this save)

- `app/preview/cinema-evolved/cinema.css` — gradient + morning palette
- `app/preview/cinema-evolved/_components/methodology.tsx` — Variant A layout + orb refinements
- `app/preview/page.tsx` — added cinema-evolved index entry, updated palette swatch
- `app/preview/cinema-evolved/compare-methodology/page.tsx` — three-variant comparison page (new)
