import React, { useEffect, useMemo } from "react";
import { connect } from "react-redux";

import { AssignmentTurnedIn, Delete } from "@material-ui/icons";

import { SET_QUESTION_PART } from "../../../../store/actions/actionTypes";
import { getAnswers } from "../../../../store/actions/adminActions";

import PartNav from "../../../../components/UI/partNav";

import "./style.scss";

function AnswersList(props) {
  React.useEffect(() => {
    props.getAnswer(props.studentId);
  }, []);
  return (
    <div className="answersList">
      <div className="answersListDate">
        <span className="answersDateText">Exam started :</span>
        <span className="answersDateInfo">Date : 28.02.2022 Time : 16:14</span>
      </div>
      <div className="answersListHeader">
        <h3>Recorded voice files</h3>
      </div>
      <div className="answersListNav">
        <PartNav
          onClick={props.onChangeQuestionPart}
          active={props.currentPart}
        />
      </div>
      <div className="answersListBlock">
        <div className="answersPart">
          <div className="answersVoiceItem">
            <p>Answer 1</p>
            <div className="answersVoice">
              <audio
                controls
                //src={audio}
              ></audio>
            </div>
          </div>
          <div className="answersVoiceItem">
            <p>Answer 2</p>
            <div className="answersVoice">
              <audio
                controls
                //src={audio}
              ></audio>
            </div>
          </div>
          <div className="answersVoiceItem">
            <p>Answer 3</p>
            <div className="answersVoice">
              <audio
                controls
                //src={audio}
              ></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentPart: state.admin.currentPart,
    studentId: state.admin.selectedStudent,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAnswer: (id) => dispatch(getAnswers(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswersList);
