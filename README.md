# Shaheen Umar — Portfolio

A modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
shaheen-portfolio/
├── app/
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page
├── components/
│   ├── Cursor.tsx        # Custom animated cursor
│   ├── Nav.tsx           # Sticky navigation
│   ├── Hero.tsx          # Hero section with floating cards
│   ├── Stats.tsx         # Stats strip
│   ├── Experience.tsx    # Work history timeline
│   ├── Skills.tsx        # Skills grid
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── lib/
│   └── data.ts           # All portfolio content (edit here!)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

All content lives in `lib/data.ts` — edit your experience, skills, stats, and contact info there. No need to touch component files for content updates.

## Build for Production

```bash
npm run build
npm start
```
