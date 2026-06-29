# House Listing

Two-page Nuxt 4 app consuming a real-estate Partner API. Server-side proxy keeps the API key off the client.

- `/` — paginated list of properties for sale
- `/detail/[id]` — single listing with photo gallery and map

## Stack

- **Nuxt 4** — SSR, hybrid rendering, server routes
- **Tailwind CSS v4** — via `@tailwindcss/vite`
- **`@nuxt/image`** — `<NuxtImg>` for remote photos
- **ESLint (flat) + Prettier** — correctness via ESLint, formatting via Prettier
- **Vitest + `@nuxt/test-utils`** — component, composable and util tests

## Prerequisites

- Node `>=20`
- pnpm `>=10`
- Partner API key

## Setup

```bash
pnpm install
cp .env.example .env
# edit .env, set NUXT_API_KEY
```

### Environment

| Var             | Required | Default           |
| --------------- | -------- | ----------------- |
| `NUXT_BASE_URL` | no       | upstream API base |
| `NUXT_API_KEY`  | **yes**  | —                 |

Both are server-only via `runtimeConfig`. The key never reaches the browser.

## Scripts

```bash
pnpm dev            # start dev server on http://localhost:3000
pnpm build          # production build
pnpm preview        # preview production build locally
pnpm generate       # static site generation

pnpm lint           # eslint
pnpm lint:fix       # eslint --fix
pnpm format         # prettier --write
pnpm format:check   # prettier --check

pnpm test           # vitest run
pnpm test:watch     # vitest watch mode
```

## Project structure

```
app/
├─ app.vue
├─ layouts/default.vue
├─ pages/
│  ├─ index.vue              # /
│  └─ detail/[id].vue        # /detail/:id
├─ components/               # auto-imported (icons/, common/, ...)
├─ composables/              # auto-imported
├─ assets/css/main.css       # Tailwind entry + theme tokens
└─ utils/                    # auto-imported helpers

server/
├─ api/
│  ├─ listings.get.ts        # GET /api/listings
│  └─ listingDetail/[id].get.ts  # GET /api/listingDetail/:id
└─ utils/transformers.ts     # upstream → client shape

shared/types/                # types shared between app and server
test/                        # Vitest specs (components, composables, utils)
```
