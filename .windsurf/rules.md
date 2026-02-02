# Project Context & Windsurf Rules

## 🧠 Project Essence
**Goal**: Create a high-end, SEO-optimized cleaning service website for **London**, replicating the UI/UX of [Clenar](https://clenar.framer.website/) 1:1, but with production-grade engineering.

**Role**: Senior Frontend Developer & SEO Expert.
**Philosophy**: "Kombai Concept" — Modular, declarative, clean, and immediately functional code. No "TODOs", no placeholders.

## 📍 SEO & Localization Rules (London, UK)
- **Target Location**: London (Greater London, City of London).
- **Primary Keywords**: Professional Cleaning Services London, Office Cleaning London, Disinfection Services London, End of Tenancy Cleaning London.
- **Microdata**: JSON-LD `LocalBusiness` and `Service` schema is mandatory for every page.
- **Accessibility**: WCAG 2.1 AA Compliant (Semantic HTML, ARIA).
- **Performance**: Core Web Vitals optimized (LCP < 2.5s, CLS < 0.1).

## 🛠 Technical Stack (Mandatory)
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS (Utility-first, strict design system).
- **UI Library**: Shadcn/UI (Radix Primitives) + Lucide React.
- **Animations**: Framer Motion (to match Framer reference feel).
- **Fonts**: Inter or similar clean Sans-Serif (optimized with `next/font`).

## 🧱 Design & Architecture Rules
1.  **Block-Based Flow**: Implement sections exactly as analyzed (Hero -> Value Props -> Services -> Trust -> CTA).
2.  **Component Structure**:
    - `components/sections/`: Full page blocks (e.g., `HeroSection`, `ServicesGrid`).
    - `components/ui/`: Reusable primitives.
    - `app/(marketing)/`: Route structure for SEO pages.
3.  **Responsive**: Mobile-first, perfect adaptation for all viewports.
4.  **Images**: `next/image` with proper `sizes` and `alt` tags (SEO critical).

## 📝 Content Strategy
- **Tone**: Professional, Trustworthy, Efficient.
- **Adaptation**: Replace generic "Lorem Ipsum" or generic text with London-specific cleaning copy where appropriate, while keeping the visual structure 1:1.

## 🚫 Anti-Patterns (Do Not Do)
- Hardcoding sensitive data.
- Using `<div>` where a semantic tag (`<section>`, `<article>`, `<nav>`) fits.
- "Dirty" code (inline styles, magic numbers).
- Ignoring mobile view.
