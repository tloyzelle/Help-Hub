import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/profile";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./pages/Detail";

import ProtectedRoute from "./auth/protected-route";
import { Loading } from "./components";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (   
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
          
          </Route>
          <ProtectedRoute path = "/Homepage">  
            <Homepage />
          </ProtectedRoute>
          <ProtectedRoute path = "/Profile">
            <Profile/>
          </ProtectedRoute>  
          <ProtectedRoute path="/gigs/:id">
            <Detail />
          </ProtectedRoute>
          <Route exact path = "/NoMatch">  
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
