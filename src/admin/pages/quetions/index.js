import { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { SET_CURRENT_PAGE } from "../../../store/actions/actionTypes";

import "./style.scss";

function Quetions(props) {
  return (
    <div>
      <p>Quetions</p>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Quetions);
