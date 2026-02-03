import Script from 'next/script';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://london-clean01.co.uk",
    "name": "London Clean",
    "alternateName": "London Clean - Professional Cleaning Service",
    "description": "Professional cleaning services in London. Residential and commercial cleaning across Greater London with eco-friendly products. Book online today.",
    "url": "https://london-clean01.co.uk",
    "telephone": "+447438217078",
    "priceRange": "££",
    "email": "info@londonclean.co.uk",
    "logo": "https://london-clean01.co.uk/logo.png",
    "image": [
      "https://london-clean01.co.uk/og-image.jpg",
      "https://london-clean01.co.uk/cleaning-service.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raymor Court, 91 Upper Clapton Rd",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "postalCode": "E5 9BX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5636666",
      "longitude": "-0.0591997"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "566",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "London",
        "@id": "https://www.wikidata.org/wiki/Q84"
      },
      {
        "@type": "Place",
        "name": "Kensington"
      },
      {
        "@type": "Place",
        "name": "Chelsea"
      },
      {
        "@type": "Place",
        "name": "Westminster"
      },
      {
        "@type": "Place",
        "name": "Camden"
      },
      {
        "@type": "Place",
        "name": "Islington"
      },
      {
        "@type": "Place",
        "name": "Shoreditch"
      },
      {
        "@type": "Place",
        "name": "Mayfair"
      },
      {
        "@type": "Place",
        "name": "Canary Wharf"
      },
      {
        "@type": "Place",
        "name": "Notting Hill"
      },
      {
        "@type": "Place",
        "name": "Fulham"
      },
      {
        "@type": "Place",
        "name": "Battersea"
      },
      {
        "@type": "Place",
        "name": "Greenwich"
      },
      {
        "@type": "Place",
        "name": "Hammersmith"
      },
      {
        "@type": "Place",
        "name": "Wimbledon"
      },
      {
        "@type": "Place",
        "name": "Richmond"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Cleaning",
            "description": "Professional home cleaning services for houses and apartments in London"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "description": "Office and commercial space cleaning services across London"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning",
            "description": "Thorough deep cleaning service for homes and offices"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Carpet Cleaning",
            "description": "Professional carpet and upholstery cleaning"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "End of Tenancy Cleaning",
            "description": "Move-out cleaning services to ensure full deposit return"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/londonclean",
      "https://www.instagram.com/londonclean",
      "https://twitter.com/londonclean",
      "https://www.linkedin.com/company/londonclean"
    ],
    "paymentAccepted": "Cash, Credit Card, Debit Card, Bank Transfer",
    "currenciesAccepted": "GBP"
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
