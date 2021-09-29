import React from "react";
import  { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/profile"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (   
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path = "/Profile">
            <Profile/>
          </Route>  
          <Route exact path = "/NoMatch">  
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
