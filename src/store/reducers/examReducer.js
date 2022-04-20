import {
  SET_BLOCK,
  SET_TIMER,
  RESET_TIMER,
  SET_RESET_TIMER,
  SET_INITIAL_EXAM,
} from "../actions/actionTypes";

const initialState = {
  part1: [],
  questions1: [],
  part2: [],
  questions2: [],
  part3: [],
  questions3: [],
};

const setBlock = (state, action) => {
  return {
    ...state,
    part1: action.part1.description,
    questions1: action.part1.question,
    part2: action.part2.description,
    questions2: action.part2.question,
    part3: action.part3.description,
    questions3: action.part3.question,
  };
};

const setResetTimer = (state, action) => {
  return { ...state, loading: action.loadingValue };
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
    subPageNumber: state.subPageNumber + action.payload,
  };
};

function examReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BLOCK:
      return setBlock(state, action);
    case SET_TIMER:
      return { ...state, timer: state.timer - action.payload };
    case RESET_TIMER:
      return { ...state, timer: action.payload };
    case SET_RESET_TIMER:
      return { ...state, resetTimer: action.payload };
    case SET_INITIAL_EXAM:
      return { ...initialState };
    default:
      return state;
  }
}

export default examReducer;
