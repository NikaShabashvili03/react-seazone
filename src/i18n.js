import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    returnObjects: true,
    joinArrays: true,
    cleanCode: true,
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true,
      useSuspense: false
    },
});

export default i18n;