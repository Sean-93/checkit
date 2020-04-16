import axios from "axios";
const BASEURL = "https://opengraph.io/api/1.1/site/";
const APIKEY = "app_id=87a00c1f-4c85-4aa7-b173-0ea5ce0624de";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
