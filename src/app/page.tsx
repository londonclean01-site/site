import { JsonLd } from "@/components/seo/JsonLd";
import { generateLocalBusinessSchema } from "@/lib/seo/schema";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CleaningSolutionsCombinedSection } from "@/components/sections/CleaningSolutionsCombinedSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { GallerySection } from "@/components/sections/GallerySection";
import { OurClientsSection } from "@/components/sections/OurClientsSection";

export default function Home() {
  const schema = generateLocalBusinessSchema();

  return (
    <>
      <JsonLd data={schema} />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <CleaningSolutionsCombinedSection />
      <BeforeAfterSection />
      <GallerySection />
     // <OurClientsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
