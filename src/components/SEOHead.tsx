
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "Nutinova Foods - Innovando para un Futuro Alimentario Saludable y Sostenible",
  description = "Nutinova Foods lidera la innovación en alimentos saludables, veganos, sin gluten y sin azúcar. Comprometidos con la sostenibilidad y la inclusión alimentaria.",
  keywords = "alimentos saludables, vegano, sin gluten, sin azúcar, sostenibilidad, innovación alimentaria, Nutinova, México",
  image = "/nutinova-og-image.jpg",
  url = "https://nutinovafoods.com",
  type = "website"
}: SEOHeadProps) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nutinova Foods" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Spanish" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Nutinova Foods" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Nutinova Foods",
          "description": description,
          "url": url,
          "logo": `${url}/nutinova-logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+52-1-234-567-8900",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "English"]
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MX"
          },
          "sameAs": [
            "https://linkedin.com/company/nutinova-foods",
            "https://twitter.com/nutinovafoods",
            "https://instagram.com/nutinovafoods"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
