import { Metadata } from "next";
import { ServiceSchema } from "@/components/seo/ServiceSchema";
import { ServicesDetailedSection } from "@/components/sections/ServicesDetailedSection";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in London",
  description: "Comprehensive cleaning services across London. Domestic, end of tenancy, deep cleaning, after builders, after party, eco cleaning, and VIP luxury cleaning. Book online today.",
  keywords: [
    "cleaning services London",
    "domestic cleaning",
    "end of tenancy cleaning",
    "deep cleaning service",
    "after builders cleaning",
    "after party cleaning",
    "eco cleaning",
    "VIP luxury cleaning",
  ],
  openGraph: {
    title: "Professional Cleaning Services in London | LondonClean",
    description: "Comprehensive cleaning services for homes and offices across Greater London.",
    url: "https://london-clean01.co.uk/services",
  },
  alternates: {
    canonical: "https://london-clean01.co.uk/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Domestic Cleaning"
        description="Professional home cleaning services for houses and apartments across London. Regular and one-off cleaning available."
        priceRange="£20-£50"
        serviceType="House Cleaning"
      />
      <ServiceSchema
        serviceName="End of Tenancy Cleaning"
        description="Move-out cleaning services to ensure full deposit return. Comprehensive cleaning of entire property to meet landlord standards."
        priceRange="£100-£250"
        serviceType="End of Tenancy Cleaning"
      />
      <ServiceSchema
        serviceName="Deep Cleaning"
        description="Thorough deep cleaning service for homes and offices. Every corner cleaned to perfection with attention to detail."
        priceRange="£80-£200"
        serviceType="Deep Cleaning"
      />
      <ServiceSchema
        serviceName="After Builders Cleaning"
        description="Post-construction cleaning to remove dust, debris, and building materials. Move-in ready results."
        priceRange="£150-£350"
        serviceType="After Builders Cleaning"
      />
      <ServiceSchema
        serviceName="Eco Cleaning"
        description="Environmentally conscious cleaning using eco-friendly products safe for your family, pets, and the planet."
        priceRange="£25-£60"
        serviceType="Eco Cleaning"
      />
      <ServicesDetailedSection />
    </>
  );
}
