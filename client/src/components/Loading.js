import React from "react";
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div className="d-flex justify-content-center">
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  <div>
  <p className= "text-center" >
    <strong> Loading... </strong>
  </p>
  </div>
  </div>
  </div>

  
);

export default Loading;