# Design Tokens — the shared Accenture system

This file is the single source of truth for the visual system every stack shares. Read it for any task. It defines the palette, type scale, shape, gradients, elevation, motion, and spacing. Exact numbers matter — these are what make the result read as authentic Accenture rather than "some purple site."

## What's official vs. extended

Be honest about provenance so you can defend the design:

- **Official, public brand anchors:** Accenture Purple `#A100FF` (Pantone 7442 C), Black `#000000`, the corporate typeface **Graphik**, and the ">" greater-than mark. These are the non-negotiable signatures.
- **Practical, on-brand extension (defined here):** the purple ramp, neutral/grey ramp, accent palette for data viz, the exact gradient stops, the type scale, shape, and motion. Accenture's full internal token set isn't published, so these are a faithful, accessible system built *around* the official anchors. They look right and they're internally consistent; they're not claimed to be pixel-exact to Accenture's private design kit.

## Table of contents
1. Brand anchors
2. Purple ramp
3. Neutrals (black / white / grey)
4. Accent palette (data viz & highlights)
5. Semantic roles (light + dark)
6. Gradients (the signature)
7. Typography (fonts + the type scale)
8. Shape (the angular signature)
9. Elevation
10. Motion
11. Spacing & layout
12. The ">" mark & signature components
13. AI-slop tells to avoid

---

## 1. Brand anchors

| Token | Hex | Note |
|---|---|---|
| Accenture Purple (core) | `#A100FF` | The signature. Pantone 7442 C. White text on it passes AA (≈5.3:1). |
| Black | `#000000` | The structural partner to purple. Full-bleed black sections are on-brand. |
| White | `#FFFFFF` | The dominant canvas. Accenture leans on white space. |

Mental model: **black-and-white structure, purple accent, one gradient moment.** Purple is never the whole page.

## 2. Purple ramp

A ramp built around the core. Use `purple-500` as the brand seed; `purple-700` for small purple text/links on white (passes AA comfortably); lighter steps for tints, hovers, and dark-mode text.

| Token | Hex | Typical use |
|---|---|---|
| purple-50 | `#F6ECFF` | faint tint backgrounds, hover wash |
| purple-100 | `#EAD4FF` | selected row, chip background |
| purple-200 | `#D5A8FF` | borders on tinted surfaces |
| purple-300 | `#BF7DFF` | **purple text on black/dark** (≈7.6:1 on black) |
| purple-400 | `#B14DFF` | accents on dark, hover on dark |
| purple-500 | `#A100FF` | **CORE** — primary fills, the brand accent |
| purple-600 | `#8A00DB` | hover/pressed on a purple fill |
| purple-700 | `#7000B0` | **small purple text/links on white** (≈9:1) |
| purple-800 | `#500080` | deep gradient stop, dark purple panels |
| purple-900 | `#2E0049` | near-black purple, ink gradient stop |

Contrast che-sheet: white-on-`#A100FF` ≈ 5.3:1 (AA normal ✓). `#A100FF`-on-white ≈ 5.3:1 (AA normal ✓, not AAA) — for small/critical purple text on white, step to `purple-700`. On black, use `purple-300`/`purple-400` for text.

## 3. Neutrals (black / white / grey)

Accenture's neutral spine. Use real greys for chrome, borders, and secondary text — not tinted-purple greys.

| Token | Hex |
|---|---|
| black | `#000000` |
| grey-950 | `#0A0A0A` (near-black surfaces / dark mode base) |
| grey-900 | `#161616` |
| grey-800 | `#262626` |
| grey-700 | `#404040` (body text on white, strong) |
| grey-600 | `#595959` (secondary text) |
| grey-500 | `#808080` (muted/placeholder) |
| grey-400 | `#A6A6A6` |
| grey-300 | `#CCCCCC` (borders) |
| grey-200 | `#E2E2E2` (dividers, subtle borders) |
| grey-100 | `#F0F0F0` (surface, hover fill) |
| grey-50  | `#F7F7F7` (page alt surface) |
| white | `#FFFFFF` |

## 4. Accent palette (data viz & highlights)

Vibrant accents that complement purple. Use for charts, categories, and the occasional highlight — never to compete with purple as the primary action color. Magenta is the gradient partner and the most "Accenture" of these.

| Token | Hex |
|---|---|
| accent-magenta | `#FF50A0` (the gradient partner; pink/magenta) |
| accent-blue | `#2E5BFF` (electric blue) |
| accent-teal | `#00C2B8` |
| accent-green | `#2BD576` |
| accent-amber | `#FFB02E` |
| accent-coral | `#FF6A4D` |

A clean data-viz sequence: `#A100FF`, `#2E5BFF`, `#FF50A0`, `#00C2B8`, `#FFB02E`, `#2BD576`.

## 5. Semantic roles (light + dark)

Style by role, not raw hex, so light/dark just work. These are embodied in `assets/tokens.css`.

**Light:**
| Role | Value |
|---|---|
| background | `#FFFFFF` |
| surface | `#FFFFFF` |
| surface-alt | `#F7F7F7` |
| surface-inverse | `#000000` (black band/footer) |
| border | `#E2E2E2` |
| border-strong | `#CCCCCC` |
| text | `#161616` |
| text-secondary | `#595959` |
| text-muted | `#808080` |
| primary | `#A100FF` |
| on-primary | `#FFFFFF` |
| primary-hover | `#8A00DB` |
| primary-text | `#7000B0` (purple text/links on white) |
| ring (focus) | `#A100FF` |
| success | `#1FA463` · warning `#FFB02E` · danger `#E5484D` · info `#2E5BFF` |

**Dark (black-first, very on-brand):**
| Role | Value |
|---|---|
| background | `#0A0A0A` |
| surface | `#161616` |
| surface-alt | `#262626` |
| border | `#2E2E2E` |
| text | `#F2F2F2` |
| text-secondary | `#B3B3B3` |
| primary | `#A100FF` (pops on black) |
| on-primary | `#FFFFFF` |
| primary-text | `#BF7DFF` (purple text on dark) |
| ring | `#B14DFF` |

Ship both and respect `prefers-color-scheme` unless told otherwise — Accenture uses black surfaces heavily, so dark mode is first-class here.

## 6. Gradients (the signature)

One gradient moment per screen, anchored by purple. These are unmistakably Accenture.

```css
--acn-gradient-core:     linear-gradient(135deg, #A100FF 0%, #FF50A0 100%);  /* purple → magenta — THE signature */
--acn-gradient-violet:   linear-gradient(135deg, #500080 0%, #A100FF 100%);  /* deep → core, for purple panels */
--acn-gradient-spectrum: linear-gradient(120deg, #2E5BFF 0%, #A100FF 48%, #FF50A0 100%); /* blue → purple → magenta hero */
--acn-gradient-ink:      linear-gradient(135deg, #000000 0%, #2E0049 100%);  /* black → deep purple, for dark heroes */
```

Use on: a hero background, a single feature band, a key stat card, an oversized `>` graphic, or text (`background-clip: text`) for one punch headline. Not on every button.

## 7. Typography

**Font stack.** Default to Inter (free, loads from Google Fonts, closest to Graphik). Put Graphik first for licensed environments.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
```

```css
--acn-font-sans:    "Graphik", "GraphikWeb", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif;
--acn-font-display: "Graphik", "GraphikWeb", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
--acn-font-mono:    "Roboto Mono", ui-monospace, "SF Mono", Menlo, monospace;
```

**The type scale.** Accenture display type is **bold and tightly tracked** — this is the biggest differentiator from light "tech" headers. Body stays calm regular weight. The eyebrow is the signature kicker.

| Role | Size / Line | Weight | Tracking | Note |
|---|---|---|---|---|
| display-2xl | 72 / 76 (1.05) | 700 | -0.02em | hero punch |
| display-xl | 56 / 60 (1.08) | 700 | -0.02em | hero |
| display-lg | 44 / 48 (1.1) | 700 | -0.015em | section opener |
| headline-lg | 32 / 38 (1.15) | 600 | -0.01em | |
| headline-md | 24 / 30 (1.2) | 600 | -0.01em | |
| title-lg | 20 / 26 (1.3) | 600 | 0 | card titles |
| title-md | 18 / 26 (1.4) | 600 | 0 | |
| body-lg | 18 / 29 (1.6) | 400 | 0 | lead paragraph |
| body-md | 16 / 26 (1.6) | 400 | 0 | default body |
| body-sm | 14 / 22 (1.55) | 400 | 0 | |
| label-lg | 14 / 17 (1.2) | 600 | 0.02em | buttons |
| eyebrow | 12 / 14 (1.2) | 600 | 0.12em | **UPPERCASE kicker above headlines** |
| caption | 12 / 17 (1.4) | 400 | 0 | meta |

Headlines are 600–700, not 400. The eyebrow (uppercase, 0.12em tracking, often with a leading `>`) above a bold headline is a fast way to read as Accenture. Buttons use `label-lg`, sentence case (not ALL CAPS).

## 8. Shape (the angular signature)

```css
--acn-radius-none: 0px;     /* default for primary buttons & many cards — the angular signature */
--acn-radius-xs:   2px;
--acn-radius-sm:   4px;     /* a restrained softening; still crisp */
--acn-radius-md:   8px;     /* cards/inputs when a little softness is wanted */
--acn-radius-lg:   12px;    /* the softest you should go; use sparingly */
--acn-radius-full: 9999px;  /* ONLY avatars, status dots, small tags — never primary buttons */
```

Primary buttons and feature cards are **rectangles** (0–4px). Pill-shaped primary actions read as Material/Bootstrap and undo the Accenture feel. Sharp corners + the `>` chevron is the look.

## 9. Elevation

Accenture is mostly flat with crisp borders; shadows are soft and used sparingly. The purple glow is a special-occasion accent for a hero CTA or featured card.

```css
--acn-shadow-sm:     0 1px 2px rgba(0,0,0,.08);
--acn-shadow-md:     0 4px 16px rgba(0,0,0,.10);
--acn-shadow-lg:     0 12px 40px rgba(0,0,0,.14);
--acn-shadow-purple: 0 12px 40px rgba(161,0,255,.28);  /* purple glow — hero CTA / featured card only */
```

Prefer a 1px `border` (`--acn-border`) over a shadow for everyday cards; reach for shadow on overlays, menus, and the one featured surface.

## 10. Motion

Confident and clean, not bouncy. Short durations, decisive easing.

```css
--acn-ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--acn-ease-out:      cubic-bezier(0.16, 1, 0.3, 1);   /* confident decelerate — good for reveals */
--acn-ease-bold:     cubic-bezier(0.65, 0, 0.35, 1);
--acn-dur-fast: 160ms;
--acn-dur-base: 240ms;
--acn-dur-slow: 400ms;
```

Signature motions: the `>` chevron/arrow translates ~4px right on hover; an underline wipes in left-to-right on links; a hero or section reveals upward with `ease-out` on load/scroll. One well-orchestrated reveal beats scattered micro-animations.

## 11. Spacing & layout (8px grid)

```css
--acn-space-1: 4px;  --acn-space-2: 8px;  --acn-space-3: 12px; --acn-space-4: 16px;
--acn-space-5: 24px; --acn-space-6: 32px; --acn-space-7: 48px; --acn-space-8: 64px;
--acn-space-9: 96px; --acn-space-10: 128px;
```

Section padding is generous: 96–128px vertical on desktop, 48–64px on mobile. Content max-width ~1200–1280px. Breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536. Hierarchy is strong and usually left-aligned; let white space and big bold type carry the page. Touch targets ≥ 44px.

## 12. The ">" mark & signature components

The bundled `assets/accenture-greater-than.svg` is a bold chevron. Inline pattern:

```html
<button class="acn-btn acn-btn--primary">
  Explore services
  <svg class="acn-chevron" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 4 L17 12 L7 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/>
  </svg>
</button>
```

```css
.acn-btn {                       /* rectangular, bold, sharp */
  display:inline-flex; align-items:center; gap:10px;
  height:52px; padding:0 28px; border:none; cursor:pointer;
  border-radius: var(--acn-radius-none);
  font: 600 14px/1.2 var(--acn-font-sans); letter-spacing:.02em;
  transition: background var(--acn-dur-fast) var(--acn-ease-standard);
}
.acn-btn--primary { background: var(--acn-primary); color: var(--acn-on-primary); }
.acn-btn--primary:hover { background: var(--acn-primary-hover); }
.acn-btn--ghost { background:transparent; color: var(--acn-primary-text);
  box-shadow: inset 0 0 0 1.5px currentColor; }       /* crisp outline */
.acn-chevron { width:18px; height:18px; transition: transform var(--acn-dur-fast) var(--acn-ease-out); }
.acn-btn:hover .acn-chevron { transform: translateX(4px); }

.acn-eyebrow {                   /* the signature kicker */
  display:inline-flex; align-items:center; gap:8px;
  font: 600 12px/1.2 var(--acn-font-sans); letter-spacing:.12em; text-transform:uppercase;
  color: var(--acn-primary-text);
}
.acn-eyebrow::before { content:""; width:14px; height:2px; background: currentColor; } /* or a small > */
```

Text-link CTA (very Accenture): a label with a trailing `>` and an underline that wipes in on hover.

## 13. AI-slop tells to avoid

- A page that is mostly purple. (Purple is the accent; black/white/grey is the structure.)
- Pill-shaped primary buttons and big rounded corners everywhere. (Accenture is angular: 0–4px.)
- Thin/light headlines. (Accenture display is 600–700 and tight.)
- No black anywhere, no gradient, no `>` mark. (All three are signatures.)
- A generic or humanist fallback font showing through (Poppins, Georgia, Arial-only). Use the Inter/neo-grotesque stack.
- Gradients on every button instead of one deliberate gradient moment.
- Centered everything. Accenture hierarchy is usually bold and left-aligned with an eyebrow.
