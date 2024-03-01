/**
 * @file i18n.js
 * @module i18n
 * @description Ce module configure et initialise i18next, une bibliothèque d'internationalisation pour JavaScript.
 * Il importe les traductions en anglais et en français et les ajoute aux ressources de i18next.
 * Il définit également la langue par défaut sur le français.
 * @requires i18next
 * @requires react-i18next
 * @requires ./translationEN.json
 * @requires ./translationFR.json
 */

/* Importation des modules */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/* Importation des traductions */
import translationEN from './translationEN.json';
import translationFR from './translationFR.json';

const resources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

/**
 * Initialise i18next avec les ressources de traduction et la configuration.
 * Définit la langue par défaut sur le français.
 * Utilise le point comme séparateur de clé.
 * Désactive l'échappement des valeurs pour l'interpolation.
 */
i18n.use(initReactI18next).init({
    resources,
    lng: 'fr',
    keySeparator: '.',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
