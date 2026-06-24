# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Monorepo for [binoy.io](https://www.binoy.io), managed with **pnpm workspaces** + **Turborepo**. Three apps and two shared packages:

- `apps/web` — Main SvelteKit site (Svelte 5, Tailwind v4), deployed to Vercel. Content sourced from Sanity.
- `apps/sanity` — Sanity Studio (CMS). Owns the content schemas. React-based.
- `apps/calculator-utils` — Standalone SvelteKit app (`name: calculators`) of financial calculators (discount, dividend), with a service worker.
- `packages/ui` (`@binoy/ui`) — Shared Svelte components, consumed source-first (no build step; `index.ts` re-exports).
- `packages/config-eslint` (`@binoy/eslint-config`) — Shared flat ESLint config consumed by every workspace.

## Commands

Run from the repo root; Turbo fans tasks out across workspaces.

```bash
pnpm dev      # turbo run dev   — all apps in parallel (persistent)
pnpm build    # turbo run build
pnpm check    # turbo run check — svelte-check / typechecking
pnpm test     # turbo run test  — vitest
pnpm lint     # turbo run lint  — eslint (+ prettier --check in calculator-utils)
pnpm format   # prettier --write . across the whole repo
```

Scope to one workspace with a filter, e.g. `pnpm --filter web dev` or `turbo run build --filter=web`.

Tests use **Vitest**; `apps/web` also has Playwright integration tests via `pnpm --filter web test:integration`. Run a single test file with `pnpm --filter calculators exec vitest run src/lib/components/__tests__/ButtonInput.test.ts` (note `apps/calculator-utils` is named `calculators`).

A Husky pre-commit hook runs `lint-staged`, which formats staged files with Prettier.

## Content pipeline (Sanity → web) — the key cross-app coupling

`apps/sanity` is the source of truth for content types. `apps/web` reads them with typed GROQ queries, and the types are **generated**, not hand-written:

1. Schemas live in `apps/sanity/src/schemas/` (`blog`, `project`, `contact`, etc., wired in `index.ts`).
2. `pnpm sanity:typegen` (root) runs the sanity app's `extract` then `typegen`:
   - `extract` writes the schema to `apps/web/src/lib/groq/sanity-schema.json`.
   - `typegen` generates `apps/web/src/lib/groq/sanity.types.ts` from that schema + the GROQ query files.
3. GROQ queries live in `apps/web/src/lib/groq/*.ts` (e.g. `getBlogs.ts`). Each route's `+page.server.ts` calls `sanityClient.fetch<GetXResult>(query)` using the generated result types.

**After changing any Sanity schema, run `pnpm sanity:typegen`** so the web app's types stay in sync. Deploy the studio with `pnpm sanity:deploy` (requires `SANITY_AUTH_TOKEN`).

The Sanity client is configured in `apps/web/src/lib/sanityClient.ts`, reading `PUBLIC_SANITY_PROJECT_ID` / `PUBLIC_SANITY_DATASET` from env; it also exports `imageBuilder` for Sanity image URLs.

## Conventions

- **Svelte 5** throughout (runes). Tailwind v4 via `@tailwindcss/vite`.
- Data fetching is server-side: route data loads in `+page.server.ts` `load()`, rendered by `+page.svelte`.
- Sanity portable text is rendered through `apps/web/src/lib/blockContent/` components (`BlockContent.svelte` dispatches to `Code`, `Image`, `Link`, `ListItem`).
- Icons via `unplugin-icons` with `@iconify-json/*` sets.
- `sanity-schema.json` and `sanity.types.ts` are generated artifacts — edit the schemas and regenerate rather than editing these directly.
