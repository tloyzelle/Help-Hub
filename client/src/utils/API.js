import axios from "axios";

export default {
  // Gets all gigs
  getGigs: function() {
    return axios.get("/api/gigs");
  },
  // Gets the gig with the given id
  getGig: function(id) {
    return axios.get("/api/gigs/" + id);
  },
  // Deletes the gig with the given id
  deleteGig: function(id) {
    return axios.delete("/api/gigs/" + id);
  },
  // Saves a gig to the database
  saveGig: function(gigData) {
    return axios.post("/api/gigs", gigData);
  },
  getUsers: function() {
    return axios.get("/api/v2/users");
  },
  // Gets the gig with the given id
  getUser: function(id) {
    return axios.get("/api/v2/users" + id);
  },

  // Saves a gig to the database
 
};
