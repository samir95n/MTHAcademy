import React from "react";

import { AssignmentTurnedIn, Delete } from "@material-ui/icons";
import { connect } from "react-redux";

import {
  getStudents,
  deleteUser,
  getAnswers,
} from "../../../../store/actions/adminActions";
import { SET_STUDENTS_ID } from "../../../../store/actions/actionTypes";

import Table from "../../../../components/UI/table/Table";
import { Pagination, TablePagination } from "@mui/material";
import "./style.scss";

function StudentsList(props) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    props.getStudents(page, rowsPerPage);
  }, [page, rowsPerPage]);
  console.log("props.currentPart", page, rowsPerPage);
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
        (page - 1) * rowsPerPage + 1 + index,
        item.name + " " + item.surname,
        item.exam_date ? item.exam_date?.split(" ")[0] : "-",
        item.teacher_name + " " + item.teacher_surname,
        <span>{item.block_id}</span>,
        <span
          className="answersIcon"
          onClick={() => {
            item.exam_date && props.getAnswer(item.id);
            item.exam_date && props.setPage("answers");
          }}
        >
          <AssignmentTurnedIn
            style={{
              color: item.exam_date ? "#006ade" : "#585e64",
              fontSize: "22px",
            }}
          />
        </span>,
        <span
          className="answersIcon"
          onClick={() => props.deleteUserHandle(item.id, "students")}
        >
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
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  return (
    <div className="answersPage">
      <div className="answerTable">
        <Table thead={tHead} tbody={tBody} />
      </div>
      <div className="paginationBlock">
        <div className="paginationRow">
          <div className="paginationByRows">
            <TablePagination
              component="div"
              count={props.totalItems}
              page={page}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
          <div className="paginationByPage">
            <Pagination
              count={props.totalPages}
              page={page}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    students: state.admin.students,
    totalPages: state.admin.totalPages,
    totalItems: state.admin.totalItems,
    role: state.auth.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAnswer: (id) => dispatch(getAnswers(id)),
    getStudents: (page, rowsPerPage) =>
      dispatch(getStudents(page, rowsPerPage)),
    deleteUserHandle: (id, type) => dispatch(deleteUser(id, type)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
