'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) return;

    // Use window.location.search for search params to avoid SSR issues
    const searchParams = typeof window !== 'undefined' ? window.location.search : '';
    const url = pathname + searchParams;
    
    // Send pageview with custom URL
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, measurementId]);

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}

// Event tracking helper
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific event trackers for London Clean
export const trackPhoneClick = () => {
  trackEvent('click', 'Contact', 'Phone Call');
};

export const trackEmailClick = () => {
  trackEvent('click', 'Contact', 'Email');
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'Form', formName);
};

export const trackQuoteRequest = () => {
  trackEvent('click', 'Conversion', 'Quote Request');
};

export const trackAreaView = (areaName: string) => {
  trackEvent('view', 'Area Page', areaName);
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('view', 'Service Page', serviceName);
};
