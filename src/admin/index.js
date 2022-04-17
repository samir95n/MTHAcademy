import React, { useEffect, useMemo } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import CustomButton from "../components/UI/customButton/CustomButton";

import "./style.scss";

import ContentLayout from "../HOC/layout/contentLayout/ContentLayout";
import Nav from "../components/UI/nav";
import {
  SET_CURRENT_PAGE,
  SET_INITIAL_PAGE_BY_ROLE,
  SET_MODAL,
} from "../store/actions/actionTypes";

import { deleteUser } from "../store/actions/adminActions";
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
  };
  console.log("modal", props.modal);
  return (
    <>
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
      <Modal
        open={props.modal.open}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modalDelete"
      >
        <Box className="modalBox">
          <div className="modalDeleteBlock">
            <div className="modalHeader">
              <h3>Are you sure delete User?</h3>
            </div>
            <div className="modalFooter">
              <div className="modalCancelBtn">
                <CustomButton name="Close" onClick={props.closeModal} />
              </div>
              <div className="modalAgreeBtn">
                <CustomButton
                  name="Delete"
                  type="warning"
                  onClick={() => {
                    props.deleteUserHandle(
                      props.modal.userType.id,
                      props.modal.userType.type
                    );
                    props.closeModal();
                  }}
                />
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
function mapStateToProps(state) {
  return {
    currentPage: state.admin.currentPage,
    role: state.auth.role,
    modal: state.admin.modal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentPage: (pageName) =>
      dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
    checkPageByRole: (page) =>
      dispatch({ type: SET_INITIAL_PAGE_BY_ROLE, payload: page }),
    logout: () => dispatch(logout()),
    closeModal: () =>
      dispatch({
        type: SET_MODAL,
        payload: { open: false, type: null },
      }),
    deleteUserHandle: (id, type) => dispatch(deleteUser(id, type)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
