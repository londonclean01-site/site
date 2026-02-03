"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Slider } from "@/components/ui/slider";

const beforeAfterItems = [
  {
    id: "1",
    title: "Door Cleaning",
    before: "/before door.jpeg",
    after: "/after door.jpeg",
  },
  {
    id: "2",
    title: "Microwave Deep Clean",
    before: "/before micro.jpeg",
    after: "/after micro.jpeg",
  },
  {
    id: "3",
    title: "Window Cleaning",
    before: "/before window.jpeg",
    after: "/after window.jpeg",
  },
];

export function BeforeAfterSection() {
  const [activeItem, setActiveItem] = useState(beforeAfterItems[0]);
  const [sliderValue, setSliderValue] = useState([50]);

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Before and After
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            See the remarkable transformation our professional cleaning services bring to homes and offices across London. Every space deserves to shine.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div 
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            onMouseMove={(e) => {
              if (e.buttons === 1) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                setSliderValue([percentage]);
              }
            }}
            onTouchMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.touches[0].clientX - rect.left;
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
              setSliderValue([percentage]);
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
              setSliderValue([percentage]);
            }}
          >
            {/* After Image (Full) */}
            <div className="absolute inset-0 bg-muted pointer-events-none">
              <Image
                src={activeItem.after}
                alt={`${activeItem.title} - After`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Before Image (Clipped by slider) */}
            <div 
              className="absolute inset-0 bg-muted overflow-hidden pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
            >
              <Image
                src={activeItem.before}
                alt={`${activeItem.title} - Before`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
              style={{ left: `${sliderValue[0]}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-0.5 h-6 bg-gray-400"></div>
                  <div className="w-0.5 h-6 bg-gray-400"></div>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium pointer-events-none">
              Before
            </div>
            <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium pointer-events-none">
              After
            </div>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {beforeAfterItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItem(item);
                setSliderValue([50]);
              }}
              className={`relative h-24 md:h-32 rounded-xl overflow-hidden transition-all duration-300 ${
                activeItem.id === item.id
                  ? "ring-4 ring-primary scale-105"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={item.after}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                <span className="text-white text-xs md:text-sm font-medium">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
