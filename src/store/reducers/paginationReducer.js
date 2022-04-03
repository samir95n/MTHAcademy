import {
  SET_CANGE_MAIN_PAGE,
  SET_CANGE_EXAM_PART,
  SET_CANGE_CURRENT_PART,
} from "../actions/actionTypes";

const initialState = {
  currentPage: {
    pageName: "start",
  },
  currentPart: 1,
  question: 0,
};

const setCangePage = (state, action) => {
  return {
    ...state,
    currentPage: {
      subPage: state.currentPage.subPage,
      pageName: action.payload,
    },
  };
};
const setExamPart = (state, action) => {
  return {
    ...state,
    currentPage: {
      pageName: state.currentPage.pageName,
      subPage: state.currentPage.subPage + action.payload,
    },
  };
};
const setCurrentPart = (state, action) => {
  return {
    ...state,
    currentPart: state.currentPart + action.payload,
  };
};

function examReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CANGE_MAIN_PAGE:
      return setCangePage(state, action);
    case SET_CANGE_EXAM_PART:
      return setExamPart(state, action);
    case SET_CANGE_CURRENT_PART:
      return setCurrentPart(state, action);
    default:
      return state;
  }
}

export default examReducer;
