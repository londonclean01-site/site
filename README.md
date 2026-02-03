# 🧹 London Clean - Professional Cleaning Service Website

Modern, SEO-optimized cleaning service website built with Next.js 16, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Create `.env.local` file in the root directory:

```bash
cp env.template .env.local
```

Edit `.env.local` and add your credentials:

```env
SITE_URL=https://london-clean01.co.uk
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=info@londonclean.co.uk
BUSINESS_PHONE=+447438217078
BUSINESS_EMAIL=info@londonclean.co.uk
BUSINESS_ADDRESS="Raymor Court, 91 Upper Clapton Rd, London E5 9BX"
```

**📧 Email Setup:** See `RESEND-SETUP.md` for detailed Resend configuration.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📚 Documentation

- **📦 Deployment Guide:** `VERCEL-DEPLOYMENT-GUIDE.md` - Complete step-by-step Vercel deployment
- **✅ Pre-Deployment Checklist:** `PRE-DEPLOYMENT-CHECKLIST.md` - What to check before going live
- **📧 Email Setup:** `RESEND-SETUP.md` - Resend integration and testing

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Shadcn/UI + Radix UI
- **Animations:** Framer Motion
- **Email:** Resend
- **Forms:** React Hook Form with validation
- **SEO:** Next.js Metadata API + JSON-LD schemas
- **Analytics:** Google Analytics 4 + Google Tag Manager

---

## 📁 Project Structure

```
londonclean/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── api/          # API routes (contact form)
│   │   ├── areas/        # Service areas pages
│   │   ├── blog/         # Blog pages
│   │   ├── contact/      # Contact page
│   │   ├── services/     # Services page
│   │   └── layout.tsx    # Root layout
│   ├── components/       # React components
│   │   ├── forms/        # Form components with validation
│   │   ├── layout/       # Header, Footer, Logo
│   │   ├── modals/       # Modal dialogs
│   │   ├── sections/     # Page sections
│   │   ├── seo/          # SEO schemas (LocalBusiness, Service)
│   │   └── ui/           # Shadcn UI components
│   └── lib/              # Utilities and helpers
│       ├── animations.ts # Framer Motion configs
│       └── seo/          # SEO metadata helpers
├── public/               # Static assets
├── content/              # Blog posts (Markdown)
└── docs/                 # Documentation
```

---

## ✨ Features

### 🎨 UI/UX
- ✅ Modern, clean design
- ✅ Fully responsive (mobile-first)
- ✅ Smooth animations (performance-optimized)
- ✅ Accessible (WCAG compliant)
- ✅ Dark mode ready

### 📧 Forms & Contact
- ✅ Quote request forms with validation
- ✅ Modal quote forms
- ✅ Email integration via Resend
- ✅ Real-time form validation
- ✅ Success/error states

### 🔍 SEO Optimized
- ✅ LocalBusiness Schema (JSON-LD)
- ✅ Service Schema for each service
- ✅ Blog post schemas
- ✅ OpenGraph & Twitter Cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML

### 📊 Analytics
- ✅ Google Analytics 4
- ✅ Google Tag Manager
- ✅ Event tracking (quote requests)
- ✅ Vercel Analytics ready

### 📱 Pages
- ✅ Home (Hero, Services, Pricing, Testimonials)
- ✅ About Us
- ✅ Services (Detailed service pages)
- ✅ Areas We Serve (15+ London areas)
- ✅ Blog (Cleaning tips & guides)
- ✅ Contact

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Read the deployment guide:**
   ```
   VERCEL-DEPLOYMENT-GUIDE.md
   ```

2. **Check the pre-deployment checklist:**
   ```
   PRE-DEPLOYMENT-CHECKLIST.md
   ```

3. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

4. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

**Live URL:** https://london-clean01.co.uk

---

## 🧪 Testing

### Test Forms Locally

1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Click "Get a Quote"
4. Fill form with test data
5. Submit and check email

### Test Production Build

```bash
npm run build
npm start
```

---

## 📝 Content Management

### Adding Blog Posts

1. Create new `.md` file in `content/blog/`
2. Add frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   description: "Post description"
   date: "2026-02-03"
   author: "London Clean Team"
   category: "Cleaning Tips"
   image: "/images/blog/your-image.jpg"
   keywords: ["keyword1", "keyword2"]
   ---
   
   Your content here...
   ```
3. Blog post will appear automatically

---

## 🔧 Configuration

### Update Contact Information

Edit these files:
- `src/components/seo/LocalBusinessSchema.tsx`
- `src/components/layout/Footer.tsx`
- `env.template`

### Update Services

Edit:
- `src/components/forms/QuoteRequestForm.tsx` (services array)
- `src/components/sections/ServicesDetailedSection.tsx`

### Update SEO

Edit:
- `src/lib/seo/metadata.ts` (site config)
- `src/app/sitemap.ts`
- `src/app/robots.ts`

---

## 🐛 Troubleshooting

### Forms not sending emails?

1. Check `.env.local` has `RESEND_API_KEY`
2. Verify Resend account is active
3. Check Resend Dashboard for logs
4. See `RESEND-SETUP.md`

### Build errors?

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment variables not working?

1. Restart dev server after changing `.env.local`
2. On Vercel: Settings → Environment Variables → Redeploy

---

## 📞 Support

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Shadcn/UI:** https://ui.shadcn.com
- **Resend:** https://resend.com/docs

---

## 📄 License

Private - All rights reserved

---

**Built with ❤️ for London Clean**

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
