"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TabItem {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const tabs: TabItem[] = [
  {
    number: "1",
    title: "Fully Vetted & Insured Cleaners Across London",
    description: "We specialize in delivering exceptional construction services with a focus on quality, integrity, and customer satisfaction. With over 20 years of experience.",
    image: "/punkt1.jpg",
    imageAlt: "Professional cleaning service in London",
  },
  {
    number: "2",
    title: "Office & Home Cleaning Services Near You",
    description: "We are dedicated to making your life easier by providing professional, reliable, and affordable cleaning services, ensuring a spotless and stress-free environment for you.",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Reliable cleaning services",
  },
  {
    number: "3",
    title: "Same-Day Bookings Available in Most London Areas",
    description: "Experience the perfect blend of cleanliness and convenience with our innovative solutions, ensuring a spotless environment effortlessly, saving you time and effort every day.",
    image: "/punkt3.jpg",
    imageAlt: "Convenient cleaning solutions",
  },
  {
    number: "4",
    title: "Eco-Friendly Products — Safe for Kids & Pets",
    description: "We create clean, fresh, and sparkling spaces with our professional cleaning services, ensuring a healthy and welcoming environment for your home or workplace.",
    image: "/punkt4.jpg",
    imageAlt: "Sparkling clean spaces",
  },
];


export function AboutSection() {
  const [activeTab, setActiveTab] = useState<string>("1");
  
  const currentTab = tabs.find(tab => tab.number === activeTab) || tabs[0];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Single Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full bg-muted"
              >
                <Image
                  src={currentTab.image}
                  alt={currentTab.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Content with Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col h-[500px] md:h-[600px] lg:h-[700px]"
          >
            {/* Title & Description */}
            <div className="flex-shrink-0 mb-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground mb-3 leading-tight"
              >
                Why Choose London Clean for Your Cleaning Service in London?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm md:text-base text-muted-foreground leading-snug"
              >
                We specialize in delivering exceptional cleaning services with a focus on quality, 
                integrity, and customer satisfaction across Greater London.
              </motion.p>
            </div>

            {/* Tab/Accordion List */}
            <div className="space-y-0 border-t border-border">
              {tabs.map((tab, idx) => (
                <motion.div
                  key={tab.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setActiveTab(tab.number)}
                    className={`w-full flex items-start gap-3 md:gap-4 py-6 md:py-8 lg:py-10 px-3 md:px-4 text-left transition-all duration-300 group ${
                      activeTab === tab.number
                        ? "bg-muted/50"
                        : "bg-transparent hover:bg-muted/30"
                    }`}
                  >
                    {/* Number */}
                    <span
                      className={`flex-shrink-0 text-lg md:text-xl font-bold transition-colors duration-300 ${
                        activeTab === tab.number
                          ? "text-foreground"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {tab.number}.
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-base md:text-lg font-bold mb-0 transition-colors duration-300 ${
                          activeTab === tab.number
                            ? "text-foreground"
                            : "text-foreground group-hover:text-foreground/90"
                        }`}
                      >
                        {tab.title}
                      </h4>

                      {/* Expandable Description */}
                      <AnimatePresence>
                        {activeTab === tab.number && tab.description && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-sm md:text-base text-muted-foreground leading-relaxed overflow-hidden"
                          >
                            {tab.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
