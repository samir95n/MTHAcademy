const initialState = {
  currentPage: "exam",
  pageNumber: 1,
  selectedItemType: "",
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

function examReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PAGE_PLUS":
      return setPage(state, action);
    case "SET_PAGE_MINUS":
      return setLoading(state, action);
    default:
      return state;
  }
}

export default examReducer;
