
import { useState, useEffect, useCallback } from 'react';

interface ConsentPreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface ConsentRecord {
  preferences: ConsentPreferences;
  timestamp: string;
  version: string;
}

const CONSENT_VERSION = '1.0';
const CONSENT_KEY = 'nutinova-consent-preferences';

export const useConsentManager = () => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    essential: true, // Siempre true, son necesarias
    analytics: false,
    marketing: false,
    functional: false
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Cargar preferencias guardadas
  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (savedConsent) {
      try {
        const consentRecord: ConsentRecord = JSON.parse(savedConsent);
        setPreferences(consentRecord.preferences);
        setConsentGiven(true);
      } catch (error) {
        console.error('Error loading consent preferences:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Guardar consentimiento
  const saveConsent = useCallback((newPreferences: Partial<ConsentPreferences>) => {
    const updatedPreferences = {
      ...preferences,
      ...newPreferences,
      essential: true // Siempre true
    };

    const consentRecord: ConsentRecord = {
      preferences: updatedPreferences,
      timestamp: new Date().toISOString(),
      version: CONSENT_VERSION
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consentRecord));
    setPreferences(updatedPreferences);
    setConsentGiven(true);
  }, [preferences]);

  // Aceptar todas las cookies
  const acceptAll = useCallback(() => {
    saveConsent({
      analytics: true,
      marketing: true,
      functional: true
    });
  }, [saveConsent]);

  // Rechazar cookies opcionales
  const rejectOptional = useCallback(() => {
    saveConsent({
      analytics: false,
      marketing: false,
      functional: false
    });
  }, [saveConsent]);

  // Revocar consentimiento
  const revokeConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_KEY);
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    setConsentGiven(false);
  }, []);

  // Verificar si un tipo específico de cookie está permitido
  const hasConsent = useCallback((type: keyof ConsentPreferences) => {
    return preferences[type];
  }, [preferences]);

  return {
    consentGiven,
    preferences,
    isLoaded,
    saveConsent,
    acceptAll,
    rejectOptional,
    revokeConsent,
    hasConsent
  };
};

export default useConsentManager;
