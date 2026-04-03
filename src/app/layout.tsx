import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// ✅ display: swap — не блокирует рендер
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

// ✅ Аналитика грузится после рендера (не блокирует LCP)
const GoogleAnalytics = dynamic(
  () => import("@/components/analytics/GoogleAnalytics").then(m => m.GoogleAnalytics),

);
const GoogleTagManager = dynamic(
  () => import("@/components/analytics/GoogleTagManager").then(m => m.GoogleTagManager),

);
const GoogleTagManagerNoScript = dynamic(
  () => import("@/components/analytics/GoogleTagManager").then(m => m.GoogleTagManagerNoScript),

);
const GoogleAdsTag = dynamic(
  () => import("@/components/analytics/GoogleAdsTag").then(m => m.GoogleAdsTag),

);
const WhatsAppButton = dynamic(
  () => import("@/components/ui/WhatsAppButton").then(m => m.WhatsAppButton),

);

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {/* Аналитика — после контента */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        <GoogleTagManagerNoScript gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ''} />
        <GoogleAdsTag conversionId="AW-17933465567" />

        <LocalBusinessSchema />
        <Header />
        <main className="flex-1 min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
