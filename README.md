# Fitness House

A boutique fitness studio website built with Next.js 16, TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion.

Hero design inspired by an industrial fitness studio aesthetic: dark riveted walls, lime green diagonal accent, bold "Re-life Your Body" headline, and a fitness model in a straddle stretch.

## Quick Start

```bash
bun install     # or npm install
bun run dev     # or npm run dev
```

Open http://localhost:3000

## Build

```bash
bun run build   # default — Vercel-compatible, outputs to .next/
```

### Static export (for Cloudflare Pages Direct Upload, Netlify Drop, S3)

Use the alternate config file:
```bash
cp next.config.static.ts next.config.ts
bun run build           # produces static export in out/
```

## Deploy

### Vercel (recommended — zero config)
1. Push this repo to GitHub (default `next.config.ts` is Vercel-ready)
2. Import at vercel.com/new — auto-detects Next.js
3. Click Deploy (no config needed)
4. Every `git push` to main auto-deploys

### Cloudflare Pages (via Git, with static export)
1. Switch to static config: `cp next.config.static.ts next.config.ts`
2. Push to GitHub
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
4. Pick this repo
5. Framework preset: **None**
6. Build command: `npm run build`
7. Build output directory: `out`
8. Click Save and Deploy

### Netlify (with static export)
1. Switch to static config: `cp next.config.static.ts next.config.ts`
2. Push to GitHub
3. Connect at app.netlify.com
4. Build command: `npm run build`
5. Publish directory: `out`

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style) + Lucide icons
- **Animation**: Framer Motion
- **ORM**: Prisma (SQLite — swap to Postgres for production)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts + metadata
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Brand palette + utilities
├── components/
│   ├── fitness-house/      # 11 section components
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── marquee.tsx
│   │   ├── programs.tsx
│   │   ├── about.tsx
│   │   ├── trainers.tsx
│   │   ├── schedule.tsx
│   │   ├── pricing.tsx
│   │   ├── testimonials.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   └── ui/                 # shadcn/ui components
└── lib/
    ├── db.ts               # Prisma client
    └── utils.ts            # Tailwind class merge utility
public/
└── images/                 # AI-generated fitness photography
prisma/
└── schema.prisma           # Database schema
```

## Brand
- **Lime green**: #c2f93a
- **Charcoal**: #1a1a1a
- **Display font**: Bebas Neue
- **Body font**: Montserrat

## License
MIT — use it, fork it, ship it.
