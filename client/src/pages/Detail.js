import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [gig, setGig] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getGig(id)
      .then(res => setGig(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>{gig.title}</strong>
              </h1>
              <h3>{gig.date}</h3>
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
                {gig.payment}
              </p>
              <p className="text-center">
                {gig.contact}
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Homepage</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
