import React from "react";
import './style.css';

// Bulma Stylesheet
// When making changes to style.. make changes to both css sheets as 
// both(login/signup) css upload to page and affect both cards since classnames are the same

function SignUpForm() {
  return (
    <div className="container container-fluid">
      <div className="box" id="sign-up-box">
      <label className="form-title is-size-5">Sign Up</label>
        <form className="field form signup-form">  
        <br></br>
        <div className="control has-icons-left">
          <input className="input" type="text" id="username-signup" placeholder="Username"></input>
          <div className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <br></br>
        <div className="control has-icons-left">
          <input className="input" type="email" id="email-signup" placeholder="Email"></input>
          <div className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </div>
        </div>
        <br></br>
        <div className="control has-icons-left">
          <input className="input" type="password" id="password-signup" placeholder="Password"></input>
          <div className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </div>
        </div>
        <br></br>
        <button className="button is-normal is-info is-fullwidth" type="submit">Signup</button>
        </form>
        </div>
    </div>

    
  );
}

export default SignUpForm;
