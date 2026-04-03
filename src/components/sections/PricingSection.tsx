"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { QuoteModal } from "@/components/modals/QuoteModal";

const pricingExtras = [
  { name: "Oven cleaning", price: "£40" },
  { name: "Fridge cleaning", price: "£20" },
  { name: "Carpet cleaning", price: "£30 per room" },
  { name: "Window cleaning", price: "from £40" },
  { name: "Kitchen cleaning", price: "from £40" },
];

const features = [
  "Experienced & vetted cleaners",
  "Eco-friendly products available",
  "Same-day & next-day bookings",
  "No contracts, no hidden fees",
  "100% satisfaction guarantee",
  "Fully insured for your peace of mind",
];

export function PricingSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section className="py-24 bg-muted/30">
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
            Affordable Cleaning Services Near You in London
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Our cleaning services in London start from just £20/hour with no hidden fees and no long-term contracts. Whether you need a one-time deep clean or regular office cleaning in London, we have a plan that fits your budget..
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-background rounded-3xl border-2 border-primary/20 p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Starting From
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-primary">£20</span>
                <span className="text-2xl text-muted-foreground">/hour</span>
              </div>
              <p className="text-muted-foreground">
                Minimum 2 hours booking
              </p>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-xl font-bold mb-6 text-center">What's Included</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" className="rounded-full px-8" onClick={() => setIsQuoteModalOpen(true)}>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Optional Extras */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-3xl border p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Optional Extras</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pricingExtras.map((extra, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <span className="font-medium text-foreground">{extra.name}</span>
                  <span className="text-primary font-semibold">{extra.price}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6">
              All extras can be added to any cleaning package. Contact us for a personalised quote.
            </p>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Why Choose <span className="text-primary">LondonClean</span>?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            We provide professional, reliable and detail-oriented cleaning services at competitive prices. 
            Our team is punctual, responsive, and committed to leaving your home spotless. 
            We offer flexible scheduling and are fully insured for your peace of mind.
          </p>
          <p className="text-sm text-muted-foreground">
            We are fluent in both English and Russian.
          </p>
        </motion.div>
      </div>
      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </section>
  );
}
