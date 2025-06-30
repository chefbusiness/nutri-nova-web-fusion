
import { useEffect } from 'react';

interface AnalyticsProps {
  gtmId?: string;
  gaId?: string;
  clarityId?: string;
}

const Analytics = ({ 
  gtmId = "GTM-XXXXXXX", 
  gaId = "G-XXXXXXXXXX",
  clarityId = "YOUR_CLARITY_ID"
}: AnalyticsProps) => {
  
  useEffect(() => {
    // Google Tag Manager
    if (gtmId && typeof window !== 'undefined') {
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script2);
    }

    // Google Analytics 4
    if (gaId && typeof window !== 'undefined') {
      const script3 = document.createElement('script');
      script3.async = true;
      script3.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script3);

      const script4 = document.createElement('script');
      script4.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}', {
          page_title: document.title,
          page_location: window.location.href,
          custom_map: {'custom_parameter': 'nutinova_engagement'}
        });
      `;
      document.head.appendChild(script4);
    }

    // Microsoft Clarity
    if (clarityId && typeof window !== 'undefined') {
      const script5 = document.createElement('script');
      script5.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `;
      document.head.appendChild(script5);
    }
  }, [gtmId, gaId, clarityId]);

  return (
    <>
      {/* GTM NoScript Fallback */}
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};

// Analytics utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

export const trackFormSubmission = (formType: string, department?: string) => {
  trackEvent('form_submit', {
    form_type: formType,
    department: department || 'unknown',
    timestamp: Date.now()
  });
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', {
    page_name: pageName,
    timestamp: Date.now()
  });
};

export default Analytics;
