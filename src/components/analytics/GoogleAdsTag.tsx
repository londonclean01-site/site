'use client';

import Script from 'next/script';

interface GoogleAdsTagProps {
  conversionId: string;
}

export function GoogleAdsTag({ conversionId }: GoogleAdsTagProps) {
  if (!conversionId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${conversionId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${conversionId}');
          `,
        }}
      />
    </>
  );
}

// Track Google Ads conversion when form is submitted
export const trackGoogleAdsConversion = (conversionId: string, conversionLabel?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: conversionLabel ? `${conversionId}/${conversionLabel}` : conversionId,
    });
  }
};
