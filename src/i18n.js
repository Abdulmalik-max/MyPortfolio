import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

i18n
    .use(LanguageDetector) // Detects user's browser language
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources: {
            en: { translation: enTranslations },
            ar: { translation: arTranslations }
        },
        fallbackLng: 'en', // Default language if detection fails
        interpolation: {
            escapeValue: false // React already escapes values to prevent XSS
        }
    });

export default i18n;