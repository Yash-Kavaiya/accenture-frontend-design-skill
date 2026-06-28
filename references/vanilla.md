# Vanilla HTML / CSS / JS

Use this path for a framework-free page, a single self-contained file, an email or static landing page, or an instantly-previewable artifact with no build step. This is the most portable path and the best choice when no framework is requested — it renders immediately.

The whole design system comes from CSS custom properties. Drop in `assets/tokens.css` (the Accenture tokens, light + dark) and build with the variables. You're hand-rolling components, so the signature-detail discipline from `references/design-tokens.md` matters most here — the Accenture look doesn't come for free the way it does with a component library.

## Skeleton

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    /* paste assets/tokens.css here, then component styles */
    *{box-sizing:border-box} body{margin:0;background:var(--acn-background);color:var(--acn-text);font:var(--acn-body-md)}
  </style>
</head>
<body>
  <!-- UI -->
</body>
</html>
```

## Building authentic Accenture components by hand

Get these right and the page reads as genuinely Accenture: sharp, bold, purple-accented, with the `>`.

### Primary button (rectangular + chevron slide)

```css
.btn {
  position:relative; display:inline-flex; align-items:center; gap:10px;
  height:52px; padding:0 28px; border:none; cursor:pointer;
  border-radius: var(--acn-radius-none);              /* sharp — NOT a pill */
  font: var(--acn-label-lg); letter-spacing:.02em;
  transition: background var(--acn-dur-fast) var(--acn-ease-standard),
              box-shadow var(--acn-dur-base) var(--acn-ease-standard);
}
.btn .chev { width:18px; height:18px; transition: transform var(--acn-dur-fast) var(--acn-ease-out); }
.btn:hover .chev { transform: translateX(4px); }     /* the signature forward motion */

.btn-primary { background: var(--acn-primary); color: var(--acn-on-primary); }
.btn-primary:hover { background: var(--acn-primary-hover); box-shadow: var(--acn-shadow-purple); }

.btn-ink { background: var(--acn-black); color:#fff; }
.btn-ink:hover { background: var(--acn-grey-800); }

.btn-ghost { background:transparent; color: var(--acn-primary-text);
  box-shadow: inset 0 0 0 1.5px currentColor; }       /* crisp outline, no fuzzy border */
.btn-ghost:hover { background: var(--acn-purple-50); }
```

```html
<button class="btn btn-primary">Explore services
  <svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4 L17 12 L7 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square"/></svg>
</button>
```

### Text-link CTA (very Accenture — label + `>` + underline wipe)

```css
.link-cta { display:inline-flex; align-items:center; gap:8px; position:relative;
  font:var(--acn-label-lg); color:var(--acn-primary-text); text-decoration:none; padding-bottom:2px; }
.link-cta::after { content:""; position:absolute; left:0; bottom:0; height:2px; width:100%;
  background:currentColor; transform:scaleX(0); transform-origin:left;
  transition:transform var(--acn-dur-base) var(--acn-ease-out); }
.link-cta:hover::after { transform:scaleX(1); }
.link-cta .chev { width:16px; height:16px; transition:transform var(--acn-dur-fast) var(--acn-ease-out); }
.link-cta:hover .chev { transform:translateX(3px); }
```

### Eyebrow + headline (the signature opener)

```css
.eyebrow { display:inline-flex; align-items:center; gap:8px;
  font:var(--acn-eyebrow); letter-spacing:.12em; text-transform:uppercase; color:var(--acn-primary-text); }
.eyebrow::before { content:""; width:16px; height:2px; background:currentColor; }
.h-display { font:var(--acn-display-lg); letter-spacing:-.015em; margin:.4em 0 0; max-width:18ch; }
```

```html
<p class="eyebrow">Strategy &amp; Consulting</p>
<h1 class="h-display">Reinvent what your business can be.</h1>
```

### Card (sharp, bordered; one featured card can use the gradient)

```css
.card { background:var(--acn-surface); color:var(--acn-text);
  border:1px solid var(--acn-border); border-radius:var(--acn-radius-sm); padding:28px; }
.card:hover { border-color:var(--acn-purple-300); }
.card-feature { background:var(--acn-gradient-core); color:#fff; border:none; }  /* the one gradient moment */
```

### Hero with a gradient or ink band

```css
.hero { padding: var(--acn-space-10) var(--acn-space-6); background: var(--acn-black); color:#fff; }
.hero--gradient { background: var(--acn-gradient-spectrum); }
.hero h1 { font:var(--acn-display-2xl); letter-spacing:-.02em; max-width:16ch; }
/* one-word purple punch using the gradient as text fill */
.accent-text { background:var(--acn-gradient-core); -webkit-background-clip:text; background-clip:text; color:transparent; }
```

### Oversized ">" graphic (section divider / hero motif)

```html
<svg width="160" height="160" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M7 4 L17 12 L7 20" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="square"/>
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#A100FF"/><stop offset="1" stop-color="#FF50A0"/></linearGradient></defs>
</svg>
```

## Light / dark

`assets/tokens.css` ships both, switched by `prefers-color-scheme`. For a manual toggle, set `data-theme="dark"` (or `"light"`) on `<html>`. Black-background sections are on-brand in *both* modes — a black band on a white page is a deliberate Accenture move, not just dark mode.

## Checklist before delivering a vanilla UI
- `assets/tokens.css` variables in use; no raw hex sprinkled in component CSS.
- Rectangular primary buttons (0–4px), each with the `>` chevron that slides on hover.
- An eyebrow kicker above the main headline; bold (600–700) display type.
- Exactly one gradient moment (hero, feature card, or accent text).
- Black/white/grey structure with purple as the accent — not a purple-flooded page.
- Inter loaded with the Graphik-first fallback chain.
- 8px grid, generous section padding, ≥44px touch targets, light + dark present.
