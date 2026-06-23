# Artem Honcharenko — Portfolio

Personal developer portfolio built with Next.js and powered by Sanity CMS. Content (skills, projects, experience) is managed entirely in Sanity — no code changes needed to update what appears on the site.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 |
| Animations | Motion for React (`motion/react`) |
| CMS | Sanity (`next-sanity`, `@sanity/image-url`) |
| Runtime | React 19 |
| Deployment | Vercel |

## Features

- Hero section with a typewriter cycling through role phrases
- About, Skills, Projects, Experience, and Contact sections
- Dark / light theme toggle with CSS custom property system
- Accent color switcher (Pink + Green, Green, Pink, Blue + Cyan)
- Scroll-reveal entrance animations with staggered card sequences
- Film grain texture overlay
- All content managed in Sanity — add a project or update a skill without touching the code

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

You can find your project ID in the [Sanity manage dashboard](https://sanity.io/manage).

### Run the Dev Server

```bash
npm run dev
```

- Site: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

## Project Structure

```
src/
  app/              — route, layout, root providers, Studio route
  sections/         — one folder per portfolio section
    hero/
    about/
    skills/
    projects/
    experience/
    contact/
  components/       — shared UI: nav, footer, theme-toggle, reveal wrapper
  sanity/           — schemas, GROQ queries, client config, generated types
  lib/              — animation variants, fonts, utilities
```

## Content Management

All portfolio content lives in Sanity:

| Content type | What it controls |
|---|---|
| `skill` | Technology badges grouped by category |
| `project` | Project cards (title, description, tech stack, links, screenshot) |
| `experience` | Timeline entries (role, company, period, highlights) |
| `about` | Bio text and quick-stats panel |
| `siteSettings` | LinkedIn / GitHub URLs, hero typewriter phrases |

Edit content at http://localhost:3000/studio locally, or at the hosted Studio URL after deployment.

The site uses ISR (Incremental Static Regeneration). After publishing changes in Sanity, the site revalidates automatically via a webhook — no redeploy needed.

## Deployment

The project is intended to deploy to Vercel.

1. Push to GitHub and import the repository in [Vercel](https://vercel.com/new)
2. Add the environment variables in the Vercel project settings:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
3. Set up a Sanity webhook pointing to your revalidation route so content changes go live instantly without a redeploy
