"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/modals/QuoteModal";

export function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
                Cleaning Services in London <span className="text-primary">for your peace of mind</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Professional and eco-friendly cleaning services in London for homes and offices. Whether you need a one-off deep clean or regular office cleaning in London, our vetted team is near you and ready to help — 7 days a week.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="rounded-full text-base h-12 px-8" onClick={() => setIsQuoteModalOpen(true)}>
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
                    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=faces"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={src}
                        alt={`Customer ${i + 1}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-muted-foreground">Trusted by 500+ Londoners</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
{/* Hero Image */}
<div className="flex-1 w-full">
  <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
    <Image 
      src="/heroblock.png"
      alt="Professional cleaning service in modern London home"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1200px"
    />
  </div>
</div>
        </div>
      </div>
      <QuoteModal open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen} />
    </section>
  );
}
