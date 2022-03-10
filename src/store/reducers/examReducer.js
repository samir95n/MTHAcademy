import { SET_CANGE_MAIN_PAGE, SET_CANGE_EXAM_PART } from '../actions/actionTypes';

const initialState = {
  currentPage: {
    pageName: 'start',
    subPage: 1,
  },
  subPageNumber: 1,
  selectedItemType: '',
  loading: false,
  totalSize: null,
  totalSizeLimit: null,
  folders: [],
  files: [],
};

const setPage = (state, action) => {
  return { ...state, page: state.page++ };
};

const setLoading = (state, action) => {
  return { ...state, loading: action.loadingValue };
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
    subPageNumber: state.subPageNumber + action.payload,
  };
};

function examReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CANGE_MAIN_PAGE:
      return setCangePage(state, action);
    case SET_CANGE_EXAM_PART:
      return setExamPart(state, action);
    default:
      return state;
  }
}

export default examReducer;
