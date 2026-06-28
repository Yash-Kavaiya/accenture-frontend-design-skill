---
name: accenture-frontend-design
description: Build production-grade frontend interfaces in Accenture's brand design language — the signature Accenture Purple (#A100FF) on black-and-white, bold Graphik-style typography, sharp angular shapes, the ">" greater-than mark, and purple→magenta gradients. Use this skill whenever the user asks for a UI, web page, component, dashboard, landing page, app screen, pitch microsite, or admin panel and wants it to look like Accenture, "on-brand for Accenture", an Accenture-style consulting/enterprise site, Accenture Song / Strategy & Consulting / Technology / Operations / Industry X, the "Let there be change" look, or asks for "Accenture purple", "Accenture brand", "Accenture theme", or a confident enterprise-consulting interface. Trigger this even when the user names a framework (Angular, React, Tailwind, shadcn) but clearly wants the Accenture look, and even if they only describe a bold, purple-accented, high-contrast corporate interface with big headlines.
---

# Accenture Frontend Design

This skill produces frontend interfaces that look and feel like they belong to Accenture: anchored by **Accenture Purple `#A100FF`** against **black and white**, set in a **bold neo-grotesque** (Graphik, with Inter as the practical default), built on **sharp, angular shapes**, and punctuated by the **">" greater-than mark** and **purple→magenta gradients**. The output should be the kind of UI an Accenture brand or design lead would recognize as on-brand — confident, editorial, and high-contrast — not a generic "purple buttons on white" approximation.

The user provides a UI to build: a component, page, dashboard, app, or campaign microsite. They may name a framework, an Accenture business (Song, Technology, Strategy & Consulting), or just say "make it look like Accenture." Your job is to pick the right stack, apply the design system faithfully, and execute the details that separate authentic Accenture from a vaguely-purple mockup.

## The core tension to manage

Purple is easy to splash on a page; the Accenture *system* is what makes a UI read as genuinely on-brand. Lazy "Accenture" looks like AI slop: one flat purple button, soft rounded corners everywhere, a thin generic font, no black, no gradient, no `>`. **Authentic Accenture is bold, angular, and editorial, and it lives in the details.** What makes a UI read as genuinely Accenture:

- **Purple as a confident accent over a black-and-white spine.** `#A100FF` is the brand signature, but it works *because* it sits against disciplined black, white, and grey — not as a field of purple. Purple goes on the CTA, the keyword, the gradient, the one hero moment. Black sections and white space do the structural work.
- **Bold headlines, not light ones.** Accenture display type is heavy (600–700 weight), tightly tracked, and large. This is the opposite of an airy, thin hero. Pair big bold headlines with calm regular-weight body. Over-light headers are a dead giveaway of fake Accenture.
- **Sharp, angular shapes.** Accenture's geometry is rectangular and crisp. Primary buttons are **rectangles, not pills** (0–4px radius). Rounded-pill everything reads as Material or Bootstrap, not Accenture.
- **The ">" greater-than mark.** The forward-pointing mark is Accenture's most recognizable device. Use it as the CTA affordance (a chevron that slides right on hover), an eyebrow accent, or a hero graphic — deliberately, not scattered.
- **The signature gradient.** Purple→magenta (`#A100FF` → `#FF50A0`) and deep-violet→purple gradients are unmistakably Accenture. One gradient moment — a hero, a band, a key card — anchors the page.
- **Eyebrow labels + generous editorial spacing.** Small UPPERCASE letter-spaced kickers above headlines, big section padding, strong left-aligned hierarchy. Accenture pages feel like a confident editorial layout, not a dense dashboard (unless it *is* a dashboard, in which case keep the restraint and let purple mark just the active/primary state).

Commit to the system fully. A faithful Accenture interface is bold and high-contrast, never timid and never a wall of purple.

## Step 1 — Choose the stack

Pick based on what the user said. When unspecified, **default to React + Tailwind** — it renders in a single-file artifact with no build step and is the most common modern web stack.

| Signal from the user | Stack | Reference |
|---|---|---|
| "React" + "Tailwind", or nothing specified | React + Tailwind CSS | `references/react-tailwind.md` |
| "shadcn", "shadcn/ui", "MUI", a themed component kit, or a React app with a component library | React + shadcn/ui (or MUI) | `references/react-shadcn.md` |
| "plain HTML", "no framework", "vanilla", a single static page, or an email | HTML + CSS custom properties | `references/vanilla.md` |
| "Angular", or an Angular codebase | Angular + Angular Material | `references/angular.md` |

Read the chosen reference file before writing code — it has the current setup, the theming mechanism, and copy-paste-ready patterns. **Always read `references/design-tokens.md` regardless of stack** — it defines the palette, type scale, shape, gradient, motion, and spacing that every path shares.

If you're producing a self-contained artifact and the user didn't demand a framework, prefer the **vanilla** path or a **single-file React + Tailwind** path — they render without a build step. Full Angular projects need a toolchain, so scaffold them as a project the user runs locally, and say so.

## Step 2 — Apply the design system

1. Read `references/design-tokens.md` for the shared palette, type scale, shape, gradients, and motion.
2. Read the stack reference for the theming mechanism.
3. Use the bundled assets as your starting point rather than re-deriving tokens:
   - `assets/tokens.css` — the full Accenture token set as CSS custom properties (light + dark), ready for the vanilla path or any framework that reads CSS variables.
   - `assets/tailwind-theme.js` — a Tailwind config (`theme.extend`) / v4 `@theme` block carrying the palette, fonts, radius, and shadows.
   - `assets/shadcn-theme.css` — the shadcn/ui CSS-variable mapping (`--primary`, `--background`, …) seeded with Accenture Purple.
   - `assets/angular-theme.scss` — a `mat.theme()` configuration seeded with Accenture Purple plus the sharp-corner and bold-type overrides.
   - `assets/accenture-greater-than.svg` — the ">" chevron mark for CTAs and accents.
4. Build the actual interface. Wire up real interactions, real state, real content. No lorem-ipsum-and-grey-boxes mockups unless the user explicitly wants a wireframe.

## Step 3 — Get the signature details right

Before finishing, check the interface against the things that make it *Accenture*. Exact values are in `references/design-tokens.md`; the headline checklist:

- **Color discipline:** purple is the accent, not the canvas. A black-and-white/grey structure with deliberate purple on CTAs, the active state, the keyword, and one gradient moment. Verify text/background pairs meet contrast (purple `#A100FF` passes AA for white text; use the deeper `#7000B0` for small purple text on white).
- **Type:** bold display headlines (600–700, tight tracking), an UPPERCASE letter-spaced eyebrow above key headlines, calm regular-weight body. Real weight contrast.
- **Shape:** rectangular buttons and cards (0–4px radius). No pills for primary actions. Crisp 1px borders or flat fills, not fuzzy rounded everything.
- **The `>` mark:** present and purposeful — as the CTA chevron that animates right on hover, an eyebrow tick, or a hero graphic.
- **One gradient moment:** a purple→magenta hero, band, or key surface — not gradients on every element.
- **Motion:** confident, not bouncy — a chevron slide on hover, an underline wipe, a scroll-reveal on a hero. At least one well-considered transition.
- **Editorial spacing:** 8px grid, large section padding, strong left-aligned hierarchy, calm whitespace.

## Fonts

Accenture's corporate typeface is **Graphik** (Christian Schwartz / Commercial Type), a neo-grotesque sans used across its digital brand. Graphik is a **licensed/paid** font and does not load from Google Fonts, so **default to Inter** — it's free, loads from Google Fonts, and is the closest widely-available neo-grotesque to Graphik's proportions. Put `Graphik` first in the stack so licensed environments use it, then fall back to Inter and the system neo-grotesques:

```css
--acn-font-sans: "Graphik", "GraphikWeb", "Inter", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif;
```

Avoid falling back to a humanist or geometric font (no Georgia, no Poppins, no Comic Sans) — those break the crisp neo-grotesque feel. Exact import strings and the type scale are in `references/design-tokens.md`.

## The greater-than (">") mark

The forward-pointing mark over the "t" in the Accenture logo is the brand's signature device — "always moving forward, always better." Do not reproduce the Accenture logo or wordmark (it's a trademark), but **do** use the *idea* of the mark as an interface motif:

- As the affordance on CTAs: a bold chevron (`assets/accenture-greater-than.svg`) after the label that translates ~4px right on hover.
- As an eyebrow tick before an UPPERCASE kicker.
- As an oversized hero graphic or section divider in purple or a purple gradient.

Keep it bold (3px stroke), sharp, and purple or ink. One or two purposeful uses per screen — not a confetti of chevrons.

## On staying current

Framework versions move fast (Angular ships every 6 months; Tailwind v4 changed theming; shadcn tracks Tailwind). The reference files capture the current APIs, but if the user is on a different version or something doesn't compile, prefer the framework's own current docs over hard-coded version numbers here. The *design system* (palette, type, shape, the look) is stable; the *theming API* that delivers it is what drifts.

## Quality bar

This skill is about consistency with an established, confident brand — and consistency is not an excuse for blandness. Match implementation effort to the surface: a landing page or campaign microsite wants atmosphere, a memorable bold hero, and the gradient; an enterprise dashboard wants legible density with purple reserved for the primary/active state; a settings panel wants calm, sharp clarity. Execute the vision well and sweat the details. An Accenture brand lead should look at the result and see their own design language reflected back accurately — purple, black, bold, angular, forward.
