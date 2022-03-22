import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Container, TextField, Grid } from "@mui/material";
import { Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import CustomButton from "../../../../components/UI/customButton/CustomButton";

import { SET_QUESTION_PART } from "../../../../store/actions/actionTypes";
import Part1 from "./parts/Part1";
import Part2 from "./parts/Part2";
import Part3 from "./parts/Part3";

import "./style.scss";

function CreateQuestions(props) {
  return (
    <div className="createQuestions">
      <h5 className="createQuestionsHead">Create Blok</h5>
      <div className="createQuestionsNav">
        <div className="createQuestionsNavBlock">
          {parts.map((item, index) => (
            <div
              key={index}
              className={`createQuestionsNavItem ${
                props.currentPart == item.value ? "active" : ""
              } `}
              onClick={() => props.onChangeQuestionPart(item.value)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="createQuestionsForm">
        {props.currentPart == 1 && <Part1 timer={time} />}
        {props.currentPart == 2 && <Part2 timer={time} />}
        {props.currentPart == 3 && <Part3 timer={time} />}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentPart: state.admin.currentPart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeQuestionPart: (partNumber) =>
      dispatch({ type: SET_QUESTION_PART, payload: partNumber }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestions);
const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parts = [
  { name: "Part 1", value: 1 },
  { name: "Part 2", value: 2 },
  { name: "Part 3", value: 3 },
];
