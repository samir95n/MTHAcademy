import { SET_AUTH_ERROR } from "../actions/actionTypes";

const initialState = {
  authError: false,
};

const setAuthError = (state, action) => {
  return {
    ...state,
    authError: action.payload,
  };
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_ERROR:
      return setAuthError(state, action);
    default:
      return state;
  }
}

export default authReducer;
