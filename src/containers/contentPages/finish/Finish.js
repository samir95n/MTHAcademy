import React from "react";

import { connect } from "react-redux";
import { SET_INITIAL } from "../../../store/actions/actionTypes";
import { logout } from "../../../store/actions/authActions";

import "./finish.scss";
import CustomButton from "../../../components/UI/customButton/CustomButton";
import finishImage from "../../../assets/finish.png";

function Finish(props) {
  const logOutHandle = () => {
    props.logout();
    props.setInitial();
  };
  return (
    <>
      <div className="finishContainer">
        <div className="finishBlock">
          <div className="finishImage">
            <img src={finishImage} alt="finish_photo" />
          </div>
          <div className="finishText">
            <p>You have completed the exam!</p>
          </div>
          <div className="finishButton">
            <CustomButton name={"Finish"} onClick={logOutHandle} />
          </div>
        </div>
      </div>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    setInitial: () => dispatch({ type: SET_INITIAL }),
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Finish);
