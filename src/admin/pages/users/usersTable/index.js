import React from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { AssignmentTurnedIn, Delete } from "@material-ui/icons";

import Table from "../../../../components/UI/table/Table";
import CustomButton from "../../../../components/UI/customButton/CustomButton";

import { SET_CURRENT_PAGE } from "../../../../store/actions/actionTypes";

import "./style.scss";

function UsersTable({ teachers, operators, role }) {
  const thead = React.useMemo(() => {
    return [
      { name: "id", class: "" },
      { name: "Name", class: "" },
      { name: "surname", class: "" },
      { name: "delete", class: "answerTableCenter" },
    ];
  }, []);
  const tbodyTeachers = React.useMemo(() => {
    return teachers?.map((item, index) => {
      return [
        ++index,
        item.name,
        item.surname,
        <span className="answersIcon">
          <Delete style={{ color: "red", fontSize: "22px" }} />
        </span>,
      ];
    });
  }, [teachers]);
  const tbodyOperators = React.useMemo(() => {
    return operators?.map((item, index) => {
      return [
        ++index,
        item.name,
        item.surname,
        <span className="answersIcon">
          <Delete style={{ color: "red", fontSize: "22px" }} />
        </span>,
      ];
    });
  }, [operators]);
  return (
    <div className="usersTable">
      <div className="usersTableBlock">
        <div className="teacherTable">
          <p className="teacherTableP">Teachers</p>
          <Table thead={thead} tbody={tbodyTeachers} />
        </div>
        {role == "admin" && (
          <div className="operatorTable">
            <p className="teacherTableP">Opearators</p>
            <Table thead={thead} tbody={tbodyOperators} />
          </div>
        )}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    role: state.auth.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentPage: (pageName) =>
      dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);

const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
