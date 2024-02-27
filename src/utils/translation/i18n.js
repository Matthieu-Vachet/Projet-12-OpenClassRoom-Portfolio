import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translationEN.json';
import translationFR from './translationFR.json';

/*
 * Configuration de la traduction
 * @exports i18n
 */

const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'fr',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
