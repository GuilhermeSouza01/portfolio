<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio — Guilherme Souza

Personal portfolio website. Stack: Next.js (App Router), TypeScript, Tailwind CSS, Motion.
Deployed on Vercel (every push to `main` deploys to production).

## Content rules (most important)
- ALL content comes from `src/data/profile.ts`: bio, experience, projects, skills, links.
- NEVER invent information: companies, roles, dates, projects, metrics, technologies, links.
- Technologies shown on the site must exist in `profile.ts`. Do not add tech "for looks".
- If data is missing, render a clear `TODO` and tell me what is missing. Never fill with fake data.
- Site copy is in Brazilian Portuguese (pt-BR); code, comments and commit messages are in English.
- Do not use gendered placeholders like "desenvolvedor(a)": ask me which form to use.

## Design direction
- Dark, minimalist, lots of whitespace. NO hero banner image: the hero is typography only.
- Do NOT look like a generic template: avoid default indigo accent, repeated mono "01 —"
  section labels and identical pill tags everywhere. Propose a distinctive accent color.
- References: brittanychiang.com (structure, experience hover that dims siblings) and
  product.inc (cards, typographic hierarchy). Do not copy either layout literally.
- Use the `frontend-design` and `motion` skills for visual and animation decisions.
- Design tokens (colors, fonts, spacing) live in `globals.css` / Tailwind config. No hardcoded
  colors inside components.

## Animation rules
- Subtle only: scroll reveal (fade + small translateY), card hover, scroll progress bar.
- Always respect `prefers-reduced-motion`.
- Animate only `transform` and `opacity`. No layout-shifting animations.
- Keep Motion usage inside small Client Components; everything else stays a Server Component.

## Code rules
- Server Components by default; add `"use client"` only when needed (state, effects, Motion).
- Use `next/image` for images and `next/font` for fonts.
- Mobile-first, accessible (semantic HTML, alt text, visible focus, sufficient contrast).
- Small, reusable components in `src/components`. No giant files.

## Workflow
- Work in small steps, one task at a time. Do not start the next step without asking.
- Before finishing ANY task, run `npm run build` and `npm run lint` and fix errors.
  (In Next.js 16, `next build` no longer runs the linter, so run both.)
- Do not add new dependencies without asking first.
- Commit in small steps using conventional commits (feat:, fix:, refactor:, chore:).
- At the end of each task, summarize what changed and which files were touched.