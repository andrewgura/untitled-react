import axios from "axios";

export default {
  user: {
    //makes the api request with axios with the form data
    //get user object(email + token) from response
    login: cred => axios.post("/api/auth", { cred }).then(res => res.data.user)
  }
};
