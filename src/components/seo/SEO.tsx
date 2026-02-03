import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl: string;
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = 'https://london-clean01.co.uk/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  noindex = false,
  author,
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const fullTitle = `${title} | London Clean`;
  
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: 'London Clean' }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      locale: 'en_GB',
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: 'London Clean',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@londonclean',
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  // Add article-specific metadata
  if (ogType === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: author ? [author] : undefined,
    };
  }

  return metadata;
}

// Helper function for blog posts
export function generateBlogPostMetadata(
  title: string,
  description: string,
  slug: string,
  keywords: string[],
  author: string = 'London Clean',
  publishedDate: string,
  modifiedDate?: string
): Metadata {
  return generateSEOMetadata({
    title,
    description,
    keywords,
    ogType: 'article',
    canonicalUrl: `https://london-clean01.co.uk/blog/${slug}`,
    author,
    publishedTime: publishedDate,
    modifiedTime: modifiedDate,
  });
}

// Helper function for area pages
export function generateAreaMetadata(
  areaName: string,
  description: string,
  slug: string,
  postcodes: string[]
): Metadata {
  return generateSEOMetadata({
    title: `Professional Cleaning Service in ${areaName}`,
    description,
    keywords: [
      `cleaning service ${areaName}`,
      `cleaners ${areaName}`,
      `house cleaning ${areaName}`,
      ...postcodes.map(code => `cleaning ${code}`),
    ],
    canonicalUrl: `https://london-clean01.co.uk/areas/${slug}`,
  });
}

// Helper function for service pages
export function generateServiceMetadata(
  serviceName: string,
  description: string,
  slug: string
): Metadata {
  return generateSEOMetadata({
    title: serviceName,
    description,
    keywords: [
      serviceName.toLowerCase(),
      `${serviceName.toLowerCase()} London`,
      `professional ${serviceName.toLowerCase()}`,
    ],
    canonicalUrl: `https://london-clean01.co.uk/services/${slug}`,
  });
}
