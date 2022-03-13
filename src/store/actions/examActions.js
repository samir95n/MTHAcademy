import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_TOKEN, ADD_QUESTİON } from "./actionTypes";

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

export function getQuestion(id) {
  return (dispatch) => {
    iaxios.get(`/examsPart1/${id}`).then((response) => {
      const data = response.data;
      //ls.setItems({ username, token, userId: id });
      dispatch({
        ...data,
        type: ADD_QUESTİON,
      });
    });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(setAuthParams(null));
    iaxios.post("/auth/logout/");
    ls.removeItems("username", "token", "userId");
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
