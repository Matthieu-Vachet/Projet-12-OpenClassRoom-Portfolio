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

/*
    * Rendu de l'application
    * Description :
        - Rendu de l'application dans la balise root
*/

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
