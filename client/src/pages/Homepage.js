import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import GigBtn from "../components/GigBtn"
import GigForm from "../components/GigForm"
import AddTask from "../components/AddTask";


function Gigs() {
  // Setting our component's initial state
  const [gigs, setGigs] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all gigs and store them with setBooks
  useEffect(() => {
    loadGigs()
  }, [])

  // Loads all gigs and sets them to gigs
  function loadGigs() {
    API.getGigs()
      .then(res => 
        setGigs(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a gig from the database with a given id, then reloads gigs from the db
  function deleteGig(id) {
    API.deleteGig(id)
      .then(res => loadGigs())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveGig method to save the gig data
  // Then reload gigs from the database

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveGig({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadGigs())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Application Desc</h1>
            </Jumbotron>
              <Input />
              <GigBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={AddTask}
              >
                Submit Book
              </GigBtn>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {gigs.length ? (
              <List>
                {gigs.map(gig => (
                  <ListItem key={gig._id}>
                    <Link to={"/gigs/" + gig._id}>
                      <strong>
                        {gig.title} by {gig.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteGig(gig._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Gigs;
