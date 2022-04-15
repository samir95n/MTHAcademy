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
  ADD_BLOCK,
  DELETE_BLOCK,
  GET_BLOCK,
} from "../actions/actionTypes";

const initialState = {
  currentPage: "answers",
  students: null,
  totalPages: null,
  totalItems: null,
  teachers: null,
  operators: null,
  selectedStudent: null,
  answers: null,
  allBlock: [],
  updatedBlock: null,
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
    totalItems: action.payload.total,
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
const getBlock = (state, action) => {
  return {
    ...state,
    updatedBlock: {
      block: {
        part1: action.data.part1,
        part2: action.data.part2,
        part3: action.data.part3,
      },
      id: action.id,
    },
  };
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
    case ADD_BLOCK:
      return {
        ...state,
        allBlock: [...state.allBlock, { id: action.payload }],
      };
    case GET_BLOCK:
      return getBlock(state, action.payload);
    case DELETE_BLOCK:
      return updateUsers(state, { type: "allBlock", id: action.payload });
    case SET_INITIAL_STATE:
      return { ...initialState };
    default:
      return state;
  }
}

export default adminReducer;
