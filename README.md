# Accenture Frontend Design Skill

Build production-grade frontend interfaces in **Accenture's brand design language** — the signature Accenture Purple (`#A100FF`) on black-and-white, bold Graphik-style typography, sharp angular shapes, the `>` greater-than mark, and purple→magenta gradients.

## Overview

This skill produces frontend interfaces that look and feel like they belong to Accenture: anchored by **Accenture Purple `#A100FF`** against **black and white**, set in a **bold neo-grotesque** (Graphik, with Inter as the practical default), built on **sharp, angular shapes**, and punctuated by the **`>` greater-than mark** and **purple→magenta gradients**.

The output should be the kind of UI an Accenture brand or design lead would recognize as on-brand — confident, editorial, and high-contrast — not a generic "purple buttons on white" approximation.

## Features

- **Color Discipline**: Purple as a confident accent over a black-and-white spine (`#A100FF` passes AA for white text; `#7000B0` for small purple text on white)
- **Bold Typography**: Heavy display headlines (600–700 weight, tight tracking) with UPPERCASE letter-spaced eyebrow labels
- **Sharp Geometry**: Rectangular buttons and cards (0–4px radius) — no pills for primary actions
- **Signature `>` Mark**: Forward-pointing chevron as CTA affordance (animates right on hover), eyebrow tick, or hero graphic
- **Signature Gradient**: Purple→magenta (`#A100FF` → `#FF50A0`) and deep-violet→purple gradients
- **Editorial Spacing**: 8px grid, large section padding, strong left-aligned hierarchy
- **Confident Motion**: Chevron slide on hover, underline wipe, scroll-reveal — not bouncy

## Supported Stacks

| Stack | Reference | Use When |
|-------|-----------|----------|
| React + Tailwind CSS | `references/react-tailwind.md` | Default for single-file artifacts, no build step |
| React + shadcn/ui | `references/react-shadcn.md` | Themed component kit, component library |
| Angular + Angular Material | `references/angular.md` | Angular codebases |
| Vanilla HTML + CSS | `references/vanilla.md` | Static pages, emails, no framework |

All stacks share the core design tokens defined in `references/design-tokens.md`.

## Assets

| File | Purpose |
|------|---------|
| `assets/tokens.css` | Full Accenture token set as CSS custom properties (light + dark) |
| `assets/tailwind-theme.js` | Tailwind config (`theme.extend` / v4 `@theme`) with palette, fonts, radius, shadows |
| `assets/shadcn-theme.css` | shadcn/ui CSS-variable mapping (`--primary`, `--background`, etc.) seeded with Accenture Purple |
| `assets/angular-theme.scss` | `mat.theme()` configuration with sharp-corner and bold-type overrides |
| `assets/accenture-greater-than.svg` | The `>` chevron mark for CTAs and accents |

## Installation

### As a Hermes Skill (Recommended)

```bash
# Install from GitHub
hermes skills install Yash-Kavaiya/accenture-frontend-design-skill

# Or install locally
cp -r accenture-frontend-design ~/.hermes/skills/

# Load in session
/skill accenture-frontend-design
# or
hermes -s accenture-frontend-design
```

### Manual Usage

Copy the asset files into your project and reference the design tokens:

```css
/* Import tokens */
@import 'path/to/assets/tokens.css';

/* Or use Tailwind */
@import 'path/to/assets/tailwind-theme.js';
```

## Quick Start

### React + Tailwind (Single-file artifact)

```tsx
// Uses assets/tailwind-theme.js and references/react-tailwind.md
import { greaterThan } from './assets/accenture-greater-than.svg';

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="max-w-4xl text-left">
        <p className="acn-eyebrow uppercase tracking-wider text-accent-purple mb-4">
          Accenture Song
        </p>
        <h1 className="acn-display-1 font-bold tracking-tight mb-6">
          Let there be <span className="text-accent-purple">change</span>
        </h1>
        <button className="acn-btn-primary inline-flex items-center gap-2">
          Get Started
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
```

### Vanilla HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="assets/tokens.css">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    :root { --acn-font-sans: "Graphik", "GraphikWeb", "Inter", system-ui, sans-serif; }
  </style>
</head>
<body class="acn-body">
  <section class="acn-section">
    <p class="acn-eyebrow">Accenture Technology</p>
    <h1 class="acn-display-1">Build the future with <span class="acn-gradient-text">AI</span></h1>
    <a href="#" class="acn-btn-primary">
      Explore Capabilities
      <svg class="acn-chevron" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  </section>
</body>
</html>
```

## Design Token Reference

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--acn-purple` | `#A100FF` | Primary accent, CTAs, keywords |
| `--acn-purple-deep` | `#7000B0` | Small purple text on white |
| `--acn-magenta` | `#FF50A0` | Gradient end, hover states |
| `--acn-violet` | `#6B00E8` | Gradient start (deep) |
| `--acn-black` | `#000000` | Primary backgrounds |
| `--acn-white` | `#FFFFFF` | Primary text on black |
| `--acn-grey-100` | `#F5F5F5` | Light backgrounds |
| `--acn-grey-900` | `#1A1A1A` | Dark surfaces |

### Typography

| Token | Value |
|-------|-------|
| `--acn-font-sans` | `"Graphik", "GraphikWeb", "Inter", system-ui, sans-serif` |
| `--acn-display-1` | `clamp(3rem, 8vw, 6rem) / 1.1, weight 700, tracking -0.02em` |
| `--acn-display-2` | `clamp(2.25rem, 5vw, 4rem) / 1.15, weight 700, tracking -0.01em` |
| `--acn-headline` | `clamp(1.5rem, 3vw, 2.5rem) / 1.2, weight 600` |
| `--acn-body` | `1rem / 1.6, weight 400` |
| `--acn-eyebrow` | `0.75rem / 1, weight 600, uppercase, tracking 0.15em` |

### Shape & Motion

| Token | Value |
|-------|-------|
| `--acn-radius` | `4px` (0–4px for primary elements) |
| `--acn-transition-fast` | `150ms cubic-bezier(0.4, 0, 0.2, 1)` |
| `--acn-transition-base` | `250ms cubic-bezier(0.4, 0, 0.2, 1)` |
| `--acn-gradient-primary` | `linear-gradient(135deg, #A100FF 0%, #FF50A0 100%)` |
| `--acn-gradient-deep` | `linear-gradient(135deg, #6B00E8 0%, #A100FF 100%)` |

## Quality Checklist

Before shipping, verify:

- [ ] Purple is an accent, not the canvas (black/white structure dominates)
- [ ] Display headlines are bold (600–700), tightly tracked, large
- [ ] Eyebrow labels are UPPERCASE, letter-spaced, above key headlines
- [ ] Buttons/cards are rectangular (0–4px radius), not pills
- [ ] `>` chevron appears purposefully (CTA, eyebrow, or hero — 1-2 per screen)
- [ ] One gradient moment anchors the page (not on every element)
- [ ] Motion is confident (chevron slide, underline wipe, scroll-reveal)
- [ ] 8px spacing grid, generous section padding, left-aligned hierarchy
- [ ] Contrast passes AA (purple `#A100FF` on black/white; `#7000B0` for small text)

## Fonts

Accenture's corporate typeface is **Graphik** (Christian Schwartz / Commercial Type) — a licensed/paid font. This skill defaults to **Inter** (free, Google Fonts, closest widely-available neo-grotesque).

```css
--acn-font-sans: "Graphik", "GraphikWeb", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif;
```

In licensed environments, Graphik will be used automatically when available.

## The Greater-Than (`>`) Mark

The forward-pointing mark over the "t" in the Accenture logo is the brand's signature device — "always moving forward, always better."

**Do not reproduce the Accenture logo or wordmark** (trademark). **Do** use the *idea* of the mark as an interface motif:

- CTA chevron that translates ~4px right on hover
- Eyebrow tick before UPPERCASE kicker
- Oversized hero graphic or section divider in purple or gradient

Keep it bold (3px stroke), sharp, and purposeful — one or two uses per screen.

## License

MIT — Free to use, modify, and distribute.

## Contributing

PRs welcome for:
- Additional framework references (Next.js, Vue, Svelte, etc.)
- Component libraries (MUI, Radix, etc.)
- Email template variants
- Motion/animation enhancements

## Links

- **GitHub**: https://github.com/Yash-Kavaiya/accenture-frontend-design-skill
- **Hermes Skills Hub**: (install via `hermes skills install`)
- **Accenture Brand Guidelines**: (internal reference)