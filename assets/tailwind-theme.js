/* ============================================================================
   Accenture-brand Tailwind theme
   - Tailwind v3: spread `accentureTheme` into theme.extend (default export).
   - Tailwind v4: use the @theme CSS block at the bottom instead (CSS-first).
   Pairs with assets/tokens.css. Keep purple an accent; default radius is SHARP.
   ============================================================================ */

const accentureTheme = {
  colors: {
    acn: {
      purple: {
        50: '#F6ECFF', 100: '#EAD4FF', 200: '#D5A8FF', 300: '#BF7DFF', 400: '#B14DFF',
        500: '#A100FF', 600: '#8A00DB', 700: '#7000B0', 800: '#500080', 900: '#2E0049',
        DEFAULT: '#A100FF',
      },
      magenta: '#FF50A0',
      blue: '#2E5BFF',
      teal: '#00C2B8',
      green: '#2BD576',
      amber: '#FFB02E',
      coral: '#FF6A4D',
    },
    ink: '#000000',
    line: '#E2E2E2',
    'line-strong': '#CCCCCC',
    surfacealt: '#F7F7F7',
  },
  fontFamily: {
    sans: ['Graphik', 'GraphikWeb', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'system-ui', 'sans-serif'],
    display: ['Graphik', 'GraphikWeb', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    mono: ['Roboto Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
  },
  fontSize: {
    'display-2xl': ['4.5rem', { lineHeight: '1.05', fontWeight: '700', letterSpacing: '-0.02em' }],
    'display-xl':  ['3.5rem', { lineHeight: '1.08', fontWeight: '700', letterSpacing: '-0.02em' }],
    'display-lg':  ['2.75rem',{ lineHeight: '1.1',  fontWeight: '700', letterSpacing: '-0.015em' }],
    'headline-lg': ['2rem',   { lineHeight: '1.15', fontWeight: '600', letterSpacing: '-0.01em' }],
    'eyebrow':     ['0.75rem',{ lineHeight: '1.2',  fontWeight: '600', letterSpacing: '0.12em' }],
  },
  borderRadius: {
    // Sharp by default — the Accenture signature. Reach for `acn-sm` for a hint of softening.
    acn: '0px', 'acn-xs': '2px', 'acn-sm': '4px', 'acn-md': '8px', 'acn-lg': '12px',
  },
  height: { 13: '3.25rem' /* 52px — the primary button height */ },
  backgroundImage: {
    'acn-core': 'linear-gradient(135deg, #A100FF 0%, #FF50A0 100%)',
    'acn-violet': 'linear-gradient(135deg, #500080 0%, #A100FF 100%)',
    'acn-spectrum': 'linear-gradient(120deg, #2E5BFF 0%, #A100FF 48%, #FF50A0 100%)',
    'acn-ink': 'linear-gradient(135deg, #000000 0%, #2E0049 100%)',
  },
  boxShadow: {
    'acn-md': '0 4px 16px rgba(0,0,0,.10)',
    'acn-lg': '0 12px 40px rgba(0,0,0,.14)',
    'acn-purple': '0 12px 40px rgba(161,0,255,.28)',
  },
  transitionTimingFunction: {
    'acn-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
    'acn-bold': 'cubic-bezier(0.65, 0, 0.35, 1)',
  },
};

module.exports = { accentureTheme };
// Tailwind v3 usage:
//   const { accentureTheme } = require('./assets/tailwind-theme.js');
//   module.exports = { theme: { extend: accentureTheme } };

/* ----------------------------------------------------------------------------
   Tailwind v4 (CSS-first) — put this in your globals.css instead of the JS above:

@import "tailwindcss";
@theme {
  --color-acn-purple-500: #A100FF;
  --color-acn-purple-600: #8A00DB;
  --color-acn-purple-700: #7000B0;
  --color-acn-magenta: #FF50A0;
  --color-acn-blue: #2E5BFF;
  --color-ink: #000000;
  --color-line: #E2E2E2;
  --color-surfacealt: #F7F7F7;
  --font-sans: "Graphik","GraphikWeb","Inter","Helvetica Neue","Arial",sans-serif;
  --font-display: "Graphik","GraphikWeb","Inter","Helvetica Neue","Arial",sans-serif;
  --radius-acn: 0px;
}
---------------------------------------------------------------------------- */
