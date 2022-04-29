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

import {
  getTeachers,
  getOperators,
  getUser,
  createUser,
  updateUser,
} from "../../../store/actions/adminActions";

import "./style.scss";

function Users(props) {
  //const [page, setPage] = React.useState("table");
  React.useEffect(() => {
    props.getTeachers();
    props.role === "admin" && props.getOperators();
  }, [props.subPage]);
  const getUserHandle = (id) => {
    props.getUser(id);
    props.setSubPage(3);
  };
  const updateUserHandle = (user) => {
    props.updateUser(props.user.id, user);
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
        <UsersTable
          teachers={props.teachers}
          operators={props.operators}
          getUser={getUserHandle}
        />
      )}
      {props.subPage === 2 && (
        <CreateUser
          saveHandle={props.createUser}
          teachers={props.teachers}
          role={props.role}
        />
      )}
      {props.subPage === 3 && (
        <CreateUser
          saveHandle={updateUserHandle}
          page={props.subPage}
          teachers={props.teachers}
          role={props.role}
          updatedUser={props.user}
        />
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
    user: state.admin.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTeachers: () => dispatch(getTeachers()),
    getOperators: () => dispatch(getOperators()),
    getUser: (id) => dispatch(getUser(id)),
    setSubPage: (page) => dispatch({ type: SET_SUB_PAGE, payload: page }),
    setInitialEror: () => dispatch({ type: SET_INITIAL_ERROR }),
    createUser: (user) => dispatch(createUser(user)),
    updateUser: (id, user) => dispatch(updateUser(id, user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

// const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
