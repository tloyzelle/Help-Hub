import React from "react";
import { Container } from "../components/Grid";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/Header"
import Jumbotron from "../components/Jumbotron";
import { Col, Row } from "../components/Grid";

const styles = {
  body: {
    background: "rgba(204, 175, 198, .5)",
  },
  font: {
    font: "sans-serif",
    padding: "50px"
  }
}



function Landing(props) {

  return (
    <div style = {styles.body}>
    <Container fluid>
      <Header>
      </Header>
      <div style = {styles.font}>
        <h3  className= "text-center">Welcome to HelpHub</h3>
        <p className= "text-center"> Click on "gigs" to see who needs help! </p>
      </div>
        <Row >
          <Col size="md-6">
            <Jumbotron>
              <h1>Ad</h1>
            </Jumbotron>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sponsored By </h1>
            </Jumbotron>

      </Col>
      </Row>
     </Container>
     </div>
    );
  }; 


export default Landing;
