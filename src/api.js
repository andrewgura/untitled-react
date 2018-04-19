import axios from "axios";

export default {
  user: {
    //makes the api request with axios with the form data
    //get user object(email + token) from response
    login: credentials =>
      axios.post("/api/auth", { credentials }).then(res => res.data.user)
  }
};
