"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { fadeInUp, fadeInUpDelayed, scaleIn } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-6 max-w-7xl relative z-10">
        <motion.div
          {...fadeInUp}
          className="relative rounded-[2.5rem] bg-primary overflow-hidden px-6 py-16 md:px-16 md:py-24"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Heading & Benefits */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
                Book a Cleaning Service in London Today!</span>
              </h2>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Stop searching for "cleaning services near me" — London Clean is already here. Our professional cleaners cover 15+ areas across Greater London and are ready to transform your home or office. Get a free quote in minutes.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Fully Insured & Vetted Professionals</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Eco-Friendly Products Safe for Pets & Children</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Flexible Scheduling 7 Days a Week</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Side - Quote Request Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Request a Free Quote
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Fill out the form and we'll get back to you within 24 hours
              </p>
              <QuoteRequestForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
