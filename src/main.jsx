import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from './utils/dataProvider/DataProvider.jsx';
import App from './App.jsx';

import '../src/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </React.StrictMode>,
);
