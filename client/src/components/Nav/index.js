import React from "react";

function Nav() {
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
      <a className="navbar-brand" href="/profile">
        Profile
      </a>
    </nav>
  );
}

export default Nav;
