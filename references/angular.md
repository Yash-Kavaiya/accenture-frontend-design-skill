# Angular + Angular Material

Use this path for an Angular app or when the user names Angular. Angular Material implements a token-based design system you can re-seed with Accenture Purple; the work is theming it to be **purple, sharp, and bold** rather than default Material rounded.

As of mid-2026 the current stable is **Angular 21** (22 at RC; the APIs below still apply). Modern defaults: standalone components, signals, the new control flow (`@if`, `@for`).

## Scaffold note (no live artifact)

A full Angular app needs a build toolchain, so you can't render it as a live single-file artifact. Two modes:
- **The user has/wants a real project:** give them the files (component + theme SCSS + commands to run). The normal case.
- **The user wants something they can see immediately:** say Angular needs a local build, then either deliver the project files *or* offer the same design via the vanilla path (`references/vanilla.md`) for an instant preview. Don't fake an Angular app as static HTML.

## Setup

```bash
ng new my-app
cd my-app
ng add @angular/material   # choose "Custom" theme when prompted
```

## Theme — seed `mat.theme()` with Accenture Purple

Modern Angular Material uses the `mat.theme()` mixin, which emits `--mat-sys-*` design-token CSS variables. Use the bundled `assets/angular-theme.scss` as the starting point. Generate a custom palette seeded from `#A100FF` so the brand color is exact (the prebuilt `$violet`/`$magenta` palettes are close but not the brand seed):

```bash
ng generate @angular/material:theme-color
# seed: #A100FF  ·  tertiary/secondary: #FF50A0 (magenta)  ·  emits _theme-colors.scss
```

```scss
@use '@angular/material' as mat;
@use './theme-colors' as acn;

html {
  color-scheme: light dark;                 // automatic light/dark
  @include mat.theme((
    color: (
      theme-type: color-scheme,
      primary: acn.$primary-palette,         // seeded from #A100FF
      tertiary: acn.$tertiary-palette,       // magenta accent
    ),
    typography: Inter,                        // Graphik if licensed/registered
    density: 0,
  ));

  /* The Accenture corrections: sharp corners + bold display.
     Material defaults to rounded pills — override the shape tokens. */
  @include mat.theme-overrides((
    corner-full: 0px,                         // kill the pill on filled buttons/FAB
    corner-large: 4px,
    corner-medium: 4px,
    corner-small: 2px,
  ));
}
```

`mat.theme()` generates the full `--mat-sys-*` token set (`--mat-sys-primary`, `--mat-sys-surface`, `--mat-sys-on-surface`, …), which line up with the roles in `references/design-tokens.md`. Style your own components with those tokens so they match:

```scss
.acn-panel {
  background: var(--mat-sys-surface);
  color: var(--mat-sys-on-surface);
  border: 1px solid var(--mat-sys-outline-variant);
  border-radius: 4px;                          // sharp, not rounded
  font: var(--mat-sys-body-large);
}
```

## Components — use real Material components, re-skinned

Material components bring focus rings, ripple, and a11y for free; the theme above makes them purple and sharp. Override per-component tokens (never internal `.mat-*` selectors):

```scss
@include mat.button-overrides((
  filled-container-shape: 0px,                 // rectangular primary button
  filled-container-color: var(--mat-sys-primary),
));
@include mat.card-overrides(( elevated-container-shape: 0px ));
```

```ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home', standalone: true,
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar class="acn-bar"><span>Acme</span></mat-toolbar>
    <main>
      <p class="eyebrow">Strategy &amp; Consulting</p>
      <h1 class="display">Reinvent what your business can be.</h1>
      <button mat-flat-button color="primary">
        Explore services
        <mat-icon iconPositionEnd>chevron_right</mat-icon>   <!-- the > affordance -->
      </button>
      <button mat-stroked-button>Read the report</button>

      <mat-card appearance="outlined">
        <mat-card-title>Cloud transformation</mat-card-title>
        <mat-card-content>Real content here.</mat-card-content>
      </mat-card>
    </main>
  `,
  styles: [`
    .eyebrow{font:600 12px/1.2 Inter;letter-spacing:.12em;text-transform:uppercase;color:var(--mat-sys-primary)}
    .display{font:700 44px/1.1 Inter;letter-spacing:-.015em;margin:.3em 0 0}
    .mat-mdc-unelevated-button .mat-icon{transition:transform .15s cubic-bezier(.16,1,.3,1)}
    .mat-mdc-unelevated-button:hover .mat-icon{transform:translateX(4px)}  /* chevron slide */
  `],
})
export class HomeComponent {}
```

Button mapping: `mat-flat-button color="primary"` = filled purple (now rectangular), `mat-stroked-button` = outlined, `mat-button` = text. Add `chevron_right` with `iconPositionEnd` and the hover-translate for the signature forward motion.

## Icons & fonts
`ng add @angular/material` includes Material Symbols (use `<mat-icon>chevron_right</mat-icon>`). Load Inter via `<link>` in `index.html` or `@fontsource/inter`; register Graphik if the project has a license.

## Checklist before delivering an Angular UI
- Theme seeded from `#A100FF` (custom palette), tertiary = magenta `#FF50A0`.
- Shape tokens overridden to sharp (`corner-full: 0`, small radii) — no pills.
- Real Material components, restyled via `--mat-sys-*` / `*-overrides`, not internal selectors.
- Bold display type (700, tracking-tight) + uppercase eyebrow; sentence-case buttons.
- Chevron `>` on the primary CTA with hover-slide; one gradient moment.
- Light + dark via `color-scheme`; `npm install` / `ng serve` commands included for a project.
