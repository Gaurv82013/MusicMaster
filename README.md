# MusicMaster

> Transform your musical journey with curated online courses, featured webinars, and interactive UI components built with Next.js and TypeScript.

## Key Features

- Course catalog driven by local JSON data (courses, featured items, prices, instructors)
- Featured courses section with per-course pages (client navigation)
- Featured webinars listing (data-driven)
- Responsive, animated UI elements: hero spotlight, animated tooltips, moving border buttons, infinite testimonial carousel
- Contact page with client-side form (simulated submission)
- Accessible navigation and footer with quick links and contact info

## Tech Stack

- Next.js (app directory, Next 16)
- React 19 + TypeScript
- Tailwind CSS (v4) for styling
- Motion/react for UI animations
- @mui/material and @emotion (present in dependencies)
- lucide-react for icons
- Utility libs: `clsx`, `tailwind-merge`, `class-variance-authority`

## Project Structure (important files)

- `app/` — Next.js app routes and pages
  - `app/page.tsx` — Home page assembling sections
  - `app/layout.tsx` — Root layout (fonts, Navbar, Footer)
  - `app/courses/page.tsx` — Courses listing page (data-driven)
  - `app/contact/page.tsx` — Contact form page
- `components/` — UI sections and pages
  - `HeroSection.tsx`, `FeatureSection.tsx`, `WhyChoosesUs.tsx`, `TestimonialCards.tsx`, `UpComingWebinar.tsx`, `Instractors.tsx`, `Navbar.tsx`, `Footer.tsx`
  - `ui/` — small reusable UI components (spotlight, moving-border Button, animated-tooltip, infinite-moving-cards, navbar-menu)
- `data/` — static JSON data sources
  - `featureData.json` (courses)
  - `FeaturedWebinarData.json`
- `lib/utils.ts` — small helper (`cn` combining `clsx` + `twMerge`)
- `types/` — TypeScript interfaces used across the app
- `next.config.ts`, `tsconfig.json`, `package.json` — project config and dependencies

## Installation & Setup

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm start
```

Available npm scripts (from `package.json`):
- `dev` — run Next.js in development
- `build` — build production assets
- `start` — start the production server
- `lint` — run ESLint

## Environment Variables

No environment variables referenced in source code were detected. The repository includes `.gitignore` patterns for local `.env` files, but the app uses static JSON data and client-side simulation for form submission.

If you plan to connect APIs or third-party services later, add them to an `.env.local` and ensure they are referenced as `process.env.MY_VAR` or `NEXT_PUBLIC_MY_VAR` where appropriate.

## Usage / How to Run

- Start the app locally: `npm run dev` and open `http://localhost:3000`
- Navigate the demo site to explore features:
  - Home: hero, featured courses, testimonials, webinars, instructors
  - `/courses`: browse all courses (data from `data/featureData.json`)
  - `/contact`: send a demo message (client-side simulated)

## Screenshots

Add screenshots here (placeholders):

- Screenshot: Home page — _Add image of the landing/hero section_
- Screenshot: Courses page — _Add image showing course cards grid_
- Screenshot: Contact page — _Add image of contact form_

## Future Improvements

- Add backend/API (e.g., Next API routes or external service) to handle enrollments and contact form submissions
- Integrate authentication and user profiles for course enrollment and progress tracking
- Replace static JSON with a headless CMS (Sanity/Strapi) or database (Postgres/Supabase)
- Add unit/integration tests and CI configuration
- Improve SEO, meta tags, and add social preview images
- Add i18n/localization and accessibility audits

---

If you'd like, I can also:

- Add a simple API route to accept contact submissions
- Create an `.env.example` with recommended keys for future integrations
- Wire a basic enrollment flow backed by a mock API

— Happy to expand any section or add deployment instructions (Vercel, Netlify).
