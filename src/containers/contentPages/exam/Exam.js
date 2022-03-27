import React from "react";
import { Grid } from "@mui/material";
import HeaderText from "../../../components/UI/headerText/HeaderText";
import Clock from "../../../components/UI/clock/Clock";
import Timer from "../../../components/UI/timer/Timer";
import Mic from "../../../components/UI/mic/Mic";
import Pause from "../../../components/UI/pause/Pause";
import BeepSound from "../../../assets/beepSound.wav";

import useRecorder from "../../../handler/useRecorder";
import { getQuestion } from "../../../store/actions/examActions";

import { connect } from "react-redux";
import {
  SET_CANGE_MAIN_PAGE,
  SET_CANGE_EXAM_PART,
  SET_CANGE_CURRENT_PART,
  SET_TIMER,
  SET_RESET_TIMER,
  RESET_TIMER,
} from "../../../store/actions/actionTypes";

import "./exam.scss";
import image from "../../../assets/girl.png";

const callBeep = () => {
  let myAudio = new Audio(BeepSound);
  myAudio.play();
};

function Exam(props) {
  // recording
  const { recorderState, ...handlers } = useRecorder();
  const { recordingTime, initRecording, audio } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  React.useEffect(() => {
    // check local storage for auth informations such as token, username, and userId when app start
    props.onGetQuestion(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onGetQuestion]);

  React.useEffect(() => {
    if (props.timer > 0) {
      const setIntervalVal = setInterval(() => props.timerOn(), 1000);
      return () => clearInterval(setIntervalVal);
    }
    if (props.timer === 0) {
      if (props.resetTimer) {
        saveRecording();
      }
      props.resetTimeToggle(!props.resetTimer);
    }
  }, [props.timer]);
  React.useEffect(() => {
    if (props.resetTimer) {
      const setTimeOut = setTimeout(() => {
        callBeep();
        props.onResetTime(props.time);
        startRecording();
      }, 3000);
      return () => clearTimeout(setTimeOut);
    }
  }, [props.resetTimer]);

  console.log(audio, "recordtime");

  return (
    <>
      <Grid container spacing={0} className="examContainer">
        <Grid item md={9} xs={12}>
          {props.currrentSubPage == 1 && (
            <>
              <HeaderText text={"1. Describe the picture."} />
              <div className="imageBlock">
                <img src={image} alt="exam_image" />
              </div>
            </>
          )}
          {props.currrentSubPage == 2 && (
            <HeaderText
              text={
                "3.  What are benefits and challange and benefits of a work from gome lifestyle? "
              }
            />
          )}
          {props.currrentSubPage == 3 && (
            <>
              <HeaderText
                text={
                  "1.  Universities and traditional degrees are not relevant in age of online courses. "
                }
              />
              <div className="listsBlock">
                <div className="listsRow">
                  <div className="listItem">
                    <div className="listHead">
                      <span>For</span>
                    </div>
                    <div className="listBody">
                      <ul>
                        <li>
                          Online courses are easily accessible and flexible
                        </li>
                        <li>
                          Online courses give students more autonomy and control
                          over their education
                        </li>
                        <li>They create a room for real life learning.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="listItem">
                    <div className="listHead">
                      <span>Against</span>
                    </div>
                    <div className="listBody">
                      <ul>
                        <li>Traditional education is more result oriented</li>
                        <li>
                          Online classes require a great deal of self-discipline
                        </li>
                        <li>They often result in reduced social interaction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Grid>
        <Grid item md={3} xs={12} className="rightSide">
          <div className="utilitiesBlock">
            <div className=" utilitiesBlockItem clockBlock">
              <div className="flexBlock">
                <Clock time={props.time} timer={props.timer} />
                {props.time && <Timer timer={props.timer} />}
              </div>
            </div>
            {props.resetTimer && (
              <>
                <div className=" utilitiesBlockItem micBlock">
                  <p className="utilitiesBlockText">
                    Start to speak when you hear this (Beep) sound
                  </p>
                  <div className="flexBlock">
                    <Mic recording={initRecording} />
                  </div>
                </div>
                <div className=" utilitiesBlockItem pauseBlock">
                  <p className="utilitiesBlockText">
                    Click to finish icon answering early
                  </p>
                  <div className="flexBlock">
                    <Pause
                      onClick={() => {
                        //saveRecording();
                      }}
                    />
                  </div>
                </div>
              </>
            )}
            {audio && <audio controls src={audio}></audio>}
          </div>
        </Grid>
      </Grid>
    </>
  );
}
function mapStateToProps(state) {
  return {
    currrentSubPage: state.pagination.currentPage.subPage,
    time: state.exam.time,
    image: state.exam.image,
    timer: state.exam.timer,
    resetTimer: state.exam.resetTimer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetQuestion: (id) => dispatch(getQuestion(id)),
    timerOn: (id) => dispatch({ type: SET_TIMER, payload: 1 }),
    resetTimeToggle: (resetTimeState) =>
      dispatch({ type: SET_RESET_TIMER, payload: resetTimeState }),
    onResetTime: (timeState) =>
      dispatch({ type: RESET_TIMER, payload: timeState }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
