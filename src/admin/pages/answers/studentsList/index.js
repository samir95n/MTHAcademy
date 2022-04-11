import React from "react";

import { AssignmentTurnedIn, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import { SET_STUDENTS_ID } from "../../../../store/actions/actionTypes";

function StudentsList(props) {
  //console.log(props.currentPart);
  return (
    <div className="answersPage">
      <div className="answerTable">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Exam date</th>
              {props.role === "admin" && <th>teacher</th>}
              <th className="answerTableCenter">Question blok</th>
              <th className="answerTableCenter">answers</th>
              <th className="answerTableCenter">delete</th>
            </tr>
          </thead>
          <tbody>
            {props.students?.map((item, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{item.name + " " + item.surname}</td>
                <td>{item.exam_date ? item.exam_date?.split(" ")[0] : "-"}</td>
                {props.role === "admin" && (
                  <td>{item.teacher_name + " " + item.teacher_surname}</td>
                )}
                <td>
                  <span>{item.block_id}</span>
                </td>
                <td>
                  <span
                    className="answersIcon"
                    onClick={() => {
                      props.getAnswer(item.id);
                      props.setPage("answers");
                    }}
                  >
                    <AssignmentTurnedIn
                      style={{ color: "#006ade", fontSize: "22px" }}
                    />
                  </span>
                </td>
                <td>
                  <span className="answersIcon">
                    <Delete style={{ color: "red", fontSize: "22px" }} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentPart: state.admin.currentPart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAnswer: (id) => dispatch({ type: SET_STUDENTS_ID, payload: id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
