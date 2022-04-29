import {
  SET_AUTH_ERROR,
  SET_USER_CREATE_ERROR,
  SET_LOADER,
  SET_INITIAL_ERROR,
  SET_BLOK_CREATE_ERROR,
  SET_BLOK_DELETE_ERROR,
} from '../actions/actionTypes';

const initialState = {
  authError: false,
  creatreUserError: null,
  creatreBlokError: null,
  deleteBlokError: null,
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
const setUserCreateError = (state, action) => {
  let errors = [];
  for (let error in action) {
    errors.push(action[error][0]);
  }
  return {
    ...state,
    creatreUserError: errors,
  };
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH_ERROR:
      return setAuthError(state, action);
    case SET_USER_CREATE_ERROR:
      return setUserCreateError(state, action.payload);
    case SET_BLOK_CREATE_ERROR:
      return {
        ...state,
        creatreBlokError: action.payload,
      };
    case SET_BLOK_DELETE_ERROR:
      return {
        ...state,
        deleteBlokError: action.payload,
      };
    case SET_LOADER:
      return setLoader(state, action);
    case SET_INITIAL_ERROR:
      return { ...initialState };
    default:
      return state;
  }
}

export default authReducer;
