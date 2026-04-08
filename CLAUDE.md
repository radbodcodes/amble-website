@AGENTS.md

# Amble Website — Claude Instructions

## Architecture
Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Vercel.

## Dev Workflow
- Dev server: `npm run dev -- -p 3456`
- After editing any component: `kill $(lsof -t -i:3456); rm -rf .next; npm run dev -- -p 3456` — Turbopack caches server-rendered HTML and causes hydration errors if you skip this.
- Wait for `GET / 200` in terminal before telling user to hard refresh.
- Deploy: `git push origin main && npx vercel --prod`

## Domains
- ambleandco.com (primary), ambleand.co (redirect), both on Vercel
- DNS managed in GoDaddy
- Resend for contact form emails (RESEND_API_KEY in Vercel env vars, never commit)

## Brand
- Colors: warm copper palette. Primary #A8673E. Dark #1A1614. Background #F8F4F0.
- Fonts: Cormorant Garamond (serif headlines), DM Sans (sans body)
- Type scale (base-8): 80, 48, 40, 32, 24, 20, 16, 12px
- B&W city photography with warm copper gradient overlays
- Logo: white PNG extracted from Canva business cards at public/logo-white.png
- Star motif (four-pointed) as decorative element
- Tagline: "Unhurried Thinking, Unparalleled Results."
- AMBLE methodology: Assess, Map, Build, Launch, Evolve

## Copy Voice
- Direct, strategic, plain-language. No filler, no vague claims.
- Avoid em dashes. Use periods, commas, or fragments.
- Outcome-led card copy: For line (who), Headline (what service), Description (problem + what we offer)
- Iterative copy review: draft, user feedback, revise, implement. Don't batch multiple copy changes without approval.

## Images
- hero-city.jpg: street-level city (hero)
- interlude-city.jpg: skyline city (interlude break)
- Crosswalk.png: top-down crosswalk with people (about section)
- When swapping images: rename the file to bust browser cache, update the src in component, restart dev server.
