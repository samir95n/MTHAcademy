import React from "react";
import { connect } from "react-redux";

import AnswersList from "./answersList";
import StudentsList from "./studentsList";

import "./style.scss";

function Answers(props) {
  const [page, setPage] = React.useState("students");

  //console.log("students", props.students);
  return (
    <>
      {page === "students" && <StudentsList setPage={setPage} />}
      {page === "answers" && <AnswersList setPage={setPage} />}
    </>
  );
}
// function mapStateToProps(state) {
//   return {
//     students: state.admin.students,
//     totalPages: state.admin.totalPages,
//     role: state.auth.role,
//   };
// }

export default connect(null, null)(Answers);
