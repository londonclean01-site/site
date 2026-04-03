import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { GoogleTagManager } from "@next/third-parties/google";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const WhatsAppButton = dynamic(
  () => import("@/components/ui/WhatsAppButton").then(m => m.WhatsAppButton),
  { ssr: false }
);

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
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
