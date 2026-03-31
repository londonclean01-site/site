"use client";

import { motion } from "framer-motion";
import { GallerySection } from "@/components/sections/GallerySection";

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
          <p className="text-base md:text-lg text-muted-foreground">
            We take pride in serving a wide range of clients across London. Below are galleries showcasing our work for various clients.
          </p>
        </motion.div>

        <div className="space-y-24">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Client 1</h2>
            <GallerySection />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Client 2</h2>
            <GallerySection />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Client 3</h2>
            <GallerySection />
          </div>
        </div>
      </div>
    </div>
  );
}
