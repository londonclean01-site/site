"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Building2, 
  Sparkles, 
  HardHat, 
  PartyPopper, 
  Leaf, 
  Crown,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { QuoteModal } from "@/components/modals/QuoteModal";

const services = [
  {
    icon: Home,
    title: "Domestic Cleaning",
    description: "Keep your home consistently clean and comfortable with our regular domestic cleaning services. We handle all the routine cleaning tasks so you can enjoy your free time.",
    features: [
      "Regular weekly or bi-weekly cleaning",
      "Dusting, vacuuming, and mopping",
      "Kitchen and bathroom sanitization",
      "Flexible scheduling to suit your needs"
    ],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Building2,
    title: "End of Tenancy Cleaning",
    description: "Moving out? Leave the cleaning to us. We provide professional end of tenancy cleaning services designed to meet landlord and letting agency standards across London.",
    features: [
      "Deep cleaning of entire property",
      "Inspection-ready results",
      "Full deposit return guarantee",
      "Systematic and thorough approach"
    ],
    color: "bg-purple-500/10 text-purple-600",
    highlighted: true
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "For a thorough and intensive clean, our deep cleaning services target every corner of your space. Perfect for spring cleaning or preparing for special occasions.",
    features: [
      "Detailed cleaning of all areas",
      "Hard-to-reach spots included",
      "Removal of built-up dirt and grime",
      "Kitchen appliances deep cleaned"
    ],
    color: "bg-cyan-500/10 text-cyan-600"
  },
  {
    icon: HardHat,
    title: "After Builders Cleaning",
    description: "Post-construction cleaning to remove dust, debris, and building materials. We'll make your newly renovated space move-in ready.",
    features: [
      "Dust and debris removal",
      "Window and surface cleaning",
      "Floor polishing and protection",
      "Safe disposal of construction waste"
    ],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    icon: PartyPopper,
    title: "After Party Cleaning",
    description: "Had a great party? Let us handle the cleanup. We'll restore your space to its pre-party condition quickly and efficiently.",
    features: [
      "Quick turnaround service",
      "Stain and spill treatment",
      "Trash removal and disposal",
      "Surface sanitization"
    ],
    color: "bg-pink-500/10 text-pink-600"
  },
  {
    icon: Leaf,
    title: "Eco Cleaning",
    description: "Environmentally conscious cleaning using eco-friendly products that are safe for your family, pets, and the planet.",
    features: [
      "100% eco-friendly products",
      "Non-toxic and biodegradable",
      "Safe for children and pets",
      "Sustainable cleaning practices"
    ],
    color: "bg-green-500/10 text-green-600"
  },
  {
    icon: Crown,
    title: "VIP / Luxury Cleaning",
    description: "Premium cleaning service for luxury homes and high-end properties. White-glove service with meticulous attention to detail.",
    features: [
      "Highly trained specialists",
      "Premium cleaning products",
      "Discretion and professionalism",
      "Customized cleaning plans"
    ],
    color: "bg-amber-500/10 text-amber-600"
  }
];

export function ServicesDetailedSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Discover Our Exceptional Cleaning Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We offer a comprehensive range of cleaning services designed to meet the diverse needs of our London clientele. 
            From regular domestic cleans to specialized deep cleans, we've got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 ${
                  service.highlighted ? 'border-primary/50 bg-primary/5' : 'bg-background'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-muted/30 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            What Makes Us Stand Out
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">Experienced & vetted cleaners</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">Eco-friendly options available</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">Same-day & next-day bookings</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">No contracts, no hidden fees</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm">Fully insured & professional</span>
            </div>
          </div>
          <Button size="lg" className="rounded-full px-8" onClick={() => setIsQuoteModalOpen(true)}>
            Get a Free Quote
          </Button>
        </motion.div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center bg-primary/5 border border-primary/20 rounded-2xl p-6"
        >
          <h4 className="text-xl font-bold text-primary mb-2">Special Offer</h4>
          <p className="text-muted-foreground">
            Refer a friend and receive a <strong>20% discount</strong> on your next cleaning service! 
            Share the joy of a spotless home with your friends and family while enjoying great savings.
          </p>
        </motion.div>
      </div>
      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </section>
  );
}
