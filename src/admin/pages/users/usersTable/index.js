import React from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { AssignmentTurnedIn, Delete } from "@material-ui/icons";

import Table from "../../../../components/UI/table/Table";
import CustomButton from "../../../../components/UI/customButton/CustomButton";

import { deleteUser } from "../../../../store/actions/adminActions";

import "./style.scss";

function UsersTable({ teachers, operators, role, deleteUserHandle }) {
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
          <Delete
            style={{ color: "red", fontSize: "22px" }}
            onClick={() => deleteUserHandle(item.id, "teachers")}
          />
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
          <Delete
            style={{ color: "red", fontSize: "22px" }}
            onClick={() => deleteUserHandle(item.id, "operators")}
          />
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
    deleteUserHandle: (id, type) => dispatch(deleteUser(id, type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);