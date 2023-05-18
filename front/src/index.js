import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import {Auth0Provider} from "@auth0/auth0-react";

import {Auth0ProviderWithNavigate} from "./auth0-provider-with-navigate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    // <Auth0ProviderWithNavigate>
    <Auth0Provider domain="dev-yimkvuigive5f1vc.us.auth0.com" clientId="wfnJlEwz5vgNbmbMrT0LeIM20IgcNGc2"
                   authorizationParams={{
                       redirect_uri: window.location.origin
                   }}>
        <Provider store={store}>
            {/*<BrowserRouter>*/}
            <App/>
            {/*</BrowserRouter>*/}
        </Provider>
    </Auth0Provider>
    // </Auth0ProviderWithNavigate>
);
reportWebVitals();
