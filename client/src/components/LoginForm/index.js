import React, {useState} from "react";
import './style.css';
import PropTypes from 'prop-types';
import App from "../../App"

// Bulma Stylesheet
// When making changes to style.. make changes to both css sheets as 
// both(login/signup) css upload to page and affect both cards since classnames are the same


function LoginForm(props) {

  return (
    <div className="container container-fluid">
      <div className="box" id="login-up-box">
      <label className="form-title is-size-5">Login</label>
        <form className="field control form login-form">  
          <br></br>
        <div className="control has-icons-left">
          <input for="email-login" class="input" type="text" id="email-login" placeholder="Email"></input>
          <div className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
          <br></br>
        <div className="control has-icons-left">
          <input for="password-login" class="input" type="password" id="password-login" placeholder="Password"></input>
          <div className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <br></br>
        <button className="button is-normal is-primary is-fullwidth" type="submit">Login</button>
        </form>
      </div>
    </div>
    
  );
}


export default LoginForm;

