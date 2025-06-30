
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookiesAccepted = localStorage.getItem('nutinova-cookies-accepted');
    if (!cookiesAccepted) {
      // Mostrar el banner después de un breve delay para mejor UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('nutinova-cookies-accepted', 'true');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('nutinova-cookies-accepted', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in">
      <div className="bg-white/95 backdrop-blur-lg border-t border-modern-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Contenido principal */}
            <div className="flex items-start gap-3 flex-1">
              <div className="flex-shrink-0 mt-1">
                <Cookie className="h-6 w-6 text-nutinova-asparagus" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-modern-gray-700 leading-relaxed">
                  <span className="font-semibold text-modern-gray-900">🍪 Usamos cookies para mejorar tu experiencia.</span>
                  {' '}Utilizamos cookies esenciales y de análisis para personalizar contenido y entender cómo interactúas con nuestro sitio web.{' '}
                  <Link 
                    to="/cookies" 
                    className="text-nutinova-asparagus hover:text-nutinova-asparagus/80 underline transition-colors"
                  >
                    Ver política de cookies
                  </Link>
                </p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50 transition-colors"
              >
                Solo esenciales
              </Button>
              <Button
                onClick={handleAcceptAll}
                className="bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white transition-colors"
              >
                Aceptar todas
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBanner(false)}
                className="text-modern-gray-500 hover:text-modern-gray-700 hover:bg-modern-gray-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
