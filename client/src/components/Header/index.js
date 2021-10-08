import React from "react";
import './style.css';
// import background from './images/portrait2.jpg';

const Header = () => {

  return (
    <div style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp5042949.jpg)` }} className="container-fluid background-img1 text-center img-fluid" id="home" >
      <h1 className="display-5 fw-normal" id="name-title"> HELP HUB </h1>
      <h6 className="text-center" id="job-subtitle">Almost any task, just ask!</h6>
    </div>
  )
}

export default Header;