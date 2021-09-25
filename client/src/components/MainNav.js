import React from "react";

import AuthenticationButton from "./AuthBtn";

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
      <a className="navbar-brand" href="/">
        HomeLogo
      </a>
      <a className="navbar-brand" href="/login">
        Filter
      </a>
      <a className="navbar-brand" href="/login">
        Login
      </a>
      <a className="navbar-brand" href="/Profile">
        Profile
      </a>
      <a className="navbar-brand" href="/Homepage">
        Gigs
      </a>
    </nav>
  );
}

export default MainNav;