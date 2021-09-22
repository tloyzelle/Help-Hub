import axios from "axios";

export default {
  // Gets all books
  getGigs: function() {
    return axios.get("/api/gigs");
  },
  // Gets the book with the given id
  getGig: function(id) {
    return axios.get("/api/gigs/" + id);
  },
  // Deletes the book with the given id
  deleteGig: function(id) {
    return axios.delete("/api/gigs/" + id);
  },
  // Saves a book to the database
  saveGig: function(gigData) {
    return axios.post("/api/gigs", gigData);
  }
};
