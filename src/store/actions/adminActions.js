import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_STUDENTS, SET_LOADER, SET_ANSWER } from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getStudents() {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios.get("/api/get_students").then((response) => {
      const data = response.data.students;
      //ls.setItems({ username, token, userId: id });
      dispatch({
        type: SET_STUDENTS,
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
