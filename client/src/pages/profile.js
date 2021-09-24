import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { ListItem, List  } from "../components/List";
import {Form, TextArea } from "../components/Form"


function Profile() {
  return (
    <Container fluid>
    <Row>
      <Col size="md-12">
       
        <h1 className= "text-center">Welcome to my profile</h1>
        <span></span>
    <div className="text-center">
      <img alt= "headshot" src="img/avatar-icon.png"/>
    </div>
    <Container>  
        <h4 className= "text-center">Name</h4>
        <div></div>
        <p className= "text-center">Billy Bob Joe</p>
        <div></div>  
        <h4 className= "text-center">About</h4>
        <p className= "text-center">About me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me about me</p> 
        </Container> 
        <h4 className= "text-center">Contact</h4> 
        <List>
       <ListItem>
       <a className="list-group-item list-group-item-action"  href="">1234@1234.com</a>
       </ListItem>
       <ListItem>
       <a className="list-group-item list-group-item-action" href="">Phone: xxx.xxx.xxxx</a>
       </ListItem>
          </List> 
      </Col>
      <Col size="md-6 sm-12">

            


      </Col>
    </Row>
  </Container>
  );
}

export default Profile;
