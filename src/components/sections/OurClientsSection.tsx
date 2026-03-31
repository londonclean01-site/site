"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const clients = [
  { name: "Client 1", logo: "/placeholder/clients/client1.png" },
  { name: "Client 2", logo: "/placeholder/clients/client2.png" },
  { name: "Client 3", logo: "/placeholder/clients/client3.png" },
  { name: "Client 4", logo: "/placeholder/clients/client4.png" },
  { name: "Client 5", logo: "/placeholder/clients/client5.png" },
];

export function OurClientsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-base md:text-lg text-muted-foreground">We are proud to serve a diverse range of clients across London.</p>
        </motion.div>

        <div
          ref={carouselRef}
          className="flex overflow-x-auto scrollbar-hide gap-8 items-center justify-start py-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-48 h-24 relative"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="object-contain w-full h-full"
              />
              <p className="text-center text-sm mt-2 text-muted-foreground">{client.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            asChild
          >
            <Link href="/our-clients">
              See All Clients
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
