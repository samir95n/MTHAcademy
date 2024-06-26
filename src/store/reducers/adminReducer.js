import {
  SET_CURRENT_PAGE,
  SET_INITIAL_PAGE_BY_ROLE,
  SET_INITIAL_ADMIN,
  SET_STUDENTS,
  SET_TEACHERS,
  SET_OPERATORS,
  SET_STUDENTS_ID,
  SET_ANSWER,
  SET_ALL_BLOCK,
  UPDATE_USERS,
  ADD_BLOCK,
  UPDATE_BLOCK,
  DELETE_BLOCK,
  GET_BLOCK,
  SET_SUB_PAGE,
  ADD_USER_IN_TABLE,
  SET_MODAL,
  GET_USER,
} from "../actions/actionTypes";

const initialState = {
  currentPage: "answers",
  subPage: 1,
  students: null,
  totalPages: null,
  totalItems: null,
  teachers: null,
  operators: null,
  selectedStudent: null,
  answers: null,
  allBlock: [],
  updatedBlock: null,
  modal: { open: false, userType: null },
  user: null,
};

const setCurrentPage = (state, action) => {
  return {
    ...state,
    currentPage: action.payload,
    subPage: 1,
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
        name: action.data.block[0].name,
        part1: action.data.part1,
        part2: {
          ...action.data.part2,
          question: { ...action.data.part2.question[0] },
        },
        part3: {
          ...action.data.part3,
          question: { ...action.data.part3.question[0] },
        },
      },
      id: action.id,
    },
  };
};
const updateBlock = (state, action) => {
  const allBlock = state.allBlock;

  const newAllBlock = allBlock.map((item) => {
    if (item.id === action.id) {
      return { ...item, name: action.name };
    }
    return item;
  });
  return { ...state, allBlock: newAllBlock };
};
const addUser = (state, action) => {
  return { ...state, subPage: 1 };
};
const setModal = (state, action) => {
  return { ...state, modal: { open: action.open, userType: action.type } };
};
const getUser = (state, action) => {
  return {
    ...state,
    user: {
      data: {
        name: action.data.name,
        surname: action.data.surname,
        email: action.data.email,
        username: action.data.username,
        password: "",
        role: action.data.role,
        teacher_id: action.data.teacher_id,
        block_id: action.data.block_id,
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
        subPage: 1,
        allBlock: [
          ...state.allBlock,
          { id: action.payload.block_id, name: action.payload.name },
        ],
      };
    case UPDATE_BLOCK:
      return updateBlock(state, action.payload);
    case GET_BLOCK:
      return getBlock(state, action.payload);
    case DELETE_BLOCK:
      return updateUsers(state, { type: "allBlock", id: action.payload });
    case SET_INITIAL_ADMIN:
      return { ...initialState };
    case SET_SUB_PAGE:
      return { ...state, subPage: action.payload };
    case ADD_USER_IN_TABLE:
      return addUser(state, action.payload);
    case SET_MODAL:
      return setModal(state, action.payload);
    case GET_USER:
      return getUser(state, action.payload);
    default:
      return state;
  }
}

export default adminReducer;
