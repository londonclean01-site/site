import { Metadata } from "next";

export const siteConfig = {
  name: "London Clean",
  description: "Professional cleaning service in London. Residential & commercial cleaning across Greater London. Eco-friendly products, trusted cleaners. Book online today. ⭐ 4.8/5 (566 reviews)",
  url: "https://london-clean01.co.uk",
  ogImage: "https://london-clean01.co.uk/og-image.jpg",
  locale: "en_GB",
  keywords: [
    "cleaning service London",
    "cleaners London",
    "house cleaning London",
    "office cleaning London",
    "professional cleaning service",
    "domestic cleaning London",
    "commercial cleaning London",
    "deep cleaning service",
    "end of tenancy cleaning",
    "carpet cleaning London",
    "eco-friendly cleaning",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Professional Cleaning Service in London | London Clean",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "London Clean" }],
  creator: "London Clean",
  publisher: "London Clean",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Professional Cleaning Service in London | London Clean",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "London Clean - Professional Cleaning Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Service in London | London Clean",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@londonclean",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};
