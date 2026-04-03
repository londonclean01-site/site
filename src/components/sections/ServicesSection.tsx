"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Home, Building2, Sparkles, Layers, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "domestic",
    icon: Home,
    title: "Domestic Cleaning London",
    description: "Keep your home consistently clean and comfortable with our regular domestic cleaning services. We handle all the routine cleaning tasks so you can enjoy your free time.",
    features: ["Regular weekly or bi-weekly cleaning", "Kitchen & bathroom sanitization", "Flexible scheduling"],
    image: "/1serivce.jpeg"
  },
    {
    id: "office",
    icon: Layers,
    title: "Office Cleaning London",
    description: "Need reliable office cleaning in London? We provide daily, weekly, and one-off commercial cleaning for offices, retail spaces, and co-working hubs across Greater London. Flexible hours including early morning and weekend cleans.",
    features: ["Full deposit return guarantee", "Inspection-ready results", "Systematic deep cleaning"],
    image: "/2service.jpg"
  },
  {
    id: "end-of-tenancy",
    icon: Building2,
    title: "End of Tenancy Cleaning London",
    description: "Moving out? Leave the cleaning to us. Professional end of tenancy cleaning designed to meet landlord and letting agency standards across London.",
    features: ["Full deposit return guarantee", "Inspection-ready results", "Systematic deep cleaning"],
    image: "/2service.jpg"
  },
  {
    id: "deep-cleaning",
    icon: Sparkles,
    title: "Deep Cleaning London",
    description: "For a thorough and intensive clean, our deep cleaning services target every corner of your space. Perfect for spring cleaning or preparing for special occasions.",
    features: ["Every corner cleaned", "Hard-to-reach spots included", "Kitchen appliances deep cleaned"],
    image: "/3service.jpg"
  },
  {
    id: "after-builders",
    icon: Layers,
    title: "After Builders Cleaning",
    description: "Post-construction cleaning to remove dust, debris, and building materials. We'll make your newly renovated space move-in ready.",
    features: ["Dust & debris removal", "Window & surface cleaning", "Floor polishing"],
    image: "/4service.jpg"
  }
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Navigation List */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Effortless cleaning for your <span className="text-primary">home or office</span>
              </h2>
              
              <div className="flex flex-col gap-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 group",
                      activeService.id === service.id
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <service.icon className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      activeService.id === service.id ? "scale-110" : "group-hover:scale-110"
                    )} />
                    <span className="font-medium text-lg">{service.title}</span>
                    {activeService.id === service.id && (
                      <ArrowRight className="w-4 h-4 ml-auto animate-in fade-in slide-in-from-left-2" />
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <Button variant="outline" size="lg" className="w-full rounded-full" asChild>
                  <Link href="/services">Explore All Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Active Content Preview */}
          <div className="w-full lg:w-2/3">
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[500px] rounded-3xl bg-muted overflow-hidden p-8 md:p-12 flex flex-col justify-end">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  key={activeService.id}
                  src={activeService.image}
                  alt={`${activeService.title} background`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-[1]" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 text-white"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 text-white border border-white/20">
                    <activeService.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold mb-4">{activeService.title}</h3>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
                    {activeService.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {activeService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 border-none" asChild>
                    <Link href={`/services/${activeService.id}`}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
