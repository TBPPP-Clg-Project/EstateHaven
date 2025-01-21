import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-5x0et7m6m04ee610.us.auth0.com"
    clientId="2L83Podlim2XJIwRbply9eH5M4hF6gE1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
);