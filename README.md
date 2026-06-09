# Portfolio

Personal portfolio built with [Astro](https://astro.build), React, and Tailwind CSS.

## Prerequisites

- Node.js 18+ recommended
- npm

## Development

```bash
npm install
npm run dev
```

Open the local server shown in the terminal, usually:

- http://localhost:4321

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy to Vercel

This project is an **Astro** app, not Next.js.

In Vercel project settings, use:

- `Framework Preset`: `Astro`
- `Root Directory`: the folder that contains this `package.json`
- `Build Command`: `npm run build`
- `Output Directory`: `dist`

If Vercel still shows a Next.js error, the project is almost always pointing at the wrong root directory or has the wrong framework preset selected in the dashboard.

## Project Structure

- `src/pages` - routes
- `src/components` - reusable UI sections
- `src/layouts` - shared layout wrappers
- `public` - static assets

