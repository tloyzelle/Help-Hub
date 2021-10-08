import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { ListItem, List } from "../components/List";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";
import { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn"

const styles = {
  contactlink: {
      textAlign: 'center',
      border: 'none',
      color: 'black'
  },
  contactctn:{ 
    display: 'flex', 
    justifyContent: 'center',
    background: "rgba(255, 255, 255, .5)"

  },
  profilectn:{
    background: "rgba(255, 255, 255, .5)",
    flexDirection:'column' ,
    width: "80%" ,
    margin: "0 auto",
  },
  box: {
    padding: "30px 0"
  },
  body: {
    background: "rgba(204, 175, 198, .5)"
  },
  header: {
    padding: "200px 0px",
    fontFamily: "Raleway', sans-serif"
  }
}

const Profile = () => {

  console.log(useAuth0());

  const { user, isAuthenticated } = useAuth0();

  const [gigs, setGigs] = useState([])

  // Load all gigs and store them with setBooks
  useEffect(() => {
    loadGigs()
  }, [])

  // Loads all gigs and sets them to gigs
  function loadGigs() {
    API.getGigs()
      .then(res => {
        setGigs(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  console.log(gigs.date)

  // Deletes a gig from the database with a given id, then reloads gigs from the db
  function deleteGig(id) {
    API.deleteGig(id)
      .then(res => loadGigs())
      .catch(err => console.log(err));
  };

  return (
    isAuthenticated && (
      <div style={styles.box, styles.body}>
      <div style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp5042949.jpg)` }} className="container-fluid background-img1 text-center img-fluid" id="home" >
        <Row>
          <Col size="md-12">
            <div className="d-flex justify-content-center"style={styles.profilectn}>
            
            <span></span>
            <div className="text-center mt-3">
              <img alt="headshot" src={user.picture} />
            </div>
            <h3 className="text-center">{user.nickname}'s profile</h3>
            <Container>
              <div></div>
              <div></div>
              <h4 className="text-center">About</h4>
            </Container>
            
              <p className="text-right mb-3 mr-3"> Contact: 
              <a href="mailto:{user.email}" style={styles.contactlink}> {user.email} </a> 
              </p>
              </div>
          </Col>
        </Row>
        </div>

      <Container fluid>
        <div style={styles.box}>
          <h1 className="text-center ">
          &#11015; My Tasks &#11015;
          </h1>
        </div>
        
        {gigs.length > 0 && <List>
          {gigs.filter(gig => user.name === gig.user).map(gig => (
            <ListItem key={gig._id}>
              <Link to={"/gigs/" + gig._id}>
                <strong>
                  {gig.title}
                </strong>
              </Link>
              <p><strong>Date:</strong> {new Date(gig.date).toDateString()}</p>
              <p><strong>Description:</strong> {gig.description}</p>
              <p><strong>Location:</strong> {gig.location}</p>
              <DeleteBtn onClick={() => deleteGig(gig._id)} />
            </ListItem>
          ))}
        </List>}
       
      </Container>
       </div>
    ));
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />
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