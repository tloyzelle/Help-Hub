import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUp";

function Login(props) {
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
            {/* <Jumbotron /> */}
            <LoginForm />
            <SignUpForm />
          </Col>
        </Row>
        <Row>
         
        </Row>
     </Container>
    );
  }; 


export default Login;
