
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import useConsentManager from '@/hooks/useConsentManager';

const CookieBanner = () => {
  const {
    consentGiven,
    preferences,
    isLoaded,
    acceptAll,
    rejectOptional,
    saveConsent,
    revokeConsent
  } = useConsentManager();
  
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [tempPreferences, setTempPreferences] = useState(preferences);

  useEffect(() => {
    if (isLoaded && !consentGiven) {
      // Mostrar el banner después de un breve delay para mejor UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, [isLoaded, consentGiven]);

  useEffect(() => {
    setTempPreferences(preferences);
  }, [preferences]);

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
  };

  const handleRejectOptional = () => {
    rejectOptional();
    setShowBanner(false);
  };

  const handleShowPreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    saveConsent(tempPreferences);
    setShowPreferences(false);
    setShowBanner(false);
  };

  const handlePreferenceChange = (key: keyof typeof tempPreferences, value: boolean) => {
    if (key === 'essential') return; // No se puede cambiar
    setTempPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Banner principal */}
      {showBanner && (
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
                    variant="ghost"
                    size="sm"
                    onClick={handleShowPreferences}
                    className="text-modern-gray-600 hover:text-modern-gray-700 min-h-[44px]"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Personalizar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRejectOptional}
                    className="border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50 transition-colors min-h-[44px]"
                  >
                    Solo esenciales
                  </Button>
                  <Button
                    onClick={handleAcceptAll}
                    className="bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white transition-colors min-h-[44px]"
                  >
                    Aceptar todas
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowBanner(false)}
                    className="text-modern-gray-500 hover:text-modern-gray-700 hover:bg-modern-gray-100 transition-colors min-h-[44px] min-w-[44px]"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de preferencias detalladas */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-modern-gray-900">
              Preferencias de Cookies
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <p className="text-sm text-modern-gray-600">
              Elige qué tipo de cookies quieres permitir. Puedes cambiar estas preferencias en cualquier momento.
            </p>

            <div className="space-y-4">
              {/* Cookies esenciales */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-modern-gray-900">Cookies Esenciales</h4>
                  <p className="text-xs text-modern-gray-500">
                    Necesarias para el funcionamiento básico del sitio
                  </p>
                </div>
                <Switch checked={true} disabled className="ml-4" />
              </div>

              {/* Cookies de análisis */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-modern-gray-900">Análisis</h4>
                  <p className="text-xs text-modern-gray-500">
                    Nos ayudan a entender cómo usas el sitio
                  </p>
                </div>
                <Switch 
                  checked={tempPreferences.analytics}
                  onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                  className="ml-4"
                />
              </div>

              {/* Cookies de marketing */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-modern-gray-900">Marketing</h4>
                  <p className="text-xs text-modern-gray-500">
                    Para personalizar anuncios y contenido
                  </p>
                </div>
                <Switch 
                  checked={tempPreferences.marketing}
                  onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                  className="ml-4"
                />
              </div>

              {/* Cookies funcionales */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-modern-gray-900">Funcionales</h4>
                  <p className="text-xs text-modern-gray-500">
                    Mejoran la experiencia del usuario
                  </p>
                </div>
                <Switch 
                  checked={tempPreferences.functional}
                  onCheckedChange={(checked) => handlePreferenceChange('functional', checked)}
                  className="ml-4"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                variant="outline"
                onClick={() => setShowPreferences(false)}
                className="flex-1 min-h-[44px]"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="flex-1 bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 min-h-[44px]"
              >
                Guardar Preferencias
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;
