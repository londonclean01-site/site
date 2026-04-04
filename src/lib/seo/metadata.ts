import { Metadata } from "next";

export const siteConfig = {
  name: "London Clean 01",
  description: "Looking for reliable cleaning services in London? London Clean offers professional home & office cleaning services near you across Greater London. Book today from £20/hr.",
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
    default: "Cleaning Services London | Office & Home Cleaning Near Me | London Clean 01",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "London Clean 01" }],
  creator: "London Clean 01",
  publisher: "London Clean 01",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Cleaning Services London | Office & Home Cleaning Near Me | London Clean 01",
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
    title: "Cleaning Services London | Office & Home Cleaning Near Me | London Clean 01",
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
    verification: {
    google: "cN6ApF7SFPU99MOLy8DavUx42LfVnUPrK04SMkuP74o",
  },
};
