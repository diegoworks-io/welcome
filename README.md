# Diego Works - Portfolio (Astro)

Stage-driven personal site built with Astro.

## Overview

The homepage is a two-stage experience:

- Stage 1: cover/intro view.
- Stage 2: split layout with:
  - left column (name, role, socials, local time offset line)
  - right protected area (tabbed content: About, Education, Projects, Tech)

Background visuals are rendered in SVG layers with animated routing/network effects.

## Key Files

- `src/components/FluidName.astro` - main stage layout and protected-area content.
- `src/scripts/fluidName.js` - stage transitions, tab logic, project sub-tabs, local time display.
- `src/components/BlueprintBg.astro` - SVG background shell and styling.
- `src/scripts/blueprintBg.js` - animated network generation and stage-specific behavior.
- `src/layouts/Layout.astro` - page shell/layout.

## Scripts

- `npm run dev` - start local development server.
- `npm run build` - production build.
- `npm run preview` - preview built output.
- `npm run astro check` - Astro diagnostics/type checks.

## Development Notes

- Content in the protected area is intentionally no-scroll at page level.
- Visual language inside the protected area favors horizontal separators over boxed cards.
- Stage 1 transitions automatically into Stage 2 after a short delay.
