import {
  SET_BLOCK,
  SET_TIMER,
  RESET_TIMER,
  SET_RESET_TIMER,
} from "../actions/actionTypes";

const initialState = {
  title: "",
  image: "",
  time: null,
  list: {
    for: [],
    against: [],
  },
  timer: null,
  resetTimer: false,
};

const setBlock = (state, action) => {
  return {
    ...state,
    title: action.title,
    time: action.timer,
    image: action.photo,
    timer: action.timer,
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
    default:
      return state;
  }
}

export default examReducer;
