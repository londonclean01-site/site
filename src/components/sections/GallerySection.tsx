"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryImages = [
  "/placeholder/gallery1.jpg",
  "/placeholder/gallery2.jpg",
  "/placeholder/gallery3.jpg",
  "/placeholder/gallery4.jpg",
  "/placeholder/gallery5.jpg",
  "/placeholder/gallery6.jpg",
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Gallery</h2>
          <p className="text-base md:text-lg text-muted-foreground">See the quality of our cleaning services through these before and after photos.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border shadow-sm"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/90 border-0">
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage || ''}
                alt="Zoomed image"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>

        
      </div>
    </section>
  );
}
