import { SET_CURRENT_PAGE } from "../actions/actionTypes";

const initialState = {
  currentPage: "answers",
  username: "",
  userId: null,
};

const setCurrentPage = (state, action) => {
  return {
    ...state,
    currentPage: action.payload,
  };
};

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return setCurrentPage(state, action);
    default:
      return state;
  }
}

export default adminReducer;
