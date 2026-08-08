# The Singh Sisters — Study Abroad & Global Education Consulting

A premium, modern web application built for **The Singh Sisters**, empowering students, researchers, and young women in STEM to pursue world-class higher education, Master's & PhD degrees, and fully funded global scholarships (Erasmus Mundus, DAAD, etc.).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Vanilla CSS design system**, **Lucide Icons**, **React Hook Form**, **Zod**, and **Web3Forms API integration**.

---

## 🌟 Key Features & Highlights

- **Dynamic University Hero**: Auto-fading background slideshow cycling top global universities (*Harvard, Oxford, Stanford, Cambridge, MIT, ETH Zurich, Imperial, NUS, Tokyo*) with zero text flickering.
- **SS Monogram Branding & Custom Palette**: Deep forest green (`#0B3933`), warm gold (`#B58A4E`), off-white header navigation (`#FAF8F5`), and high-contrast typography.
- **Free Consultation & Contact Hub**:
  - Integrated 4-field consultation booking form (*Name, Email, Consultation Topic, Notes*).
  - Web3Forms API email forwarding sending lead notifications directly to **`viveksingh0102vs@gmail.com`**.
  - Direct 1-click fallback email trigger for instant user-to-owner contact.
- **Social Media Connect Grid**: Interactive cards for Facebook, X (Twitter), and LinkedIn matching custom design specifications.
- **Topic-Justifying Media**: Custom artwork for Global Destinations, Academic Pathways, Personalized Mentorship, and Scholarship Guidance.
- **SEO & Performance Optimized**: Complete metadata, Open Graph / Twitter cards, robots.ts, sitemap.ts, and 100% static & server-rendered route compilation.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Custom Vanilla CSS Tokens & Design System
- **Icons**: Lucide React Icons
- **Forms & Validation**: React Hook Form, Zod, Zod Resolvers
- **Email Forwarding**: Web3Forms API integration
- **Deployment Target**: Vercel & GitHub (`viveksingh0102vs-wq/the-singh-sisters`)

---

## 🚀 Quick Start & Development

### 1. Clone & Install
```bash
git clone https://github.com/viveksingh0102vs-wq/the-singh-sisters.git
cd consulting-business-website
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory:
```env
WEB3FORMS_ACCESS_KEY=a2bd156a-1413-4714-9627-0f73fed39acb
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production
```bash
npm run build
```

---

## 📂 Project Structure

```text
public/
├── images/
│   ├── universities/          Top world university photos (Harvard, Oxford, MIT...)
│   ├── scholarship-guidance-hero.jpg
│   ├── academic-pathways-hero.jpg
│   └── personalized-mentorship-hero.jpg
src/
├── app/
│   ├── about/                 Our Story & Mentors page
│   ├── api/contact/           Contact API route handling Web3Forms mail forwarding
│   ├── book-consultation/     Unified consultation booking route
│   ├── contact/               Contact & Social Media Connect page
│   ├── services/              Our Services overview
│   ├── globals.css            Design tokens, responsive layouts, glassmorphism & gradients
│   ├── layout.tsx             Root layout with custom header & footer
│   └── page.tsx               Homepage featuring dynamic university hero & services grid
├── components/
│   ├── booking-form.tsx       Consultation form with Zod validation & mail submission
│   ├── header.tsx             Off-white navbar with SS monogram logo
│   ├── ui.tsx                 Reusable PageHero, SectionHeading & CTA components
│   └── university-hero.tsx    Auto-fading top world university background hero
└── data/
    └── site.ts                Services, mentors, and program data
```

---

## 🚢 Deployment on Vercel

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update website features"
   git push origin main
   ```
2. Import repository **`viveksingh0102vs-wq/the-singh-sisters`** on [Vercel](https://vercel.com/new).
3. Set the Environment Variable:
   - `WEB3FORMS_ACCESS_KEY` = `a2bd156a-1413-4714-9627-0f73fed39acb`
4. Deploy! Your site will be live at `https://the-singh-sisters.vercel.app`.
