import React from "react";
import AuthNav from "./AuthNav";

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <a className="navbar-brand" href="/Profile">
        Profile
      </a>
      <a className="navbar-brand" href="/Homepage">
        Gigs
      </a>
      <AuthNav />

    </nav>
  );
}

export default MainNav;