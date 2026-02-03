import { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote",
  description: "Contact London Clean for a free quote. Professional cleaning services across all London boroughs. Book online or call +44 7438 217078. Same-day service available.",
  keywords: ["contact London Clean", "cleaning quote London", "book cleaning service", "cleaning company contact", "London cleaners phone"],
  openGraph: {
    title: "Contact London Clean - Get a Free Quote Today",
    description: "Get in touch for professional cleaning services across London. Free quotes, flexible scheduling.",
    url: "https://london-clean01.co.uk/contact",
  },
  alternates: {
    canonical: "https://london-clean01.co.uk/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <CTASection />
    </div>
  );
}
