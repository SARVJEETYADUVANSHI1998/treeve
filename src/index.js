import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { AppProvider } from './context/productcontext';
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

       <Auth0Provider
    domain="dev-sblkwbp308sq42fz.us.auth0.com"
    clientId="cqnNLtDLmoCAKlEbWKDC0F0nTV3JRkzf"
    redirectUri={window.location.origin}
  >
       <AppProvider>
           <App/>
      </AppProvider>   
      </Auth0Provider>

);
