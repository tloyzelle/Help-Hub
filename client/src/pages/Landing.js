import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import 'bootstrap/dist/css/bootstrap.min.css';


function Landing(props) {

  return (
    
      <Container fluid>
        <div>
        <h3 className="text-center">Welcome to HelpHub</h3>
        </div>
        <Row>
          <Col size="md-12">
            <Jumbotron></Jumbotron>
          </Col>
        </Row>
        <Row>
        </Row>
     </Container>
    );
  }; 


export default Landing;
