import { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import ContentLayout from "../HOC/layout/contentLayout/ContentLayout";
import Nav from "../components/UI/nav";
import { SET_CURRENT_PAGE } from "../store/actions/actionTypes";

import Users from "./pages/users";
import Quetions from "./pages/quetions";
import Answers from "./pages/answers";
import Settings from "./pages/settings";

function Admin(props) {
  return (
    <ContentLayout isVisablePagination={false}>
      <Nav active={props.currentPage} onClick={props.onChangeCurrentPage} />
      {props.currentPage == "user" && <Users />}
      {props.currentPage == "quetions" && <Quetions />}
      {props.currentPage == "answers" && <Answers />}
      {props.currentPage == "settings" && <Settings />}
    </ContentLayout>
  );
}
function mapStateToProps(state) {
  return {
    currentPage: state.admin.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentPage: (pageName) =>
      dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
