import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profile from "./pages/profile";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from "./pages/Detail";


function App() {

  return (   
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
          
          </Route>
          <Route exact path = "/Profile">
            <Profile/>
          </Route>  
          <Route exact path="/gigs/:id">
            <Detail />
          </Route>
          <Route exact path = "/NoMatch">  
            <NoMatch />
          </Route>
          <Route exact path = "/Homepage">  
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
