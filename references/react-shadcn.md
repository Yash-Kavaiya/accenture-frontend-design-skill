# React + shadcn/ui (and MUI)

Use this path when the user wants a themed component library in React: **shadcn/ui** (the common modern choice — Radix + Tailwind, you own the component code) or **MUI**. The goal is the same: re-skin the kit so it reads as Accenture — purple accent, **sharp corners**, bold type — not its default rounded look.

## shadcn/ui (recommended)

shadcn components are styled by CSS variables on `:root`/`.dark`. Drop in `assets/shadcn-theme.css`, which maps Accenture into shadcn's token names. Key moves:

```css
/* assets/shadcn-theme.css — abridged; full file in assets/ */
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 277 100% 50%;           /* #A100FF */
  --primary-foreground: 0 0% 100%;
  --ring: 277 100% 50%;
  --border: 0 0% 89%;
  --radius: 0rem;                    /* sharp — the Accenture signature */
}
.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 95%;
  --primary: 277 100% 50%;
  --border: 0 0% 18%;
}
```

Two corrections that make shadcn read as Accenture instead of "default shadcn":

- **`--radius: 0rem`** (or `0.125rem`). shadcn defaults to `0.5rem` rounded; Accenture is angular. This single change reshapes every button, card, input, and dialog.
- **Bold display type.** shadcn leans on medium weights. Set headings to `font-bold tracking-tight` and load Inter as `--font-sans` / a `font-display`.

Then use components normally — they inherit the theme:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react"; // or the inline > chevron

<Button className="gap-2 group">
  Explore services
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</Button>

<Card>
  <CardHeader><CardTitle className="font-bold tracking-tight text-xl">Cloud transformation</CardTitle></CardHeader>
  <CardContent className="text-muted-foreground">Real content here.</CardContent>
</Card>
```

Add an Accenture eyebrow and the gradient as plain Tailwind (see `references/react-tailwind.md`) on top of shadcn — the kit covers controls; you supply the brand layout, eyebrow, and the one gradient moment.

The default shadcn `Button` already animates nothing on hover beyond color — add the chevron-slide via `group`/`group-hover:translate-x-1` as above to get the signature forward motion. Prefer the `default` (filled purple) and `outline` variants; avoid fully-rounded variants.

## MUI

If the user is on MUI, theme it with `createTheme` — see `assets/shadcn-theme.css` companion notes, or set it inline:

```ts
import { createTheme } from "@mui/material/styles";
export const accentureTheme = createTheme({
  cssVariables: true,
  colorSchemes: { light: true, dark: true },
  palette: {
    primary: { main: "#A100FF", dark: "#8A00DB", contrastText: "#fff" },
    secondary: { main: "#FF50A0" },
    error: { main: "#E5484D" }, success: { main: "#1FA463" },
  },
  shape: { borderRadius: 0 },                 // sharp — the key override
  typography: {
    fontFamily: 'Graphik, Inter, "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.015em" },
    button: { fontWeight: 600, letterSpacing: "0.02em", textTransform: "none" }, // NOT all-caps
  },
  components: {
    MuiButton: { styleOverrides: { root: { borderRadius: 0, paddingInline: 28, height: 52 } } },
    MuiCard:   { defaultProps: { variant: "outlined" }, styleOverrides: { root: { borderRadius: 0 } } },
  },
});
```

Two MUI corrections that matter: **`borderRadius: 0`** (MUI defaults rounded; Accenture is sharp) and **`textTransform: "none"`** (MUI buttons default to UPPERCASE; Accenture buttons are sentence case).

## Checklist before delivering a shadcn/MUI UI
- Radius set to `0`/near-`0` globally (`--radius: 0rem` / `shape.borderRadius: 0`).
- `--primary` / `palette.primary` = `#A100FF`; used as accent, not full sections.
- Headings `font-bold tracking-tight`; buttons sentence case (`textTransform: none`).
- Chevron-slide added to the primary CTA; eyebrow kicker present.
- One gradient moment layered in via Tailwind/`sx`; Inter loaded with Graphik-first stack.
- Light + dark via `.dark` / `colorSchemes`; black/white/grey structure.
