"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Ross",
    role: "Kensington, London",
    content: "Outstanding service! They transformed my messy home into a sparkling space. The team was well-trained, respectful, and completed the job on time. I appreciate their dedication and hard work.",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Chelsea, London",
    content: "We've been using their bi-weekly cleaning service for over a year. The team is consistently thorough, polite, and professional. Our home has never looked better!",
  },
  {
    id: 3,
    name: "James Thompson",
    role: "Canary Wharf, London",
    content: "Hired them for our office deep clean. Exceptional attention to detail and the staff were incredibly efficient. Our workspace looks and feels brand new.",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Shoreditch, London",
    content: "End of tenancy cleaning was absolutely spotless. Got my full deposit back without any issues. The team arrived on time and exceeded all expectations!",
  },
  {
    id: 5,
    name: "David Martinez",
    role: "Westminster, London",
    content: "After trying several cleaning companies, I finally found the perfect one. They're reliable, professional, and use eco-friendly products. Highly recommended!",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    role: "Notting Hill, London",
    content: "The deep cleaning service was incredible. Every corner of my flat was meticulously cleaned. The team was friendly and respectful of my belongings.",
  },
  {
    id: 7,
    name: "Robert Wilson",
    role: "Mayfair, London",
    content: "Professional service from start to finish. The booking process was easy, and the cleaners arrived exactly on time. My apartment has never been cleaner!",
  },
  {
    id: 8,
    name: "Amanda Foster",
    role: "Camden, London",
    content: "I was impressed by how thorough they were. They cleaned areas I didn't even think needed attention. Great value for money and exceptional quality.",
  },
  {
    id: 9,
    name: "Thomas Brown",
    role: "Hammersmith, London",
    content: "Their carpet cleaning service brought my old carpets back to life. The stains I thought were permanent are completely gone. Fantastic results!",
  },
  {
    id: 10,
    name: "Jennifer Lee",
    role: "Islington, London",
    content: "As a busy professional, having a reliable cleaning service is essential. They're flexible with scheduling and always deliver top-quality work.",
  },
  {
    id: 11,
    name: "Mark Davis",
    role: "Wimbledon, London",
    content: "The post-renovation cleaning was a huge job, but they handled it with ease. Every speck of dust was removed, and my home looked perfect.",
  },
  {
    id: 12,
    name: "Rachel Green",
    role: "Battersea, London",
    content: "I have two dogs and the team managed to remove all pet hair and odours. They're miracle workers! Will definitely book them again.",
  },
  {
    id: 13,
    name: "Daniel Cooper",
    role: "Greenwich, London",
    content: "Their window cleaning service is outstanding. Crystal clear windows and they even cleaned the frames. Professional and efficient team.",
  },
  {
    id: 14,
    name: "Sophie Turner",
    role: "Fulham, London",
    content: "Moved into a new flat and needed a deep clean. They made it shine! Every surface was spotless and the bathroom looked brand new.",
  },
  {
    id: 15,
    name: "Oliver Smith",
    role: "Richmond, London",
    content: "Best cleaning service in London! They're punctual, trustworthy, and their attention to detail is unmatched. Worth every penny!",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 inline-block">
            <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">Our satisfied customers</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            We're grateful for the positive experiences shared by our clients. Their kind words and honest feedback remind us why we're passionate about what we do.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="border-none shadow-lg bg-background">
              <CardContent className="p-8 md:p-12 h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="flex flex-col h-full"
                  >
                    <Quote className="w-12 h-12 text-primary mb-6 flex-shrink-0" />
                    
                    <div className="relative flex-1 mb-12 overflow-hidden">
                      <p className="text-base md:text-lg leading-relaxed text-foreground">
                        "{currentTestimonial.content}"
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">
                            {currentTestimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                        </div>
                      </div>

                      {/* Navigation Arrows */}
                      <div className="flex gap-2">
                        <button
                          onClick={goToPrevious}
                          className="w-10 h-10 rounded-full border border-border hover:bg-muted transition-colors flex items-center justify-center"
                          aria-label="Previous testimonial"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={goToNext}
                          className="w-10 h-10 rounded-full border border-border hover:bg-muted transition-colors flex items-center justify-center"
                          aria-label="Next testimonial"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Rating Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="mb-8">
                  <p className="text-7xl md:text-8xl font-bold mb-4">5.8</p>
                  <div className="flex gap-1 justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/40 text-yellow-400/40'}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm opacity-90">(566 Reviews)</p>
                </div>
                
                <div className="border-t border-primary-foreground/20 pt-6 w-full">
                  <p className="text-sm md:text-base opacity-90 leading-relaxed">
                    Our clients are at the heart of them piece of mind with our services from peace of mind.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
