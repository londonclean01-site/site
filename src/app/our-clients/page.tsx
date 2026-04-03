"use client";

import { motion } from "framer-motion";
import { AllGallerySection } from "@/components/sections/AllGallerySection";

export default function OurClientsPage() {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our work gallery</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            We take pride in serving a wide range of clients across London. Below are galleries showcasing our work for various clients.
          </p>
        </motion.div>

        <div className="space-y-24">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Clients</h2>
            <AllGallerySection />
          </div>

        </div>
      </div>
    </div>
  );
}
