# Amble Website — Claude Instructions

## Architecture
Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Vercel.
GitHub repo: radbodcodes/amble-website.
Next.js 16 has breaking changes from training data. Check `node_modules/next/dist/docs/` for current API docs before writing code.

## Branch status
The working copy sits on `design-exploration` (the preview variants, last commit 5 July 2026). `main` holds the live site: its last site-code commit is `eaed559` (8 April 2026), its later commits touch only CLAUDE.md and AGENTS.md, and the last production deploy is also 8 April. Merging or dropping the branch is Nick's open decision. While the repo is off `main`, `update web` skips it (the skill commits and pushes only from `main`). Check `git branch --show-current` before any deploy.

## Components
```
components/
├── hero.tsx              # Full-screen copper gradient over B&W city photo, tagline, CTA
├── outcomes.tsx          # "What We Do" — 4 service cards in 2x2 grid
├── interlude.tsx         # Full-width quote over darkened city photo
├── methodology.tsx       # "How We Work" — AMBLE 5-step cards with background letters
├── about.tsx             # Dark section with crosswalk photo, team background copy
├── contact-section.tsx   # Two-column: left copy + right ContactForm
├── contact-form.tsx      # useActionState form → server action → Resend email
├── nav.tsx               # Sticky nav, transparent over hero, dark on scroll
├── footer.tsx            # Dark footer with logo + email
├── animate-on-scroll.tsx # Framer Motion useInView wrapper (once: true)
└── star-motif.tsx        # SVG four-pointed star, configurable size
```

## Page Section Order
Hero > Outcomes > Interlude > Methodology > About > ContactSection > Footer (see `app/page.tsx`)

## Contact Form
- Server action: `app/actions/contact.ts` sends email via `lib/email.ts` using Resend
- Sends to letswalk@ambleandco.com from noreply@ambleandco.com
- RESEND_API_KEY is a Vercel env var, never commit

## Dev Workflow
- Dev server: `npm run dev -- -p 3456`
- Add shadcn component: `npx shadcn@latest add <component>`
- After editing any component: `kill $(lsof -t -i:3456); rm -rf .next; npm run dev -- -p 3456` — Turbopack caches server-rendered HTML and causes hydration errors if you skip this.
- Wait for `GET / 200` in terminal before telling user to hard refresh.
- Deploy: from `main`, run `git push origin main && npx vercel --prod`. Treat `npx vercel --prod` as the deploy: this site is an exception to the root CLAUDE.md rule that pushes deploy. No push from April to July 2026 produced a deploy or a preview (`vercel ls amble-website` on 2026-10-12 listed only four production deploys, all from 7 and 8 April). After any push, run `vercel ls amble-website`; a build you did not start means a Git connection now exists and this line needs updating. Check the branch first (see Branch status).
- Terminal copy-paste adds unwanted spaces. Write clean .txt files to Desktop for external editing.

## Domains
- ambleandco.com (primary), ambleand.co (redirect), both on Vercel
- DNS managed in GoDaddy

## Brand
- Colors: warm copper palette. Primary #A8673E. Dark #1A1614. Background #F8F4F0.
- Fonts: Cormorant Garamond (serif headlines), DM Sans (sans body)
- Type scale (base-8): 80, 48, 40, 32, 24, 20, 16, 12px
- B&W city photography with warm copper gradient overlays
- Logo: white PNG at public/logo-white.png
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
