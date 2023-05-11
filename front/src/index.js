import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <Provider store={store}>
                   <Auth0Provider 
      domain='dev-wjsrjkvvbr55wssc.us.auth0.com' 
      clientId='BiKcEixIVCOkQy4xcnUeydfUkKn1MWVO' 
      redirectUri={window.location.origin}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>
</Provider>

);
reportWebVitals();