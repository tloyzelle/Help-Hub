import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
<Auth0ProviderWithHistory>
  <Router>
      <App />
  </Router>,
</Auth0ProviderWithHistory>,
  document.getElementById("root")
);