import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_TOKEN, SET_AUTH_ERROR, SET_LOADER } from "./actionTypes";

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
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
      .get(`/api/auth/login?username=${input}&password=${password}`)
      .then((response) => {
        const { user } = response.data.data;
        ls.setItems({
          token: user.api_token,
          username: user.username,
          userId: user.id,
          isAdmin: user.is_admin,
          blockId: user.block,
        });
        dispatch(
          setAuthParams({
            token: user.api_token,
            username: user.username,
            userId: user.id,
            isAdmin: user.is_admin,
            blockId: user.block,
          })
        );
        dispatch({ type: SET_LOADER, payload: false });
      })
      .catch((err) => {
        dispatch({ type: SET_AUTH_ERROR, payload: true });
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}

export function logout() {
  console.log("logOUT");
  const userData = ls.getItems();
  return (dispatch) => {
    console.log("logOUT2");
    dispatch(setAuthParams(null));
    iaxios.get("/api/auth/logout", {
      headers: {
        "Api-Token": `${userData.token}`,
      },
    });
    ls.removeItems("username", "token", "userId", "isAdmin");
    console.log("logOUT3");
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
