import React from "react";

import { AssignmentTurnedIn, Delete, Edit } from "@material-ui/icons";
import { connect } from "react-redux";

import {
  getStudents,
  getAnswers,
} from "../../../../store/actions/adminActions";
import {
  SET_STUDENTS_ID,
  SET_MODAL,
} from "../../../../store/actions/actionTypes";

import Table from "../../../../components/UI/table/Table";
import { Pagination } from "@mui/material";
import "./style.scss";

function StudentsList(props) {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  React.useEffect(() => {
    props.getStudents(page, rowsPerPage);
  }, [page, rowsPerPage]);
  // console.log("props.currentPart", page, rowsPerPage);
  const tHead = React.useMemo(() => {
    const head = [
      { name: "id", class: "" },
      { name: "Name", class: "" },
      { name: "teacher", class: "" },
      { name: "email", class: "" },
      { name: "Question blok", class: "answerTableCenter" },
      { name: "Exam date", class: "answerTableCenter" },
      { name: "answers", class: "answerTableCenter" },
      { name: "edit", class: "answerTableCenter" },
      { name: "delete", class: "answerTableCenter" },
    ];
    return head.filter(
      (item) =>
        props.role === "admin" ||
        (props.role === "teacher" &&
          !(item.name === "teacher" || item.name === "edit")) ||
        (props.role === "operator" && item.name !== "answers")
    );
  }, []);
  const tBody = React.useMemo(() => {
    const body = props.students?.map((item, index) => {
      return [
        (page - 1) * rowsPerPage + 1 + index,
        item.name + " " + item.surname,
        item.teacher_name + " " + item.teacher_surname,
        item.email,
        <span>{item.block_id}</span>,
        <span>{item.exam_date ? item.exam_date?.split(" ")[0] : "-"}</span>,
        <span className="answersIcon">
          <AssignmentTurnedIn
            style={{
              cursor: item.exam_date ? "pointer" : "not-allowed",
              color: item.exam_date ? "#006ade" : "#585e64",
              fontSize: "22px",
            }}
            onClick={() => {
              item.exam_date && props.getAnswer(item.id);
            }}
          />
        </span>,
        <span className="answersIcon">
          <Edit
            style={{ color: "#100a30", fontSize: "22px" }}
            onClick={() => props.setModal(item.id, "students")}
          />
        </span>,
        <span className="answersIcon">
          <Delete
            style={{ color: "red", fontSize: "22px" }}
            onClick={() => props.setModal(item.id, "students")}
          />
        </span>,
      ];
    });
    if (props.role === "teacher") {
      return body?.map((item) => {
        item.splice(2, 1);
        item.splice(6, 1);
        return item;
      });
    }
    if (props.role === "operator") {
      return body?.map((item) => {
        item.splice(6, 1);
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
            <div className="paginationByRowsItem">
              <p>Rows per page:</p>
              <select onChange={handleChangeRowsPerPage} value={rowsPerPage}>
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
            </div>
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
    setModal: (id, type) =>
      dispatch({
        type: SET_MODAL,
        payload: { open: true, type: { id: id, type: type } },
      }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
