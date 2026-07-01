# House Listing

Two-page Nuxt 4 app consuming the Funda Partner API. Server-side proxy keeps the API key off the client.

- `/` — paginated list of properties for sale
- `/detail/[id]` — single listing with photo previews, description, map, and a full-screen photo gallery

## Stack

- **Nuxt 4** — SSR, server routes
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **`@nuxt/image`** — `<NuxtImg>` for remote photos
- **ESLint (flat) + Prettier**
- **Vitest + `@nuxt/test-utils`**

## Prerequisites

- Node `>=20`
- pnpm `>=10`
- Partner API key (the assignment provides a temporary one)

## Setup

```bash
pnpm install
cp .env.example .env
# edit .env, set NUXT_API_KEY
pnpm dev
```

App runs at http://localhost:3000.

### Environment

| Var             | Required | Default                                             |
| --------------- | -------- | --------------------------------------------------- |
| `NUXT_BASE_URL` | no       | `https://partnerapi.funda.nl/feeds/Aanbod.svc/json` |
| `NUXT_API_KEY`  | **yes**  | —                                                   |

Both are server-only via `runtimeConfig`. The key never reaches the browser.

## Scripts

```bash
pnpm dev            # dev server on http://localhost:3000
pnpm build          # production build
pnpm preview        # preview production build locally
pnpm generate       # static site generation

pnpm lint           # eslint
pnpm lint:fix       # eslint --fix
pnpm format         # prettier --write
pnpm format:check   # prettier --check

pnpm test           # vitest run
pnpm test:watch     # vitest watch
```

## Project structure

```
app/
├─ app.vue
├─ error.vue                        # 404 + generic error page
├─ layouts/default.vue
├─ pages/
│  ├─ index.vue                     # /
│  └─ detail/[id].vue               # /detail/:id
├─ components/
│  ├─ common/                       # AppHeader, AppFooter, AppLoading, AppErrorMessage,
│  │                                # PriceTag, PhotoGrid, LocationMap
│  ├─ icons/                        # hand-rolled SVG icons
│  ├─ HouseCard.vue
│  ├─ HouseOverview.vue
│  ├─ HouseDescription.vue
│  ├─ ListingPagination.vue
│  └─ PhotoGallary.vue              # full-screen gallery (teleport)
├─ composables/
│  ├─ useListingPagination.ts
│  └─ useMedia.ts
├─ utils/                           # promoImages, urls (auto-imported)
└─ assets/css/main.css              # Tailwind entry + theme tokens

server/
├─ api/
│  ├─ listings.get.ts               # GET /api/listings
│  └─ listings/[id].get.ts          # GET /api/listings/:id
└─ utils/
   ├─ transformers.ts               # upstream → client shape
   └─ upstreamFetch.ts              # 404 / 502 error mapping

shared/types/
├─ upstream.ts                      # raw Funda payload types
├─ api.ts                           # client-facing types (Pick<> of upstream)
└─ shared.ts                        # primitives (Price, Media, Paging, ...)

test/                               # Vitest specs (components, composables, utils)
```

## How it works

- Client calls `/api/*`. Handlers read `apiKey` from `runtimeConfig` server-side, build the upstream URL, forward.
- Both proxy handlers use `defineCachedEventHandler` — list `maxAge: 60` with SWR, detail `maxAge: 3600` with SWR. Reduces upstream load and mitigates request stampedes.
- Types split raw upstream (`shared/types/upstream.ts`) from client-facing (`shared/types/api.ts`). The transformer projects only what the UI needs — smaller payload, one place to update on vendor drift.
- Pagination is URL-driven (`?page=N`) via `useListingPagination`, so pages are shareable and SSR-friendly.

## Decisions

- **SSR (Nuxt 4), not SPA.** First paint carries content, meta tags resolve server-side, crawlers get real HTML.
- **Server proxy for the API key.** The Partner key sits in `runtimeConfig` and is only read inside `server/api/*`. No `runtimeConfig.public` block, no route that echoes it.
- **Two pages exactly.** List + detail as the assignment calls out. No landing page, no separate search route — filters would attach to `/` as query params.
- **URL-driven pagination.** State lives in `?page=N`, so back / forward / share / SSR all just work with zero extra plumbing.
- **Types split raw vs client.** `upstream.ts` mirrors the vendor payload; `api.ts` is the `Pick<>` the UI actually consumes. Keeps vendor drift blast radius small.
- **Hand-rolled SVG icons.** Icon set is tiny; not worth pulling `@nuxt/icon` or an icon font for six glyphs.
- **Tailwind v4 via `@tailwindcss/vite`.** Skips the Nuxt module wrapper — direct Vite plugin is the current recommendation for v4 and keeps config surface minimal.
- **Auto-imports (components, composables, utils).** Intentional for a repo this size — less boilerplate, less noise in diffs. On a larger codebase I'd switch to explicit imports: better grep-ability, clearer module boundaries, easier tree-shaking audits, and no surprise collisions between feature folders.

## Areas of improvement

- **Normalize photos on the server.** Today `HouseCard` and the detail page each build a `Thumbnail` shape from different upstream fields (`Foto*` vs `Media[]`). Move both adapters into `server/utils/transformers.ts` so the client receives one canonical `Thumbnail` per card and a `Thumbnail[]` gallery per detail — single source, smaller payload, no `secureImageUrl` shipped to the browser.
- **Richer responsive images.** `PhotoGrid` currently uses `1x`/`2x` density descriptors. Move to width descriptors + `sizes` and generate WebP/AVIF via `@nuxt/image` IPX provider.
- **Static site generation.** The dataset is bounded and low-churn — prerender popular detail pages at build time via `routeRules: { '/detail/**': { prerender: true } }` fed by `nitro.hooks['prerender:routes']`, keep `/` on SWR. Cuts cold-start latency and lets the site deploy to any static host, with the proxy running on-demand for the long tail.
- **Validate `/detail/[id]` param.** UUID guard via `definePageMeta({ validate })` — 404 fast instead of round-tripping upstream on stale IDs.
- **Validate `page` on the listings proxy.** Coerce + clamp `query.page` in `server/api/listings.get.ts` so junk input doesn't burn upstream quota.
