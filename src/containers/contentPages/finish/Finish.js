import React from 'react';
import { Grid } from '@mui/material';
import './finish.scss';
import CustomButton from '../../../components/UI/customButton/CustomButton';
import finishImage from '../../../assets/finish.svg';

export default function Finish() {
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
            <CustomButton name={'Finish'} />
          </div>
        </div>
      </div>
    </>
  );
}
