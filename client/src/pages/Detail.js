import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react"

function Detail(props) {
  const [gig, setGig] = useState({})

  // When this component mounts, grab the gig with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getGig(id)
      .then(res => setGig(res.data))
      .catch(err => console.log(err));
  }, [])

  const { user, isLoading, isAuthenticated } = useAuth0();

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>{gig.title}</strong>
              </h1>
              <h3> <strong> Date: </strong>{gig.date}</h3>
              <a className= "text-center" href= {user.nickname}>{user.nickname}</a>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div>
              <h1 className="text-center">Description</h1>
              <p className="text-center">
                {gig.description}
              </p>
              <p className="text-center">
               <strong> Payment: </strong> {gig.payment}
              </p>
              <p className="text-center">
              <strong> Contact: </strong> {gig.contact}
              </p>
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
