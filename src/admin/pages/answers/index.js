import React from "react";
import { connect } from "react-redux";

import { SET_CURRENT_PAGE } from "../../../store/actions/actionTypes";
import { getStudents } from "../../../store/actions/adminActions";

import AnswersList from "./answersList";
import StudentsList from "./studentsList";

import "./style.scss";

function Answers(props) {
  const [page, setPage] = React.useState("students");
  React.useEffect(() => {
    props.students || props.getStudents();
  }, []);
  console.log("students", props.students);
  return (
    <>
      {page === "students" && (
        <StudentsList
          role={props.role}
          students={props.students}
          setPage={setPage}
        />
      )}
      {page === "answers" && <AnswersList />}
    </>
  );
}
function mapStateToProps(state) {
  return {
    currentPage: state.admin.currentPage,
    students: state.admin.students,
    role: state.auth.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getStudents: () => dispatch(getStudents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
