import { SET_AUTH_ERROR, SET_LOADER } from "../actions/actionTypes";

const initialState = {
  authError: false,
  loader: false,
};

const setAuthError = (state, action) => {
  return {
    ...state,
    authError: action.payload,
  };
};
const setLoader = (state, action) => {
  return {
    ...state,
    loader: action.payload,
  };
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_ERROR:
      return setAuthError(state, action);
    case SET_LOADER:
      return setLoader(state, action);
    default:
      return state;
  }
}

export default authReducer;
