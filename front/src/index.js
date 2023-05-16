import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';

import {Auth0ProviderWithNavigate} from "./auth0-provider-with-navigate";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Auth0ProviderWithNavigate>
                <App/>
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </Provider>
);
reportWebVitals();
