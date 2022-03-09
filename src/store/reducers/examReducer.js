const initialState = {
  currentPage: {
    pageName: 'exam',
    subPage: 1,
  },
  pageNumber: 1,
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
    setCangePage: { subPage: state.currentPage.subPage, pageName: action.pageName },
  };
};

function examReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PAGE_PLUS':
      return setPage(state, action);
    case 'SET_PAGE_MINUS':
      return setLoading(state, action);
    case 'SET_CANGE_PAGE':
      return setCangePage(state, action);
    default:
      return state;
  }
}

export default examReducer;
