import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAreaBySlug, getAllAreaSlugs } from '@/lib/data/london-areas';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, CheckCircle2, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAreaSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    return {
      title: 'Area Not Found',
    };
  }

  return {
    title: area.title,
    description: area.metaDescription,
    keywords: [
      `cleaning service ${area.name}`,
      `cleaners ${area.name}`,
      `house cleaning ${area.name}`,
      `${area.name} cleaning company`,
      ...area.postcodes.map(code => `cleaning ${code}`),
    ],
    openGraph: {
      title: area.title,
      description: area.metaDescription,
      url: `https://londonclean.co.uk/areas/${slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://londonclean.co.uk/areas/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const services = [
    'Regular Domestic Cleaning',
    'Deep Cleaning Service',
    'End of Tenancy Cleaning',
    'Carpet & Upholstery Cleaning',
    'Office Cleaning',
    'Window Cleaning',
  ];

  const benefits = [
    'Fully Insured & Vetted Cleaners',
    'Eco-Friendly Products',
    'Flexible Scheduling',
    'Same-Day Service Available',
    'No Contract Required',
    '100% Satisfaction Guarantee',
  ];

  // Area-specific Schema
  const areaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Cleaning Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "London Clean",
      "@id": "https://londonclean.co.uk"
    },
    "areaServed": {
      "@type": "Place",
      "name": area.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": area.name,
        "addressRegion": "Greater London",
        "addressCountry": "GB",
        "postalCode": area.postcodes.join(", ")
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "GBP"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "566"
    }
  };

  return (
    <>
      <Script
        id={`area-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaSchema) }}
        strategy="afterInteractive"
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">{area.postcodes.join(' • ')}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {area.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {area.description}
              </p>

              <div className="flex items-center gap-2 mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8/5 from 566 reviews</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <a href="tel:+447438217078">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Services in {area.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {area.servicesDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{service}</h3>
                    <p className="text-muted-foreground">
                      Professional {service.toLowerCase()} service in {area.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Us in {area.name}?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We've been serving the {area.name} community with pride, understanding the unique needs of this area and delivering cleaning services that exceed expectations.
                </p>

                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Local Landmarks We Serve</h3>
                  <p className="text-muted-foreground mb-6">
                    We clean properties throughout {area.name}, including areas near:
                  </p>
                  <ul className="space-y-3">
                    {area.landmarks.map((landmark, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{landmark}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-semibold mb-3">Postcodes Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.postcodes.map((postcode, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {postcode}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Cleaning in {area.name}?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free, no-obligation quote today. Same-day service available for urgent bookings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link href="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="tel:+447438217078">
                  <Phone className="w-5 h-5 mr-2" />
                  +44 7438 217078
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
