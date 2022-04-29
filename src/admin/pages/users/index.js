import React from "react";
import { connect } from "react-redux";
import { AssignmentTurnedIn, Delete } from "@material-ui/icons";

import CreateUser from "./createUser";
import UsersTable from "./usersTable";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import {
  SET_SUB_PAGE,
  SET_INITIAL_ERROR,
} from "../../../store/actions/actionTypes";

import { getTeachers, getOperators } from "../../../store/actions/adminActions";

import "./style.scss";

function Users(props) {
  //const [page, setPage] = React.useState("table");
  React.useEffect(() => {
    props.getTeachers();
    props.role === "admin" && props.getOperators();
  }, [props.subPage]);
  const getUserHandle = (id) => {
    props.getBlock(id);
    props.setSubPage(3);
  };
  return (
    <div className="usersPage">
      <div className="adminBtn">
        <CustomButton
          name={props.subPage === 1 ? "Create User" : "< Back"}
          onClick={() => {
            props.setSubPage(props.subPage == 1 ? 2 : 1);
            props.setInitialEror();
          }}
        />
      </div>
      {props.subPage === 1 && props.role === "admin" && (
        <UsersTable teachers={props.teachers} operators={props.operators} />
      )}
      {props.subPage === 2 && (
        <CreateUser teachers={props.teachers} role={props.role} />
      )}
      {props.subPage === 3 && (
        <CreateUser teachers={props.teachers} role={props.role} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    teachers: state.admin.teachers,
    operators: state.admin.operators,
    role: state.auth.role,
    subPage: state.admin.subPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTeachers: () => dispatch(getTeachers()),
    getOperators: () => dispatch(getOperators()),
    setSubPage: (page) => dispatch({ type: SET_SUB_PAGE, payload: page }),
    setInitialEror: () => dispatch({ type: SET_INITIAL_ERROR }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

// const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
