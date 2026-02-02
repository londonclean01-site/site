"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-primary overflow-hidden px-6 py-16 md:px-16 md:py-24 text-center md:text-left"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
                A cleaner space is just a <span className="text-white/80">click away!</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Why waste your valuable time on cleaning when you can leave it to the professionals? 
                Our expert team in London is ready to transform your space.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Vetted Staff</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Eco-Friendly</span>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Button 
                size="lg" 
                variant="secondary" 
                className="h-16 px-10 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Book an Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
