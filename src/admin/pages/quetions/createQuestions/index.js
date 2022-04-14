import React from "react";
import { connect } from "react-redux";
import { Container, TextField, Grid } from "@mui/material";
import { Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import CustomButton from "../../../../components/UI/customButton/CustomButton";
import PartNav from "../../../../components/UI/partNav";

import { SET_QUESTION_PART } from "../../../../store/actions/actionTypes";
import Part1 from "./parts/Part1";
import Part2 from "./parts/Part2";
import Part3 from "./parts/Part3";

import "./style.scss";

function CreateQuestions(props) {
  const [currentPart, setCurrentPart] = React.useState(1);
  const [question, setQuestion] = React.useState(initialState);
  console.log("question", question);

  const checkPart1 =
    question.part1.question.some(
      (item) => item.title.length < 5 || !item.timer
    ) ||
    question.part1.description.some(
      (item) => item.title.length < 5 || item.text.length < 5
    );

  const checkPart2 =
    question.part2.question.title.length < 5 ||
    question.part2.question.title1.length < 5 ||
    question.part2.question.text1.length < 5 ||
    question.part2.question.title2.length < 5 ||
    question.part2.question.text2.length < 5 ||
    !question.part2.question.timer ||
    question.part2.description.some(
      (item) => item.title.length < 5 || item.text.length < 5
    );
  const checkPart3 =
    question.part3.question.title.length < 5 ||
    !question.part3.question.timer ||
    question.part3.description.some(
      (item) => item.title.length < 5 || item.text.length < 5
    );
  return (
    <div className="createQuestions">
      <h5 className="createQuestionsHead">Create Blok</h5>
      <div className="createQuestionsNav">
        <PartNav onClick={setCurrentPart} active={currentPart} />
      </div>
      <div className="createQuestionsForm">
        {currentPart == 1 && (
          <Part1
            timer={time}
            question={question.part1}
            setQuestion={setQuestion}
          />
        )}
        {currentPart == 2 && (
          <Part2
            timer={time}
            question={question.part2}
            setQuestion={setQuestion}
          />
        )}
        {currentPart == 3 && (
          <Part3
            timer={time}
            question={question.part3}
            setQuestion={setQuestion}
          />
        )}
      </div>
      <div className="createQuestionsBtn">
        <CustomButton
          name={"Create"}
          disabled={checkPart1 || checkPart2 || checkPart3}
        />
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
const time = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300];
const initialState = {
  part1: {
    question: [
      { title: "", timer: null, question_number: 1 },
      { title: "", timer: null, question_number: 2 },
      { title: "", picture: "", timer: null, question_number: 3 },
    ],
    description: [
      {
        title: "",
        text: "",
        description_number: 1,
      },
      {
        title: "",
        text: "",
        description_number: 2,
      },
      {
        title: "",
        text: "",
        description_number: 3,
      },
    ],
  },
  part2: {
    question: {
      title: "",
      timer: null,
      title1: "",
      text1: "",
      title2: "",
      text2: "",
    },
    description: [
      {
        title: "",
        text: "",
        description_number: 1,
      },
      {
        title: "",
        text: "",
        description_number: 2,
      },
      {
        title: "",
        text: "",
        description_number: 3,
      },
    ],
  },
  part3: {
    question: {
      title: "",
      timer: null,
    },
    description: [
      {
        title: "",
        text: "",
        description_number: 1,
      },
      {
        title: "",
        text: "",
        description_number: 2,
      },
      {
        title: "",
        text: "",
        description_number: 3,
      },
    ],
  },
};
