import axios from "axios";

export default {
  // Gets all Checkit postings
  getCheckits: function() {
    console.log("API getCheckits");
    return axios.get("/api/checkit");
  },
  // Gets the Checkit post with the given id
  getCheckit: function(id) {
    return axios.get("/api/checkit/" + id);
  },
  // Deletes the post with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a Checkit post to the database
  saveCheckit: function(checkitData) {
    return axios.post("/api/checkit/create", checkitData);
  }
};
