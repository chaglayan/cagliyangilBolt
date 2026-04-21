---
name: cagliyangilWeb
description: Project knowledge for cagliyangil.com — Mehmet & Maria Çağlıyangil's personal site (Vite + React + TS + Tailwind, hosted on Cloudflare). Use when working in this repo for asset swaps, content edits, routing changes, Cloudflare cache purges, or Supabase contact-form changes.
---

# cagliyangilWeb

Personal site for Mehmet & Maria Çağlıyangil. Kept running long-term for both of them.

## Stack & structure

- **Build:** Vite 5 + React 18 + TypeScript + Tailwind 3
- **Icons:** `lucide-react`
- **Backend:** Supabase (contact form — `contact_messages` table, RLS-protected, anon INSERT only)
- **Hosting:** Cloudflare (domain: `cagliyangil.com`, subdomains: `mehmet.cagliyangil.com`, `maria.cagliyangil.com`)
- **Scripts:** `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`

```
src/
  App.tsx           # hostname-based router (see Routing)
  main.tsx
  index.css         # Tailwind + Fraunces/Inter fonts + kenburns/fade keyframes
  pages/
    Landing.tsx     # cagliyangil.com
    Mehmet.tsx      # mehmet.cagliyangil.com
    Maria.tsx       # maria.cagliyangil.com
  lib/
    links.ts        # personHref / homeHref — prod vs local URL resolution
    supabase.ts     # Supabase client (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
public/             # Served at root. ALL images live here, flat. Referenced as `/IMG_xxxx.jpg`.
archive/            # Backups of replaced assets. Not shipped (outside public/).
supabase/migrations/
index.html          # loads Google Fonts (Inter, Fraunces)
```

## Routing (App.tsx)

No router library — hostname + path based:
- `mehmet.*` host **or** `/mehmet` path → `Mehmet` page
- `maria.*` host **or** `/maria` path → `Maria` page
- otherwise → `Landing`

`lib/links.ts` picks between prod absolute URLs (`https://mehmet.cagliyangil.com`) and local paths (`/mehmet`). Preserve this dual behavior when adding navigation.

## Image assets — how they work

All images sit flat in `public/` and are referenced by root URL:

| File | Used in | Purpose |
|---|---|---|
| `IMG_4780.jpg` | `Landing.tsx:14` | Desktop hero (sunset, Bodrum) |
| `IMG_3058.jpg` | `Landing.tsx:19` | Mobile hero |
| `IMG_3807.jpg` | `Mehmet.tsx:147` | Mehmet's portrait |
| `IMG_4482.jpg` | `Maria.tsx:132` | Maria's portrait |

There is **no per-person assets folder** — filenames are the only identifier.

## Swapping an image (important — Cloudflare cache)

Two options:

**A. Same filename replace** (simple, requires cache purge)
1. `mv public/IMG_XXXX.jpg archive/IMG_XXXX.original.jpg` (keep backup)
2. Drop new file as `public/IMG_XXXX.jpg`
3. Commit + push → Cloudflare redeploys
4. **Purge Cloudflare cache** for that exact URL (Dashboard → Caching → Configuration → Purge Custom URL, e.g. `https://mehmet.cagliyangil.com/IMG_3807.jpg`). Without purge, visitors see the old photo until edge TTL expires.

**B. New filename** (preferred for clean cache-bust)
1. Save new photo under a new name (e.g. `mehmet-2026.jpg`)
2. Update the single `src=` reference in the relevant page
3. Optionally move the old file to `archive/` or delete it
4. Commit + push — no manual cache purge needed

**Resolution guidance:** heroes stretch full-width. Source images should be at least 1600px on the long edge; 2000–3000px is safer for desktop retina. Very large source images (4000px+) are fine — Cloudflare will still serve them; no image pipeline is configured in Vite, so files are served as-is.

## Styling conventions

- Display font: `font-display` utility → Fraunces (serif, opsz variable)
- Body font: Inter (default via `body` in `index.css`)
- Palette: stone + teal accents on Mehmet, warm amber accents on Landing. Keep that consistent when editing.
- Animations in `index.css`: `.kenburns` (subtle zoom on hero images), `.animate-fade-up`, `.animate-fade-in`

## Supabase

- Single migration: `supabase/migrations/20260418103337_create_contact_messages.sql`
- Table: `contact_messages(id, name, email, message, created_at)`
- RLS: anon INSERT with length checks; no SELECT policy
- Client reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` at build time (set in Cloudflare Pages env vars)
- The contact form UI itself is not yet wired up in the pages — this table is provisioned for future use

## Git workflow in Claude Code sessions

- Feature work goes on `claude/<slug>` branches (harness enforces this per-session)
- `main` is the production branch
- After pushing a branch, open a PR when the user asks — don't auto-create
- Cloudflare likely redeploys on `main` merges; preview deploys per-branch if configured

## Gotchas / lessons

- **Don't put backups inside `public/`** — Vite ships the entire `public/` tree. Use `archive/` at project root.
- **Subdomain URLs vs local paths:** always go through `links.ts`, never hard-code `https://mehmet.cagliyangil.com` in components.
- **Route detection runs on `hostname.toLowerCase()`** — if adding a new subdomain, extend both `resolveRoute` (App.tsx) and `personHref` (links.ts).
- **No image optimization pipeline** — compress/resize before committing.
