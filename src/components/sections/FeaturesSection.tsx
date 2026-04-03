"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Leaf, Award } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    icon: Shield,
    title: "Fresh Results, Every Visit",
    description: "Step into a space that feels as fresh as it looks. Our cleaning services are designed to rejuvenate cleanliness efficient processes.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling Around You",
    description: "You can focus on what truly matters. With efficient processes, expert teams, and thorough attention to detail.",
  },
  {
    icon: Leaf,
    title: "Spotless Homes & Offices Across London",
    description: "Our expert cleaning services go beyond the surface to ensure every corner of your home or office.",
  },
];

export function FeaturesSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            London's Trusted Cleaning Service — Home & Office
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            At London Clean, we go beyond the surface. Our expert cleaning teams serve clients across Greater London — from domestic homes in Kensington to busy offices in Canary Wharf. When you search for "cleaning services near me", we're the local answer you can count on.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
