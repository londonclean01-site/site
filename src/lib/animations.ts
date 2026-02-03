/**
 * Optimized animation configurations for SEO and performance
 * - Reduced motion for accessibility
 * - GPU-accelerated transforms
 * - Viewport-based triggers to reduce initial load
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeOut" }
};

// Hover animations for interactive elements
export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2, ease: "easeInOut" }
};

export const hoverLift = {
  whileHover: { y: -5 },
  transition: { duration: 0.2, ease: "easeInOut" }
};

// Delayed animations for sequential reveals
export const fadeInUpDelayed = (delay: number = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay, ease: "easeOut" }
});

// Mobile-optimized animations (reduced motion)
export const mobileOptimized = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-30px" },
  transition: { duration: 0.3, ease: "easeOut" }
};
