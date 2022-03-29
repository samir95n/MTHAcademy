import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_TOKEN, SET_AUTH_ERROR } from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

function setAuthParams(authData) {
  // if authData exists and has token then set that token as default heador to axios instance
  // With this way we wont need pass token for each request.
  // if authData doesn't exist then delete default header of iaxios
  if (authData && authData.token) {
    iaxios.defaults.headers.common["Authorization"] = `Token ${authData.token}`;
  } else if (authData === null) {
    delete iaxios.defaults.headers.common["Authorization"];
  }
  return {
    ...authData,
    type: SET_TOKEN,
  };
}

export function login(input, password) {
  return (dispatch) => {
    iaxios
      .get(`/api/auth/login?username=${input}&password=${password}`)
      .then((response) => {
        const { user, access_token } = response.data.data;
        ls.setItems({
          token: access_token,
          username: user.username,
          userId: user.id,
          isAdmin: user.is_admin,
        });
        dispatch(
          setAuthParams({
            token: access_token,
            username: user.username,
            userId: user.id,
            isAdmin: user.is_admin,
          })
        );
      })
      .catch((err) => {
        dispatch({ type: SET_AUTH_ERROR, payload: true });
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(setAuthParams(null));
    iaxios.post("/auth/logout/");
    ls.removeItems("username", "token", "userId", "isAdmin");
  };
}

// get auth data from local storage and set as auth params
export function checkAuth() {
  return (dispatch) => {
    const authData = ls.getItems();
    if (authData.token) {
      dispatch(setAuthParams(authData));
    } else {
      dispatch(setAuthParams(null));
    }
  };
}
