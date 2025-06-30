
import { useEffect } from 'react';

interface AnalyticsProps {
  gtmId?: string;
  gaId?: string;
}

const Analytics = ({ 
  gtmId = "GTM-XXXXXXX", 
  gaId = "G-XXXXXXXXXX" 
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
          page_location: window.location.href
        });
      `;
      document.head.appendChild(script4);
    }
  }, [gtmId, gaId]);

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

export default Analytics;
