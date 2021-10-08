import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
<Auth0ProviderWithHistory>
<Auth0Provider
    domain="dev-9jk73ji7.us.auth0.com"
    clientId="d1wI0HZkZtpHyHTasQTmNvmZ61nBJxi4"
    redirectUri={window.location.origin}
    audience="https://dev-9jk73ji7.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
  <Router>
      <App />
  </Router>
</Auth0Provider>  
</Auth0ProviderWithHistory>,
  document.getElementById("root")
);