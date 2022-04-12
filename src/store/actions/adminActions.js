import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import {
  SET_STUDENTS,
  SET_TEACHERS,
  SET_OPERATORS,
  SET_LOADER,
  SET_ANSWER,
} from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getStudents() {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get("/api/get_students").then((response) => {
      // console.log(response.data.students);
      const data = response.data.students.data;
      //ls.setItems({ username, token, userId: id });
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
