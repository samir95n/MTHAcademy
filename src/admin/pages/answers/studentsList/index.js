import React from "react";

import { AssignmentTurnedIn, Delete } from "@material-ui/icons";
import { connect } from "react-redux";

import { getStudents } from "../../../../store/actions/adminActions";
import { SET_STUDENTS_ID } from "../../../../store/actions/actionTypes";

import Table from "../../../../components/UI/table/Table";
import { Pagination } from "@mui/material";
import "./style.scss";

function StudentsList(props) {
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    props.getStudents(page);
  }, [page]);
  //console.log(props.currentPart);
  const tHead = React.useMemo(() => {
    const head = [
      { name: "id", class: "" },
      { name: "Name", class: "" },
      { name: "Exam date", class: "" },
      { name: "teacher", class: "" },
      { name: "Question blok", class: "answerTableCenter" },
      { name: "answers", class: "answerTableCenter" },
      { name: "delete", class: "answerTableCenter" },
    ];
    return head.filter(
      (item) => !(props.role !== "admin" && item.name === "teacher")
    );
  }, []);
  const tBody = React.useMemo(() => {
    const body = props.students?.map((item, index) => {
      return [
        (page - 1) * 10 + 1 + index,
        item.name + " " + item.surname,
        item.exam_date ? item.exam_date?.split(" ")[0] : "-",
        item.teacher_name + " " + item.teacher_surname,
        <span>{item.block_id}</span>,
        <span
          className="answersIcon"
          onClick={() => {
            props.getAnswer(item.id);
            props.setPage("answers");
          }}
        >
          <AssignmentTurnedIn style={{ color: "#006ade", fontSize: "22px" }} />
        </span>,
        <span className="answersIcon">
          <Delete style={{ color: "red", fontSize: "22px" }} />
        </span>,
      ];
    });
    if (props.role !== "admin") {
      return body?.map((item) => {
        item.splice(3, 1);
        return item;
      });
    }
    return body;
  }, [props.students]);
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log("page", page);
  return (
    <div className="answersPage">
      <div className="answerTable">
        <Table thead={tHead} tbody={tBody} />
      </div>
      <div className="paginationBlock">
        <Pagination
          count={props.totalPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    students: state.admin.students,
    totalPages: state.admin.totalPages,
    role: state.auth.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAnswer: (id) => dispatch({ type: SET_STUDENTS_ID, payload: id }),
    getStudents: (page) => dispatch(getStudents(page)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
