import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch =>
  //takes data submited from loginpage to make an api request
  //then dispatch user
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
