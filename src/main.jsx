import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './utils/dataProvider/DataProvider.jsx';
import App from './App.jsx';
import i18n from './utils/translation/i18n.js';

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
