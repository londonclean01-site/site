export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "London Clean",
    "image": "https://london-clean.com/og-image.jpg", // TODO: Replace with actual image
    "url": "https://london-clean.com", // TODO: Replace with actual domain
    "telephone": "+44 20 1234 5678", // TODO: Replace with actual phone
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 High Street",
      "addressLocality": "London",
      "postalCode": "SW1A 1AA",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5074,
      "longitude": -0.1278
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "££",
    "sameAs": [
      "https://www.facebook.com/londonclean",
      "https://www.instagram.com/londonclean"
    ]
  };
};

export const generateServiceSchema = (serviceName: string, description: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": "London Clean"
    },
    "areaServed": {
      "@type": "City",
      "name": "London"
    },
    "description": description
  };
};
