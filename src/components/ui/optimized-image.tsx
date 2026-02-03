import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  title?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * Optimized Image component with proper SEO attributes
 * - Enforces alt text (required)
 * - Lazy loading by default
 * - Proper title attribute
 * - Next.js Image optimization
 */
export function OptimizedImage({
  alt,
  title,
  loading = 'lazy',
  priority = false,
  ...props
}: OptimizedImageProps) {
  if (!alt) {
    console.warn('OptimizedImage: alt text is required for SEO');
  }

  return (
    <Image
      {...props}
      alt={alt}
      title={title || alt}
      loading={priority ? undefined : loading}
      priority={priority}
    />
  );
}

// Pre-configured image components for common use cases
export function HeroImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} priority loading="eager" />;
}

export function ServiceImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} loading="lazy" />;
}

export function ThumbnailImage(props: OptimizedImageProps) {
  return <OptimizedImage {...props} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />;
}
