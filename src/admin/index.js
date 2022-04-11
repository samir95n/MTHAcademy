import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import ContentLayout from "../HOC/layout/contentLayout/ContentLayout";
import Nav from "../components/UI/nav";
import {
  SET_CURRENT_PAGE,
  SET_INITIAL_PAGE_BY_ROLE,
  SET_INITIAL_STATE,
} from "../store/actions/actionTypes";
import { logout } from "../store/actions/authActions";

import Users from "./pages/users";
import Quetions from "./pages/quetions";
import Answers from "./pages/answers";
import Settings from "./pages/settings";

function Admin(props) {
  React.useEffect(() => {
    if (props.role === "operator") props.checkPageByRole("quetions");
  }, [props.checkPageByRole]);
  const logOutHandle = () => {
    props.logout();
    props.setInitial();
  };
  return (
    <ContentLayout isVisablePagination={false}>
      <Nav
        active={props.currentPage}
        onClick={props.onChangeCurrentPage}
        role={props.role}
        logOutHandle={logOutHandle}
      />
      {props.currentPage == "users" &&
        (props.role === "operator" || props.role === "admin") && <Users />}
      {props.currentPage == "quetions" &&
        (props.role === "operator" || props.role === "admin") && <Quetions />}
      {props.currentPage == "answers" &&
        (props.role === "teacher" || props.role === "admin") && <Answers />}
      {props.currentPage == "settings" && props.role === "admin" && (
        <Settings />
      )}
    </ContentLayout>
  );
}
function mapStateToProps(state) {
  return {
    currentPage: state.admin.currentPage,
    role: state.auth.role,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentPage: (pageName) =>
      dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
    checkPageByRole: (page) =>
      dispatch({ type: SET_INITIAL_PAGE_BY_ROLE, payload: page }),
    setInitial: () => dispatch({ type: SET_INITIAL_STATE }),
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
