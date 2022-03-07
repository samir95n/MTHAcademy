import React from "react";
import { Grid } from "@mui/material";
import HeaderText from "../../../components/UI/headerText/HeaderText";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import "./start.scss";

export default function Start() {
  const startExam = () => {};
  return (
    <>
      <HeaderText text={"Part 1"} />
      <Grid container spacing={0} className="startContainer">
        <Grid item md={9} xs={12}>
          <div className="startTextBlock">
            <div className="startTextItem">
              <h4 className="startTextHead">Questions Overview:</h4>
              <p className="startTextParagraph">
                In this part of the speaking exam firstly you will be asked to
                describe a picture;
              </p>
              <p className="startTextParagraph">
                Then you will be asked two questions about the picture.
              </p>
            </div>
            <div className="startTextItem">
              <h4 className="startTextHead">Time management:</h4>
              <p className="startTextParagraph">
                You will have <span>one minute</span> for getting acquainted
                with each question;
              </p>
              <p className="startTextParagraph">
                You will have <span>one minute</span> for each response.
              </p>
            </div>
            <div className="startTextItem">
              <h4 className="startTextHead">Instructions:</h4>
              <p className="startTextParagraph">
                Start speaking when you hear <span>Beep</span> sound;
              </p>
              <p className="startTextParagraph">
                If you want to finish the answering early click the icon
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={3} xs={12} className="rightSide">
          <div className="buttonBlock">
            <CustomButton name={"Start exam"} onClick={startExam} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
