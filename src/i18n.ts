import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', 
    supportedLngs: ['en', 'ar'], 
    
    defaultNS: "common",
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' 
    },
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'], 
      caches: ['localStorage'], 
      
      // Convert browser language codes to supported languages
      convertDetectedLanguage: (lng) => {
        // If browser language starts with 'ar' (like 'ar-SA', 'ar-EG'), use 'ar'
        if (lng.startsWith('ar')) return 'ar';
        return 'en';
      }
    }
  });

export default i18n;