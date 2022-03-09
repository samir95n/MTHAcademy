import React from 'react';
import { Grid } from '@mui/material';
import HeaderText from '../../../components/UI/headerText/HeaderText';
import Clock from '../../../components/UI/clock/Clock';
import Timer from '../../../components/UI/timer/Timer';
import Mic from '../../../components/UI/mic/Mic';
import Pause from '../../../components/UI/pause/Pause';
import CustomButton from '../../../components/UI/customButton/CustomButton';

import { connect, useSelector } from 'react-redux';

import './exam.scss';
import image from '../../../assets/girl.png';

export default function Exam() {
  const currrentSubPage = useSelector((state) => state.exam.currentPage.subPage);

  const startExam = () => {};

  return (
    <>
      <HeaderText text={'1. Describe the picture.'} />
      <Grid container spacing={0} className="examContainer">
        <Grid item md={9} xs={12}>
          {currrentSubPage == 1 && (
            <>
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
                <Grid container spacing={0} className="listsRow">
                  <Grid item md={6} xs={12}></Grid>
                </Grid>
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
            <CustomButton name={'Next'} onClick={startExam} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
