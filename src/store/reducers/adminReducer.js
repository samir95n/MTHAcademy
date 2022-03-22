import { SET_CURRENT_PAGE, SET_QUESTION_PART } from "../actions/actionTypes";

const initialState = {
  currentPage: "answers",
  currentPart: 1,
  username: "",
  userId: null,
};

const setCurrentPage = (state, action) => {
  return {
    ...state,
    currentPage: action.payload,
  };
};
const setCurrentPart = (state, action) => {
  return {
    ...state,
    currentPart: action.payload,
  };
};

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return setCurrentPage(state, action);
    case SET_QUESTION_PART:
      return setCurrentPart(state, action);
    default:
      return state;
  }
}

export default adminReducer;
