import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

//thunk function
//takes data submited from loginpage to make an api request
//then dispatch user
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.serverJWT = user.token;
    dispatch(userLoggedIn(user));
  });

//Remove json web token when user clicks logout
export const logout = () => dispatch => {
  localStorage.removeItem("serverJWT");
  dispatch(userLoggedOut());
};
