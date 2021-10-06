import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { ListItem, List  } from "../components/List";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";
import { useState, useEffect } from "react";





const Profile = () => {
  
  console.log(useAuth0());

  const { user, isAuthenticated } = useAuth0();


  return (
    isAuthenticated && (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className= "text-center">Welcome to {user.nickname}'s profile</h1>
          <span></span>
          <div className="text-center">
            <img alt= "headshot" src={user.picture}/>
          </div>
          <Container>  
            <div></div>
            <div></div>  
            <h4 className= "text-center">About</h4>
            <p className= "text-center">{user.sub.hobby}</p> 
          </Container> 
            <h4 className= "text-center">Contact</h4> 
          <List>
            <ListItem>
              <a className="list-group-item list-group-item-action"  href="mailto:{user.email}">{user.email}</a>
            </ListItem>
          </List> 
        </Col>
        <Col size="md-6 sm-12">
        </Col>
      </Row>
    </Container>
  ));
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});


// // src/views/profile.js

// import React from "react";

// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
//   console.log(useAuth0());

//   const { user, isLoading, isAuthenticated } = useAuth0();
//   // const { name, picture, email } = user;
//   // console.log(user);

//   return (
//     isAuthenticated && (
//     <div>
//       <div className="row align-items-center profile-header">
//         <div className="col-md-2 mb-3">
//           <img
//             src={user.picture}
//             alt="Profile"
//             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//           />
//         </div>
//         <div className="col-md text-center text-md-left">
//           <h2>{user.nickname}'s profile</h2>
//           <p className="lead text-muted">Contact: {user.email}</p>
//         </div>
//       </div>
//       <div className="row">
//         <pre className="col-12 text-light bg-dark p-4">
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       </div>
//     </div>)
//   );
// };

// export default Profile;