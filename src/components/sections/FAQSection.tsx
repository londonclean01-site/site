"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQSchema, FAQItem } from "@/components/seo/FAQSchema";

const faqs: FAQItem[] = [
  {
    question: "What areas of London do you cover?",
    answer: "We provide professional cleaning services across 15+ areas in Greater London, including Kensington, Chelsea, Westminster, Camden, Islington, Shoreditch, Mayfair, Canary Wharf, Notting Hill, Fulham, Battersea, Greenwich, Hammersmith, Wimbledon, and Richmond. We cover all major postcodes in these areas."
  },
  {
    question: "Are your cleaners vetted and insured?",
    answer: "Yes, absolutely. All our cleaning professionals are fully vetted, background-checked, and insured. We maintain comprehensive public liability insurance and ensure all team members meet our high standards of professionalism and trustworthiness."
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use eco-friendly, professional-grade cleaning products that are safe for children, pets, and the environment. All our products comply with UK health and safety regulations. If you have specific product preferences or allergies, we're happy to accommodate your requests."
  },
  {
    question: "How do I book a cleaning service?",
    answer: "Booking is simple! You can request a free quote through our contact form, call us directly at +44 20 1234 5678, or email us at info@londonclean.co.uk. We'll discuss your requirements, provide a transparent quote, and schedule a convenient time for your service."
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer: "No, we bring all necessary cleaning equipment and eco-friendly products. However, if you prefer us to use specific products or equipment you provide, we're happy to do so. Just let us know your preference when booking."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We require 24 hours' notice for cancellations or rescheduling. Cancellations made with less than 24 hours' notice may incur a cancellation fee. We understand emergencies happen, and we'll always try to be as flexible as possible."
  },
  {
    question: "How long does a typical cleaning take?",
    answer: "Cleaning duration depends on the size of your property and the type of service. A standard 2-bedroom apartment typically takes 2-3 hours for regular cleaning, while deep cleaning may take 4-6 hours. We'll provide an accurate time estimate when you book."
  },
  {
    question: "Do you offer same-day cleaning services?",
    answer: "Yes, subject to availability. We understand urgent needs arise, and we do our best to accommodate same-day bookings in most London areas. Contact us as early as possible for same-day service requests."
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <FAQSchema faqs={faqs} />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Got questions? We've got answers. Find everything you need to know about our cleaning services.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border rounded-xl overflow-hidden bg-card"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="text-lg font-semibold pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="/contact"
              className="text-primary font-semibold hover:underline"
            >
              Contact us for more information →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
