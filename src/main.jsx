/**
 * @file main.jsx
 * @module main
 * @description Ce module est le point d'entrée de l'application React. Il rend l'application dans la balise root du document HTML.
 * Il utilise le mode strict de React pour mettre en évidence les problèmes potentiels dans l'application.
 * Il utilise également le fournisseur I18next pour l'internationalisation et le fournisseur de données pour gérer les données de l'application.
 * @requires react
 * @requires react-dom/client
 * @requires ./utils/translation/i18n.js
 * @requires react-i18next
 * @requires ./utils/dataProvider/DataProvider.jsx
 * @requires ./App.jsx
 * @requires ../src/styles/global.scss
 */

/* Iportation des modules */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './utils/translation/i18n.js';

/* Importation des données */
import { I18nextProvider } from 'react-i18next';
import { DataProvider } from './utils/dataProvider/DataProvider.jsx';

/* Importation des composants */
import App from './App.jsx';

/* Importation des styles */
import '../src/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback='Loading...'>
                <DataProvider>
                    <App />
                </DataProvider>
            </Suspense>
        </I18nextProvider>
    </React.StrictMode>,
);
