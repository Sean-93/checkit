import axios from "axios";
const BASEURL = "https://opengraph.io/api/1.1/site/";
const APIKEY = "app_id=87a00c1f-4c85-4aa7-b173-0ea5ce0624de";

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
    // Updates the Checkit with the given id
  updateCheckit: function(id, record) {
      return axios.put("/api/checkit/" + id);
  },
  // Saves a Checkit post to the database
  saveCheckit: function(checkitData) {
    return axios.post("/api/checkit/create", checkitData);
  }
    // Deletes the post with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   }
};
