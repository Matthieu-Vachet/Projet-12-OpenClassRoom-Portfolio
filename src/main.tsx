/* Iportation des modules */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18n from './utils/translation/i18n.js';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

/* Importation des données */
import { I18nextProvider } from 'react-i18next';

/* Importation des composants */
import App from './App.js';

/* Importation des styles */
import '../src/styles/global.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error('No root element found');
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <Suspense fallback='Loading...'>
                <SpeedInsights />
                <Analytics />
                <App />
            </Suspense>
        </I18nextProvider>
    </React.StrictMode>,
);
