import React from "react";
import { Grid } from "@mui/material";
import HeaderText from "../../../components/UI/headerText/HeaderText";
import Clock from "../../../components/UI/clock/Clock";
import Timer from "../../../components/UI/timer/Timer";
import Mic from "../../../components/UI/mic/Mic";
import Pause from "../../../components/UI/pause/Pause";
import BeepSound from "../../../assets/beepSound.wav";

import useRecorder from "../../../handler/useRecorder";
import { sendAudio } from "../../../store/actions/examActions";

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

const callBeep = async () => {
  let myAudio = await new Audio(BeepSound);
  if (myAudio) {
    myAudio.play();
  }
};

function Exam(props) {
  // recording
  const [timerCount, setTimerCount] = React.useState(props.question.timer);
  const [resetTimer, setResetTimer] = React.useState(false);

  const { recorderState, ...handlers } = useRecorder();
  const { recordingTime, initRecording, audio } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  React.useEffect(() => {
    if (timerCount > 0) {
      const setIntervalVal = setInterval(
        () => setTimerCount((prev) => prev - 1),
        1000
      );
      return () => clearInterval(setIntervalVal);
    }
    if (timerCount === 0) {
      if (resetTimer) {
        saveRecording();
      }
      setResetTimer(true);
    }
  }, [timerCount]);
  React.useEffect(() => {
    if (resetTimer) {
      const setTimeOut = setTimeout(() => {
        //callBeep();
        setTimerCount(props.question.timer);
        startRecording();
      }, 3000);
      return () => clearTimeout(setTimeOut);
    }
  }, [resetTimer]);
  React.useEffect(() => {
    if (audio) {
      props.sendAudio(audio, props.currentPart, props.question.id);
    }
  }, [audio]);
  // console.log(audio, "recordtime");
  //return <p>fddfdf</p>;
  return (
    <>
      <HeaderText
        text={`${props.currrentQuestion + 1}. ${props.question.title} `}
      />
      <Grid container spacing={0} className="examContainer">
        <Grid item md={9} xs={12}>
          {props.currrentQuestion == 0 && props.currentPart === 1 && (
            <>
              <div className="imageBlock">
                <img src={image} alt="exam_image" />
              </div>
            </>
          )}
          {props.currrentQuestion == 1 && props.currentPart === 2 && (
            <>
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
                <Clock time={props.question.timer} timer={timerCount} />
                {props.question.timer && <Timer timer={timerCount} />}
              </div>
            </div>
            {resetTimer && (
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
    currentPart: state.pagination.currentPart,
    question:
      state.exam[`questions${state.pagination.currentPart}`][
        state.pagination.question
      ],
    currrentQuestion: state.pagination.question,
    time: state.exam.time,
    image: state.exam.image,
    timer: state.exam.timer,
    resetTimer: state.exam.resetTimer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //onGetQuestion: (id) => dispatch(getQuestion(id)),
    //timerOn: (id) => dispatch({ type: SET_TIMER, payload: 1 }),
    // resetTimeToggle: (resetTimeState) =>
    // dispatch({ type: SET_RESET_TIMER, payload: resetTimeState }),
    onResetTime: (timeState) =>
      dispatch({ type: RESET_TIMER, payload: timeState }),
    sendAudio: (audio, partId, questionId) =>
      sendAudio(audio, partId, questionId),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
