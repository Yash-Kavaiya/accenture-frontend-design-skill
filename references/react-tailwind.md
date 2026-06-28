# React + Tailwind CSS

Use this path for React/Next with Tailwind, or as the default for a single-file artifact — a React component with Tailwind classes renders live with no build step. This is usually the best mix of speed and polish for the Accenture look.

## Two ways to carry the tokens

**Tailwind v4 (CSS-first, current):** define the palette in a `@theme` block so utilities like `bg-acn-purple`, `text-ink`, `font-display` exist. See `assets/tailwind-theme.js` for both v4 and v3 forms.

```css
/* globals.css */
@import "tailwindcss";
@theme {
  --color-acn-purple: #A100FF;
  --color-acn-purple-hover: #8A00DB;
  --color-acn-purple-text: #7000B0;   /* purple text on white (AA) */
  --color-acn-magenta: #FF50A0;
  --color-ink: #000000;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F7F7F7;
  --color-line: #E2E2E2;
  --font-sans: "Graphik","GraphikWeb","Inter","Helvetica Neue",Arial,sans-serif;
  --font-display: "Graphik","GraphikWeb","Inter","Helvetica Neue",Arial,sans-serif;
  --radius-acn: 0px;                   /* sharp default */
}
```

**Tailwind v3 (`tailwind.config.js`):** use the `theme.extend` export in `assets/tailwind-theme.js`.

For a single-file artifact using the Play CDN, inline the config:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = { theme: { extend: {
  colors: { acn:{purple:'#A100FF',hover:'#8A00DB',text:'#7000B0',magenta:'#FF50A0'},
            ink:'#000', line:'#E2E2E2', surfacealt:'#F7F7F7' },
  fontFamily: { sans:['Graphik','Inter','Helvetica Neue','Arial','sans-serif'],
                display:['Graphik','Inter','Helvetica Neue','Arial','sans-serif'] },
  borderRadius: { acn:'0px' },
  backgroundImage: { 'acn-core':'linear-gradient(135deg,#A100FF,#FF50A0)',
                     'acn-spectrum':'linear-gradient(120deg,#2E5BFF,#A100FF 48%,#FF50A0)' },
}}};
</script>
```

Load Inter in `<head>` (see `references/design-tokens.md`).

## The discipline in Tailwind

Tailwind makes it easy to round and soften everything — resist it. The Accenture look needs **`rounded-none`** (or `rounded-sm`) on primary buttons and feature cards, **bold tracking-tight headlines**, and purple used as an accent.

### Primary button (rectangular + chevron slide)

```tsx
function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="group inline-flex items-center gap-2.5 h-13 px-7 rounded-none
                       bg-acn-purple text-white font-semibold text-sm tracking-wide
                       transition-colors hover:bg-acn-hover
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-acn-purple focus-visible:ring-offset-2">
      {children}
      <svg viewBox="0 0 24 24" className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-1" aria-hidden>
        <path d="M7 4 L17 12 L7 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
      </svg>
    </button>
  );
}
```

(`h-13` = 52px; add `13: '3.25rem'` to `theme.extend.height`, or use `h-[52px]`.)

### Eyebrow + headline

```tsx
<p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-acn-text">
  <span className="w-4 h-0.5 bg-current" /> Strategy &amp; Consulting
</p>
<h1 className="mt-3 font-display font-bold text-5xl md:text-6xl tracking-[-0.02em] leading-[1.05] max-w-[16ch]">
  Reinvent what your business can be.
</h1>
```

### Card (sharp + bordered; one gradient feature)

```tsx
<div className="rounded-none border border-line p-7 transition-colors hover:border-acn-purple/40">
  <h3 className="font-display font-semibold text-xl">Cloud transformation</h3>
  <p className="mt-2 text-zinc-600">Real content here.</p>
</div>

{/* the one gradient moment */}
<div className="rounded-none p-7 text-white bg-acn-core">
  <h3 className="font-display font-semibold text-xl">Featured outcome</h3>
</div>
```

### Hero (ink band + gradient text punch)

```tsx
<section className="bg-black text-white px-6 py-24 md:py-32">
  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-acn-magenta">Let there be change</p>
  <h1 className="mt-4 font-display font-bold text-6xl md:text-8xl tracking-[-0.02em] leading-[1.02] max-w-[16ch]">
    Build your <span className="bg-acn-core bg-clip-text text-transparent">digital core</span>.
  </h1>
</section>
```

## Common Tailwind tells to fix
- `rounded-lg`/`rounded-xl`/`rounded-full` on primary buttons and feature cards → use `rounded-none`/`rounded-sm`.
- `font-normal`/`font-medium` on big headlines → `font-bold` (700) with `tracking-tight`/`tracking-[-0.02em]`.
- Purple backgrounds on whole sections → keep sections black/white/grey, purple on the action.
- Default `font-sans` (system) on display → set `font-display`.
- Soft drop-shadows on every card → prefer `border border-line`; reserve `shadow-[0_12px_40px_rgba(161,0,255,0.28)]` for one featured CTA/card.

## Checklist before delivering a React + Tailwind UI
- Palette wired via `@theme` / config; `acn-purple` used as accent, not canvas.
- `rounded-none`/`rounded-sm` on primary actions; chevron that slides on `group-hover`.
- `font-display` bold tracking-tight headlines; uppercase tracked eyebrow.
- One gradient moment (`bg-acn-core`/`bg-acn-spectrum` or `bg-clip-text`).
- Inter loaded with Graphik-first stack; focus-visible rings on interactive elements.
- Black/white/grey structure; light + dark (`dark:` variants or `prefers-color-scheme`).
