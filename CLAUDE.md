# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Type-check with astro check
```

## Architecture

Astro 6 site with React islands and Tailwind CSS v4. Deployed to Vercel (framework preset: Astro, not Next.js).

**Routing:** File-based via `src/pages/`. Two routes exist:
- `/` — main portfolio page (`index.astro`)
- `/pubg/train/mortar` — interactive PUBG mortar training tool

**Layouts:** Single layout `src/layouts/BaseLayout.astro` wraps all pages. Global CSS lives in `src/app/globals.css`.

**Components:** All React (`.tsx`). Two categories:
- `src/components/sections/` — portfolio content sections (experience, projects, awards, etc.), composed directly in `index.astro`
- `src/components/pubg/` — mortar training tool (`MortarTraining.tsx`, `MapGrid.tsx`) with calculation helpers in `src/lib/pubgUtils.ts`
- `src/components/ui/` — shared UI primitives (`CollapsibleSection.tsx`)

**Hydration:** Interactive React components use `client:load` directive in Astro templates. Static components (no directive) render as server-only HTML.

**Path aliases:** `@/*` maps to `./src/*` (configured in `tsconfig.json`).

## Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Dark theme with base background `#0B1120`. Utility-first — styles are inline in components, not in separate CSS files.
