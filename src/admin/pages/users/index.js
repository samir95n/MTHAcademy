import React from "react";
import { connect } from "react-redux";
import { AssignmentTurnedIn, Delete } from "@material-ui/icons";

import CreateUser from "./createUser";
import UsersTable from "./usersTable";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import { getTeachers, getOperators } from "../../../store/actions/adminActions";

import "./style.scss";

function Users(props) {
  const [page, setPage] = React.useState("table");
  React.useEffect(() => {
    props.teachers || props.getTeachers();
    (props.role === "admin" && props.operators) || props.getOperators();
  }, []);

  return (
    <div className="usersPage">
      <div className="usersPageBtn">
        <CustomButton
          name={page === "table" ? "Create User" : "< Back"}
          onClick={() =>
            setPage((prev) => (prev === "table" ? "create" : "table"))
          }
        />
      </div>
      {page === "table" && (
        <UsersTable
          teachers={props.teachers}
          operators={props.role === "admin" ? props.operators : null}
        />
      )}
      {page === "create" && <CreateUser />}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    teachers: state.admin.teachers,
    operators: state.admin.operators,
    role: state.auth.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTeachers: () => dispatch(getTeachers()),
    getOperators: () => dispatch(getOperators()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

// const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
