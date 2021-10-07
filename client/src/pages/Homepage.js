import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";

const styles = {
  detailcontent: {
    marginTop: '1rem',
  },
  }    

function Gigs() {

  // Setting our component's initial state
  const [gigs, setGigs] = useState([])
  const [formObject, setFormObject] = useState({})
  
  const { user, isAuthenticated } = useAuth0();

  // Load all gigs and store them with setBooks
  useEffect(() => {
    loadGigs()
  }, [])

  // Loads all gigs and sets them to gigs
  function loadGigs() {
    API.getGigs()
      .then(res => {
        setGigs(res.data)
       
      })
      .catch(err => console.log(err));
  };

  // Deletes a gig from the database with a given id, then reloads gigs from the db
 /* function deleteGig(id) {
    API.deleteGig(id)
      .then(res => loadGigs())
      .catch(err => console.log(err));
  } */

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveGig method to save the gig data
  // Then reload gigs from the database

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.description) {
      API.saveGig({
        title: formObject.title,
        description: formObject.description,
        date: formObject.date,
        location: formObject.location,
        payment: formObject.payment,
        contact: formObject.contact,
        user: user.name
        
      })
      .then(() => setFormObject({
       
        title: "",
        description: "",
        date: "",
        location: "",
        payment: "",
        contact: "",
        user: ""
      }))
        .then(res => loadGigs())
        .catch(err => console.log(err));
        
    }
  };
// set the search components initial state
  const [searchInput, setSearchInput] = useState('');

  const searchItems = (searchValue) => {
    setSearchInput(searchValue)
    if (searchInput !== '') {
        const filteredData = gigs.filter((gig) => {
            return Object.values(gig).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredResults(filteredData)
    }
    else{
        setFilteredResults(gigs)
    }
}
const filteredData = gigs.filter((gig) => {
  return Object.values(gig).join('').toLowerCase().includes(searchInput.toLowerCase())
  })

 console.log(filteredData)

 const [filteredResults, setFilteredResults] = useState(filteredData);
  
  console.log(gigs.length);
  console.log(searchInput.length)

    return (
      isAuthenticated && (
      <div>
      <Header />
      <Container fluid>
        <Row style={styles.detailcontent}>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add a Gig</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
                value={formObject.title}
              />
              <Input
                onChange={handleInputChange}
                name="description"
                placeholder="Description (required)"
                value={formObject.description}
              />
              <Input
                onChange={handleInputChange}
                name="date"
                placeholder="Date (required)"
                value={formObject.date}
              />
               <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Location (required)"
                value={formObject.location}
              />
              <Input
                onChange={handleInputChange}
                name="payment"
                placeholder="Payment (optional)"
                value={formObject.payment}
              />
               <Input
                onChange={handleInputChange}
                name="contact"
                placeholder="Contact (required)"
                value={formObject.contact}
              />
              <FormBtn
                onClick={handleFormSubmit}
              >
                Submit Job
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1 className= "mb-4"> Gigs List</h1>
              <div></div>
              <Input icon='search'
                placeholder='Search a Location'
                onChange={(e) => searchItems(e.target.value)}
         ></Input>
         </Jumbotron>   
            {(searchInput.length <= 1) ? (
              <List> {
                gigs.map(gig => (
                  <ListItem key={gig._id}>
                    <Link to={"/gigs/" + gig._id}>
                      <strong>
                       {gig.title}
                      </strong>
                      </Link>
                      <p><strong>Date:</strong> {gig.date}</p>
                      <p><strong>Location:</strong> {gig.location}</p>                 
                    {/* <DeleteBtn onClick={() => deleteGig(gig._id)} /> */}
                  </ListItem>
                ))}
                </List>
            ) : searchInput.length > 1 ? (
              <List>
                {filteredResults.map(gig => (
                  <ListItem key={gig._id}>
                    <Link to={"/gigs/" + gig._id}>
                      <strong>
                       {gig.title}
                      </strong>
                      </Link>
                      <p><strong>Date:</strong> {gig.date}</p>
                      <p><strong>Location:</strong> {gig.location}</p>                 
                    {/* <DeleteBtn onClick={() => deleteGig(gig._id)} /> */}
                  </ListItem>
                ))}
              </List>

              ): gigs.length == null ? 
              // If gigs.length = 0

              <p> "No results found" </p>
              : 0    
                }
          </Col>
        </Row>
      </Container>
      </div>

    ));
    }

    export default withAuthenticationRequired(Gigs, {
      onRedirecting: () => <Loading />,
    });
