import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Professional Cleaning Team",
  description: "Learn about London Clean - London's trusted cleaning service provider. Expert team, eco-friendly products, and commitment to excellence. Serving Greater London since 2020. Read our story.",
  keywords: ["about London Clean", "cleaning company London", "professional cleaners", "eco-friendly cleaning", "trusted cleaning service"],
  openGraph: {
    title: "About London Clean - Professional Cleaning Team",
    description: "Learn about London's trusted cleaning service provider with expert team and eco-friendly products.",
    url: "https://londonclean.co.uk/about",
  },
  alternates: {
    canonical: "https://londonclean.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About London Clean</h1>
        <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
          Discover the London Clean difference. We're not just another cleaning service; we're a dedicated team committed to providing exceptional cleaning with meticulous attention to detail.
        </p>

        {/* Our Difference */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Difference</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            At London Clean, we're a young, passionate team specialising in professional cleaning services throughout London. We pride ourselves on noticing the details others miss, ensuring a truly thorough clean every time.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide fast and high-quality cleaning services in London, focusing on comfort and excellent results for every client. Our professional team arrives on time, uses modern equipment and safe, effective cleaning products, and pays close attention to every detail. We work efficiently and carefully, delivering spotless spaces without wasting your time.
          </p>
        </div>

        {/* Who We Serve */}
        <div className="mb-16 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're dedicated to serving individuals like end-of-tenancy clients and busy families seeking a consistently clean home. We understand your concerns – you need a service that's not only clean but also reliable and meticulous. We prioritise your peace of mind.
          </p>
        </div>

        {/* Our Promise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Promise to You</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            When you choose London Clean, we want you to remember that we treat every client with care and dedication. We are:
          </p>
          <ul className="space-y-3 text-lg text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Responsible</strong> - We take ownership of every job</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Punctual</strong> - Always on time, every time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Responsive</strong> - Quick to communicate and adapt</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Detail-oriented</strong> - Able to bring everything into order with precision</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">✓</span>
              <span><strong>Flexible</strong> - Accommodating schedule to suit your needs</span>
            </li>
          </ul>
          <p className="text-lg text-muted-foreground leading-relaxed mt-6">
            Your satisfaction is our top priority. We know what we're doing, and we're committed to doing it right.
          </p>
        </div>

        {/* Testimonial */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center">
          <p className="text-xl md:text-2xl font-medium text-foreground mb-4 italic">
            "London Clean transformed my flat! It was spotless and smelled amazing. I highly recommend them!"
          </p>
          <p className="text-muted-foreground">— Satisfied Customer</p>
        </div>
      </div>
    </div>
  );
}
