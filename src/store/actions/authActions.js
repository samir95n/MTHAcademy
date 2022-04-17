import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import {
  SET_TOKEN,
  SET_AUTH_ERROR,
  SET_LOADER,
  SET_INITIAL_ADMIN,
  SET_INITIAL_AUTH,
  SET_INITIAL_ERROR,
  SET_INITIAL_EXAM,
  SET_INITIAL_PAGE,
} from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

function setAuthParams(authData) {
  // if authData exists and has token then set that token as default heador to axios instance
  // With this way we wont need pass token for each request.
  // if authData doesn't exist then delete default header of iaxios
  if (authData && authData.token) {
    iaxios.defaults.headers.common["Api-Token"] = authData.token;
  } else if (authData === null) {
    delete iaxios.defaults.headers.common["Api-Token"];
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
        });
        dispatch(
          setAuthParams({
            token: user.api_token,
            username: user.username,
            userId: user.id,
            role: user.role,
            blockId: user.block_id,
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
  const userData = ls.getItems();
  return (dispatch) => {
    dispatch(setAuthParams(null));
    dispatch({ type: SET_INITIAL_ADMIN });
    dispatch({ type: SET_INITIAL_AUTH });
    dispatch({ type: SET_INITIAL_ERROR });
    dispatch({ type: SET_INITIAL_EXAM });
    dispatch({ type: SET_INITIAL_PAGE });
    iaxios.get("/api/auth/logout", {
      headers: {
        "Api-Token": `${userData.token}`,
      },
    });
    ls.removeItems("token");
  };
}
export function checkByToken(Apitoken) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
      .get("/api/auth/check_user", {
        headers: { "Api-Token": Apitoken },
      })
      .then((response) => {
        const { user } = response.data;
        dispatch(
          setAuthParams({
            token: user[0].api_token,
            username: user[0].username,
            userId: user[0].id,
            role: user[0].role,
            blockId: user[0].block_id,
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
// get auth data from local storage and set as auth params
export function checkAuth() {
  return (dispatch) => {
    const authData = ls.getItems();
    if (authData.token) {
      dispatch(checkByToken(authData.token));
    } else {
      dispatch(setAuthParams(null));
    }
  };
}
