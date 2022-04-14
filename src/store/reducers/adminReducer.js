import {
  SET_CURRENT_PAGE,
  SET_INITIAL_PAGE_BY_ROLE,
  SET_INITIAL_STATE,
  SET_STUDENTS,
  SET_TEACHERS,
  SET_OPERATORS,
  SET_STUDENTS_ID,
  SET_ANSWER,
  SET_ALL_BLOCK,
  UPDATE_USERS,
} from "../actions/actionTypes";

const initialState = {
  currentPage: "answers",
  students: null,
  totalPages: null,
  teachers: null,
  operators: null,
  selectedStudent: null,
  answers: null,
  allBlock: [],
};

const setCurrentPage = (state, action) => {
  return {
    ...state,
    currentPage: action.payload,
  };
};
const setPageByRole = (state, action) => {
  return {
    ...state,
    currentPage: action.payload,
  };
};
const setStudents = (state, action) => {
  return {
    ...state,
    students: action.payload.data,
    totalPages: action.payload.last_page,
  };
};
const setTeacher = (state, action) => {
  return {
    ...state,
    teachers: action.payload,
  };
};
const setOperators = (state, action) => {
  return {
    ...state,
    operators: action.payload,
  };
};
const updateUsers = (state, action) => {
  const users = state[action.type];
  if (users.length <= 1) {
    return {
      ...state,
      [action.type]: null,
    };
  } else {
    const newUser = users.filter((item) => item.id !== action.id);
    return {
      ...state,
      [action.type]: newUser,
    };
  }
};

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return setCurrentPage(state, action);
    case SET_INITIAL_PAGE_BY_ROLE:
      return setPageByRole(state, action);
    case SET_STUDENTS:
      return setStudents(state, action);
    case SET_TEACHERS:
      return setTeacher(state, action);
    case SET_OPERATORS:
      return setOperators(state, action);
    case UPDATE_USERS:
      return updateUsers(state, action.payload);
    case SET_STUDENTS_ID:
      return { ...state, selectedStudent: action.payload };
    case SET_ANSWER:
      return { ...state, answers: action.payload };
    case SET_ALL_BLOCK:
      return { ...state, allBlock: action.payload };
    case SET_INITIAL_STATE:
      return { ...initialState };
    default:
      return state;
  }
}

export default adminReducer;
