# Elevate Consulting Website

A complete, responsive dummy consulting-business website built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion-ready dependencies, Lucide icons, React Hook Form, and Zod. It includes realistic placeholder content and runs without external image services or a backend.

## Features

- Ten routes including custom 404, legal pages, contact, and consultation booking
- Sticky responsive navigation, mobile menu, active states, footer, and scroll-to-top control
- Premium responsive layouts for mobile, tablet, and desktop
- Six service areas, eight industries, and six filterable case studies
- Auto-playing accessible testimonial carousel and FAQ accordion
- Contact and consultation forms with inline Zod validation, loading, success, and reset states
- Page metadata, Open Graph/Twitter defaults, sitemap, robots file, favicon, and semantic structure
- Reduced-motion support, focus states, labels, high contrast, and keyboard-friendly controls

## Technology

- Next.js (latest stable), React, TypeScript, App Router
- Tailwind CSS
- Lucide React, Framer Motion
- React Hook Form, Zod, and Hookform Resolvers

## Create and run

```bash
npx create-next-app@latest consulting-business-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd consulting-business-website
npm install lucide-react framer-motion react-hook-form zod @hookform/resolvers
npm run dev
```

For this generated project, start directly with:

```bash
cd consulting-business-website
npm install
npm run dev
```

Open `http://localhost:3000`. Create a production build with `npm run build`, then run it with `npm start`.

## Project structure

```text
public/images/                 Local placeholder artwork
src/app/                       Pages, layout, metadata, sitemap, robots
src/components/                Shared UI, navigation, forms and interactions
src/data/site.ts               Services, industries, testimonials, case studies
```

## Deploy to Vercel

Push the project to a Git repository, import it at Vercel, keep the detected Next.js framework settings, and deploy. Add a custom domain under **Project Settings → Domains**, update its DNS as Vercel instructs, then replace `elevateconsulting.example` in metadata, sitemap, and robots with the production domain.

## Forms and integrations

Both forms currently validate in the browser, simulate a short request, log data to the browser console, show confirmation, and reset. Connect Resend, Formspree, or EmailJS at the clearly marked submit point in `src/components/contact-form.tsx`. Connect a booking provider using `NEXT_PUBLIC_CALENDLY_URL`. Copy `.env.example` to `.env.local` and add only development values; never commit secrets.

## Replacing dummy content

- Edit shared service, industry, case-study, and testimonial content in `src/data/site.ts`.
- Edit page-specific copy within each route under `src/app`.
- Replace files in `public/images` and reference them with `next/image` using meaningful alt text.
- Replace dummy email, phone, address, social URLs, legal text, and example canonical domain before launch.

## Future improvements

- Add Resend/API route delivery, spam protection, and consent-aware analytics
- Connect Calendly or Cal.com for real availability and confirmation
- Add a CMS for case studies, team members, and services
- Add a database only if leads or appointments must be stored; PostgreSQL with Prisma is a suitable Vercel-compatible option
- Commission legal review and run production accessibility/user testing
