# 🚀 London Clean - Senior Frontend & SEO Implementation Plan

This plan details the 1:1 reconstruction of the Clenar reference site for the London market, prioritizing SEO, performance, and a modular architecture.

## 📋 Project Overview
- **Reference**: [Clenar Framer Template](https://clenar.framer.website/)
- **Goal**: Pixel-perfect clone with Senior-level architecture.
- **Location Focus**: London, UK (SEO Optimization).
- **Tech Stack**: Next.js 15, Tailwind CSS, Framer Motion, Shadcn/UI.

---

## 🧠 Windsurf Rules & Context (Project DNA)
*These rules will be established in `.windsurf/rules.md` upon execution.*

1.  **SEO First**: Every component must be semantically correct (`<header>`, `<main>`, `<section>`). JSON-LD Schema for "CleaningService" in London is mandatory.
2.  **1:1 Fidelity**: Visual blocks (Hero, Features, Services) must match the reference user flow exactly.
3.  **London Localization**: All copy placeholders must be adapted for London (e.g., "Professional Cleaning in Shoreditch", "Office Cleaning Canary Wharf").
4.  **Performance**: Images must use `next/image`. LCP < 2.5s.
5.  **Code Quality**: Strict Typing (TypeScript). No "any". Atomic component design.

---

## 🏗 Implementation Roadmap

### Phase 1: Foundation & SEO Configuration
- [ ] **Initialize Next.js Project**: App Router, TypeScript, Tailwind CSS.
- [ ] **Design System Setup**:
    - Configure Fonts (Inter/Sans).
    - Setup Tailwind Colors to match Clenar (Deep Blues, Clean Whites).
    - Install Shadcn/UI & Lucide Icons.
- [ ] **SEO Setup**:
    - Configure `metadata` base (OpenGraph, Twitter Cards).
    - Set up `sitemap.ts` and `robots.ts`.
    - Create `SchemaBuilder` utility for structured data.

### Phase 2: Core Layout & Navigation
- [ ] **Header Component**:
    - Responsive Navigation (Desktop/Mobile Menu).
    - "Get Started" CTA.
    - Sticky behavior implementation.
- [ ] **Footer Component**:
    - SEO-rich footer links (Services, Locations).
    - Social proof & Contact info.

### Phase 3: Page Construction (Home Page Flow)
*Strict adherence to reference flow*
- [ ] **Hero Section**:
    - H1: Keyword-rich headline (e.g., "Premier Cleaning Services in London").
    - Subtext + CTA Buttons.
    - High-quality optimized Hero Image.
- [ ] **Features Grid (Value Props)**:
    - 4-column grid: Professionalism, Dedication, Convenience, Sparkling Spaces.
- [ ] **Services Highlight Section**:
    - "Effortless cleaning..." section.
    - 5-item list: Home, Disinfection, Office, Floor, Dust.
    - Interactive hover states.
- [ ] **Testimonials/Trust Section**:
    - "Our satisfied customers" carousel or grid.
    - Trust badges (London-specific if applicable).
- [ ] **CTA Banner**:
    - "A cleaner space is just a click away" full-width section.

### Phase 4: Additional Pages (Skeleton)
- [ ] **About Page**: Company story & Team.
- [ ] **Services Page**: Detailed breakdown of offerings.
- [ ] **Contact Page**: Booking form (React Hook Form + Zod).

### Phase 5: Polish & Animation
- [ ] **Framer Motion Integration**:
    - Fade-in on scroll.
    - Hover effects matching the reference.
- [ ] **Core Web Vitals Audit**:
    - Lighthouse score check (Target 95+).

---

## 🔗 User Flow Analysis (Reference)
1.  **Attract**: Hero Section (Visual + H1).
2.  **Convince**: "Committed to Excellence" (Why us?).
3.  **Offer**: Service List (What we do).
4.  **Validate**: Testimonials (Social Proof).
5.  **Convert**: Bottom CTA + Sticky Nav Button.

## 🛠 Next Steps
1.  Confirm this plan.
2.  I will generate the `.windsurf/rules.md` file.
3.  Scaffold the project and start Phase 1.
