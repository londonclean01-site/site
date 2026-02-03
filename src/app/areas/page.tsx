import { Metadata } from 'next';
import { londonAreas } from '@/lib/data/london-areas';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Areas We Serve - Cleaning Services Across London',
  description: 'Professional cleaning services across Greater London. We serve 15+ areas including Kensington, Chelsea, Westminster, Camden, and more. Find your local cleaning service.',
  keywords: [
    'London cleaning areas',
    'cleaning service locations',
    'Greater London cleaners',
    'local cleaning service',
    'cleaning postcodes London',
  ],
  openGraph: {
    title: 'Areas We Serve - London Clean',
    description: 'Find professional cleaning services in your London area. Covering 15+ districts across Greater London.',
    url: 'https://london-clean01.co.uk/areas',
  },
  alternates: {
    canonical: 'https://london-clean01.co.uk/areas',
  },
};

export default function AreasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Cleaning Services Across <span className="text-primary">Greater London</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional cleaning services in 15+ London areas. Find your local cleaning team and experience the London Clean difference.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {londonAreas.map((area) => (
              <Link key={area.slug} href={`/areas/${area.slug}`}>
                <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {area.name}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {area.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.postcodes.slice(0, 3).map((postcode) => (
                        <span
                          key={postcode}
                          className="px-2 py-1 bg-muted text-xs font-medium rounded"
                        >
                          {postcode}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{area.landmarks.length}</span> landmarks served
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Area?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly expanding our service areas across London. Get in touch to check if we can serve your location.
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
