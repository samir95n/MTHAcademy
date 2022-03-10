import {
  SET_CANGE_MAIN_PAGE,
  SET_CANGE_EXAM_PART,
  SET_CANGE_SUB_PAGE_NUMBER,
} from '../actions/actionTypes';

const initialState = {
  currentPage: {
    pageName: 'start',
    subPage: 1,
  },
  subPageNumber: 1,
};

const setCangePage = (state, action) => {
  return {
    ...state,
    currentPage: { subPage: state.currentPage.subPage, pageName: action.payload },
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
const setSubPage = (state, action) => {
  return {
    ...state,
    subPageNumber: state.subPageNumber + action.payload,
  };
};

function examReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CANGE_MAIN_PAGE:
      return setCangePage(state, action);
    case SET_CANGE_EXAM_PART:
      return setExamPart(state, action);
    case SET_CANGE_SUB_PAGE_NUMBER:
      return setSubPage(state, action);
    default:
      return state;
  }
}

export default examReducer;
