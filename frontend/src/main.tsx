import React from 'react';
import ReactDOM from 'react-dom/client';
import { initApp } from '@multiversx/sdk-dapp/out/methods/initApp/initApp';
import { EnvironmentsEnum } from '@multiversx/sdk-dapp/out/types/enums.types';
import App from './App';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

const config = {
    storage: { getStorageCallback: () => sessionStorage },
    dAppConfig: {
        nativeAuth: true,
        environment: EnvironmentsEnum.devnet,
    },
};

initApp(config).then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <React.StrictMode>
            <App />
            <Analytics />
        </React.StrictMode>,
    );
});
