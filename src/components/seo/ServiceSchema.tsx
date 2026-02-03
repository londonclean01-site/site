import Script from 'next/script';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  priceRange?: string;
  serviceType?: string;
}

export function ServiceSchema({ serviceName, description, priceRange = "££", serviceType }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType || serviceName,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "London Clean",
      "@id": "https://londonclean.co.uk",
      "telephone": "+447438217078",
      "email": "info@londonclean.co.uk",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Raymor Court, 91 Upper Clapton Rd",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "postalCode": "E5 9BX",
        "addressCountry": "GB"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "London",
      "@id": "https://www.wikidata.org/wiki/Q84"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "GBP",
      "priceRange": priceRange
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "566",
      "bestRating": "5",
      "worstRating": "1"
    },
    "termsOfService": "https://londonclean.co.uk/terms",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://londonclean.co.uk/contact",
      "servicePhone": {
        "@type": "ContactPoint",
        "telephone": "+447438217078",
        "contactType": "customer service"
      }
    }
  };

  return (
    <Script
      id={`service-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
