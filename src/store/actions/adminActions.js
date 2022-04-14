import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import {
  SET_STUDENTS,
  SET_TEACHERS,
  SET_OPERATORS,
  SET_LOADER,
  SET_ANSWER,
  SET_ALL_BLOCK,
  UPDATE_USERS,
} from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getStudents(page = 1) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get(`/api/get_students?page=${page}&rows=10`).then((response) => {
      // console.log(response.data.students);
      const data = response.data.students;
      //ls.setItems({ username, token, userId: id });s
      dispatch({
        type: SET_STUDENTS,
        payload: data,
      });
      dispatch({ type: SET_LOADER, payload: false });
    });
  };
}
export function getTeachers() {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get("/api/get_teachers").then((response) => {
      const data = response.data.teachers;
      //ls.setItems({ username, token, userId: id });
      dispatch({
        type: SET_TEACHERS,
        payload: data,
      });
      dispatch({ type: SET_LOADER, payload: false });
    });
  };
}
export function getOperators() {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get("/api/get_operators").then((response) => {
      const data = response.data.operators;
      //ls.setItems({ username, token, userId: id });
      dispatch({
        type: SET_OPERATORS,
        payload: data,
      });
      dispatch({ type: SET_LOADER, payload: false });
    });
  };
}
export function getAnswers(id) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get(`/api/get_answer?user_id=${id}`).then((response) => {
      const data = response.data.students;
      //ls.setItems({ username, token, userId: id });
      dispatch({
        type: SET_ANSWER,
        payload: data,
      });
      dispatch({ type: SET_LOADER, payload: false });
    });
  };
}
export function changeAuthData(id, username, password) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
      .put(`/api/auth/edit?id=${id}&username=${username}&password=${password}`)
      .then((response) => {
        //const data = response.data.students;
        //ls.setItems({ username, token, userId: id });
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}
export function getAllBlocks() {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get("/api/get_all_blocks").then((response) => {
      //console.log(response.data.block);
      const data = response.data.block;
      //ls.setItems({ username, token, userId: id });s
      dispatch({
        type: SET_ALL_BLOCK,
        payload: data,
      });
      dispatch({ type: SET_LOADER, payload: false });
    });
  };
}
export function createUser(newUser) {
  const formData = new FormData();
  for (let input in newUser) {
    if (newUser[input]) {
      formData.append(input, newUser[input]);
    }
  }
  return (dispatch) => {
    // let body = JSON.stringify(newUser);
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
      .post("/api/auth/register", formData)
      .then((response) => {
        dispatch({ type: SET_LOADER, payload: false });
      })
      .catch((err) => {
        //dispatch({ type: SET_AUTH_ERROR, payload: true });
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}
export function deleteUser(id, type) {
  return (dispatch) => {
    // let body = JSON.stringify(newUser);
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
      .delete(`/api/auth/delete?id=${id}`)
      .then((response) => {
        dispatch({ type: UPDATE_USERS, payload: { id: id, type: type } });
        dispatch({ type: SET_LOADER, payload: false });
      })
      .catch((err) => {
        //dispatch({ type: SET_AUTH_ERROR, payload: true });
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}
