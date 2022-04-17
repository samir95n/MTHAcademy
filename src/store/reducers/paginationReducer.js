import {
  SET_CANGE_MAIN_PAGE,
  SET_CANGE_EXAM_PART,
  SET_CANGE_CURRENT_PART,
  SET_QUESTION,
  SET_INITIAL_PAGE,
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
const setQuestion = (state) => {
  if (state.currentPart === 1 && state.question < 2) {
    return {
      ...state,
      question: state.question + 1,
    };
  }
  if (state.currentPart < 3) {
    return {
      ...initialState,
      currentPart: state.currentPart + 1,
    };
  }
  return {
    ...state,
    currentPart: state.currentPart + 1,
    currentPage: {
      pageName: "finish",
    },
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
    case SET_QUESTION:
      return setQuestion(state);
    case SET_INITIAL_PAGE:
      return { ...initialState };
    default:
      return state;
  }
}

export default examReducer;
