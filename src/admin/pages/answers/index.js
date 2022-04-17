import React from "react";
import { connect } from "react-redux";

import AnswersList from "./answersList";
import StudentsList from "./studentsList";

import "./style.scss";

function Answers(props) {
  //console.log("students", props.students);
  return (
    <>
      {props.subPage === 1 && <StudentsList />}
      {props.subPage === 2 && <AnswersList />}
    </>
  );
}
function mapStateToProps(state) {
  return {
    subPage: state.admin.subPage,
  };
}

export default connect(mapStateToProps, null)(Answers);
