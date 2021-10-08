import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react"


const styles = {
  contactlink: {
      textAlign: 'center',
      border: 'none',
  },
  contactctn:{ 
    display: 'flex', 
    justifyContent: 'center',
    background: "rgba(255, 255, 255, .5)"

  },
  profilectn:{
    background: "rgba(255, 255, 255, .7)",
    flexDirection:'column' ,
    width: "80%" ,
    margin: "0 auto",
  },
  box: {
    padding: "30px 0"
  },
  body: {
    background: "rgba(204, 175, 198, .5)"
  }
}

function Detail(props) {
  const [gig, setGig] = useState({})

 

  // When this component mounts, grab the gig with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  const {id} = useParams()

  useEffect(() => {
    API.getGig(id)
      .then(res => setGig(res.data))
      .catch(err => console.log(err));

     /* API.getUsers().then((results) => {
        this.setState({
        users: results.data.results,
                });
            });
      console.log(users) */
        
    
  }, )
 const { user } = useAuth0();

  

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <div style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp5042949.jpg)` }} className="container-fluid background-img1 text-center img-fluid" id="home" >
            
            <Row>

          <Col size="md-12" >
            <div className="d-flex justify-content-center"style={styles.profilectn}>
              <h1 className="text-center">
                <strong>{gig.title}</strong>
              </h1>
              <h4> <strong> Date: </strong>{new Date(gig.date).toDateString()}</h4>
              {/* Link below goes to external user profile */}
              
              <p className="text-left ml-6 mr-6">
               <strong> Payment: </strong> {gig.payment}
              </p>
              <p className="text-left ml-6 mr-6"> <strong>Description:</strong> {gig.description}</p>
              <a className= "text-right ml-6 mr-6" href={gig.name}><strong>User:</strong> {gig.user}</a>
              <p className="text-right ml-6 mr-6">
              <strong> Contact: </strong> {gig.contact}
              </p>
            </div>  
          </Col>
        </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div>
              
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/Homepage">← Back to Gigs</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
