import React from "react";
import { Grid } from "@mui/material";
import HeaderText from "../../../components/UI/headerText/HeaderText";
import Clock from "../../../components/UI/clock/Clock";
import Timer from "../../../components/UI/timer/Timer";
import Mic from "../../../components/UI/mic/Mic";
import Pause from "../../../components/UI/pause/Pause";
import BeepSound from "../../../assets/beep.mp3";

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
  SET_QUESTION,
} from "../../../store/actions/actionTypes";

import "./exam.scss";
//import image from "../../../assets/girl.png";

const callBeep = () => {
  let myAudio = new Audio(BeepSound);
  myAudio.volume = 0.03;
  try {
    myAudio.play();
  } catch (err) {
    console.log(err);
  }
};

function Exam(props) {
  // recording
  const [timerCount, setTimerCount] = React.useState(null);
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
    setTimerCount(props.question.timer);
  }, [props.question]);
  React.useEffect(() => {
    if (resetTimer) {
      const setTimeOut = setTimeout(() => {
        // callBeep();
        setTimerCount(props.question.timer);
        startRecording();
      }, 3000);
      return () => clearTimeout(setTimeOut);
    }
  }, [resetTimer]);
  React.useEffect(() => {
    if (audio) {
      sendAudio(audio, props.currentPart, props.question.id);
      nextQuestion();
    }
  }, [audio]);
  // console.log(audio, "recordtime");
  //return <p>fddfdf</p>;

  const nextQuestion = () => {
    cancelRecording();
    setResetTimer(false);
    props.changeQuestion();
  };
  return (
    <>
      <Grid container spacing={0} className="examContainer">
        <Grid item md={9} xs={12}>
          <HeaderText
            text={`${props.currrentQuestion + 1}. ${props.question.title} `}
          />
          {props.currrentQuestion === 0 && props.currentPart === 1 && (
            <>
              <div className="imageBlock">
                <img src={props.question.photo_path} alt="exam_image" />
              </div>
            </>
          )}
          {props.currrentQuestion === 0 && props.currentPart === 2 && (
            <>
              <div className="listsBlock">
                <div className="listsRow">
                  <div className="listItem">
                    <div className="listHead">
                      <span>{props.question.title1}</span>
                    </div>
                    <div className="listBody">
                      <ul>
                        {props.question.text1.split(".").map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="listItem">
                    <div className="listHead">
                      <span>{props.question.title2}</span>
                    </div>
                    <div className="listBody">
                      <ul>
                        {props.question.text2.split(".").map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
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
                      disabled={!initRecording}
                      onClick={() => {
                        saveRecording();
                      }}
                    />
                  </div>
                </div>
              </>
            )}
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
    changeQuestion: () => dispatch({ type: SET_QUESTION }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exam);
