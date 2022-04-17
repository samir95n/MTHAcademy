import { SET_INITIAL_AUTH, SET_TOKEN } from "../actions/actionTypes";

const initialState = {
  token: false,
  username: "",
  userId: null,
  role: null,
  blockId: null,
};

const setAuthParams = (state, action) => {
  return {
    ...state,
    token: action.token,
    username: action.username,
    userId: action.userId,
    role: action.role,
    blockId: action.blockId,
  };
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return setAuthParams(state, action);
    case SET_INITIAL_AUTH:
      return { ...initialState };
    default:
      return state;
  }
}

export default authReducer;
