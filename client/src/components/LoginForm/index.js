import React, {useState} from "react";
import './style.css';


// Bulma Stylesheet
// When making changes to style.. make changes to both css sheets as 
// both(login/signup) css upload to page and affect both cards since classnames are the same



 

function LoginForm(props) {


  return (
    <div className="container container-fluid">
      <div class="box" id="login-up-box">
      <label class="form-title is-size-5">Login</label>
        <form class="field control form login-form" onSubmit={handleSubmit}>  
          <br></br>
        <div class="control has-icons-left">
          <input for="email-login" class="input" type="text" id="email-login" placeholder="Email"></input>
          <div class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </div>
        </div>
          <br></br>
        <div class="control has-icons-left">
          <input for="password-login" class="input" type="password" id="password-login" placeholder="Password"></input>
          <div class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </div>
        </div>
        <br></br>
        <button class="button is-normal is-primary is-fullwidth" type="submit">Login</button>
        </form>
      </div>
    </div>
    
  );
}


export default LoginForm;

