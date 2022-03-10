import React from 'react';
import { Grid } from '@mui/material';
import HeaderText from '../../../components/UI/headerText/HeaderText';
import Clock from '../../../components/UI/clock/Clock';
import Timer from '../../../components/UI/timer/Timer';
import Mic from '../../../components/UI/mic/Mic';
import Pause from '../../../components/UI/pause/Pause';
import CustomButton from '../../../components/UI/customButton/CustomButton';
import useRecorder from '../../../handler/useRecorder';

import { connect, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  SET_CANGE_MAIN_PAGE,
  SET_CANGE_EXAM_PART,
  SET_CANGE_SUB_PAGE_NUMBER,
} from '../../../store/actions/actionTypes';

import './exam.scss';
import image from '../../../assets/girl.png';

export default function Exam() {
  const currrentSubPage = useSelector((state) => state.pagination.currentPage.subPage);
  const dispatch = useDispatch();
  // recording
  const { recorderState, ...handlers } = useRecorder();
  const { recordingMinutes, recordingSeconds, initRecording, audio } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;

  //...

  const nextPart = () => {
    dispatch({ type: SET_CANGE_EXAM_PART, payload: 1 });
    dispatch({ type: SET_CANGE_SUB_PAGE_NUMBER, payload: 1 });
  };
  const finishExam = () => {
    dispatch({ type: SET_CANGE_MAIN_PAGE, payload: 'finish' });
    dispatch({ type: SET_CANGE_SUB_PAGE_NUMBER, payload: 1 });

  };
  return (
    <>
      <Grid container spacing={0} className="examContainer">
        <Grid item md={9} xs={12}>
          {currrentSubPage == 1 && (
            <>
              <HeaderText text={'1. Describe the picture.'} />
              <div className="imageBlock">
                <img src={image} alt="exam_image" />
              </div>
            </>
          )}
          {currrentSubPage == 2 && (
            <HeaderText
              text={
                '2.  What are benefits and challange and benefits of a work from gome lifestyle? '
              }
            />
          )}
          {currrentSubPage == 3 && (
            <>
              <HeaderText
                text={
                  '3.  Universities and traditional degrees are not relevant in age of online courses. '
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
                        <li>Online courses are easily accessible and flexible</li>
                        <li>
                          Online courses give students more autonomy and control over their
                          education
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
                        <li>Online classes require a great deal of self-discipline</li>
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
                <Clock />
                <Timer />
              </div>
            </div>
            <div className=" utilitiesBlockItem micBlock">
              <p className="utilitiesBlockText">Start to speak when you hear this (Beep) sound</p>
              <div className="flexBlock">
                <Mic />
                <Timer />
              </div>
            </div>
            <div className=" utilitiesBlockItem pauseBlock">
              <p className="utilitiesBlockText">Click to finish icon answering early</p>
              <div className="flexBlock">
                <Pause />
              </div>
            </div>
          </div>
          <div className="buttonBlock">
            <CustomButton
              name={'Next'}
              onClick={() => {
                currrentSubPage != 3 ? nextPart() : finishExam();
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
