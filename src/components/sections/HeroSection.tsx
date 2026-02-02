"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                #1 Cleaning Service in London
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
                Quality cleaning for your <span className="text-primary">peace of mind</span> in London.
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Professional, reliable, and eco-friendly cleaning services for homes and offices across Greater London. We make your space sparkle while you focus on what matters.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg" className="rounded-full text-base h-12 px-8" asChild>
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                      {/* Placeholder for user avatars */}
                      <div className="w-full h-full bg-gray-200" /> 
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
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-muted"
            >
               {/* Note: In a real project, we would use a real image here. 
                   For now, using a colored div placeholder that matches the design aesthetic. */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-primary/20">
                  <SparklesIcon className="w-32 h-32" />
               </div>
               {/* 
               <Image 
                 src="/hero-image.jpg" 
                 alt="Professional cleaner in a modern London apartment"
                 fill
                 className="object-cover"
                 priority
               />
               */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1"
    >
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
      <path d="M19 11h2m-1 -1v2" />
    </svg>
  );
}
