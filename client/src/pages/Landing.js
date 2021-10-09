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
  },
  image1: {
    borderRadius: "2%",
    backgroundImage: "url(https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/images/media/images/persuasive-ads-coca-cola.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    height: "200px",
    margin: "auto"
  },
  image2: {
    borderRadius: "2%",
    backgroundImage: "url(https://nextgenpharmacist.com/wp-content/uploads/2021/01/ngp-webgraphics-beasponsor.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    height: "200px",
    margin: 'auto'
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
        <p className= "text-center"> Needing help with a task or looking to make some extra money, you came to the right place. Help Hub is an all in one application that allows you to post and search through jobs in your local area. To begin just sign up for a free account!</p>
      </div>
        <Row >
          <Col size="md-6">
            <Jumbotron>
              <h1>Ad</h1>
            </Jumbotron>
            <div style={styles.image1} className="mx-5"></div>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Sponsored By </h1>
            </Jumbotron>
              <div style={styles.image2} className="mx-5"></div>
         </Col>
        </Row>
     </Container>

     <footer class="text-center" id="footer">
      <br></br>
      <br></br>
      <br></br>
      <p><small>  &#169; 2021 Help Hub </small></p>
      <p><small> Thank you for your support! ❤️ </small></p>
      <br></br>
      </footer>
     </div>
    );
  }; 


export default Landing;
