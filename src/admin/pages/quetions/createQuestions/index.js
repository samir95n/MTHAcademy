import React from "react";
import { connect } from "react-redux";
import { Container, TextField, Grid } from "@mui/material";
import { Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import CustomButton from "../../../../components/UI/customButton/CustomButton";
import PartNav from "../../../../components/UI/partNav";

// import { createBlock } from "../../../../store/actions/adminActions";
import Part1 from "./parts/Part1";
import Part2 from "./parts/Part2";
import Part3 from "./parts/Part3";

import "./style.scss";

function CreateQuestions(props) {
  const [currentPart, setCurrentPart] = React.useState(1);
  const [question, setQuestion] = React.useState(initialState);
  const [image, setImage] = React.useState(null);
  React.useEffect(() => {
    if (props.updatedBlock) {
      console.log(props.updatedBlock);
      setQuestion(props.updatedBlock.block);
    }
  }, [props.updatedBlock]);
  //console.log(question);
  const checkBlokName = false;
  const checkPart1 =
    question.part1.question.some(
      (item) => item.title.length < 1 || !item.timer
    ) ||
    question.part1.description.some(
      (item) => item.title.length < 1 || item.text.length < 1
    );

  const checkPart2 =
    question.part2.question.title.length < 1 ||
    question.part2.question.title1.length < 1 ||
    question.part2.question.text1.length < 1 ||
    question.part2.question.title2.length < 1 ||
    question.part2.question.text2.length < 1 ||
    !question.part2.question.timer ||
    question.part2.description?.some(
      (item) => item.title.length < 1 || item.text.length < 1
    );
  const checkPart3 =
    question.part3.question.title.length < 1 ||
    !question.part3.question.timer ||
    question.part3.description.some(
      (item) => item.title.length < 1 || item.text.length < 1
    );
  return (
    <div className="createQuestions">
      <h5 className="createQuestionsHead">
        {props.page == 3 ? "Update" : "Create"} Blok
      </h5>
      <div className="createQuestionsNav">
        <PartNav onClick={setCurrentPart} active={currentPart} />
      </div>
      <div className="blockName">
        <p className="blockNameP">Blok Name</p>
        <TextField
          className="blockNameInput"
          placeholder="Enter Name"
          variant="outlined"
          value={question.name}
          onChange={(e) => {
            let target = e.target.value;
            setQuestion((prev) => {
              return {
                ...prev,
                name: target.length > 15 ? question.name : target,
              };
            });
          }}
          // onKeyPress={handleKeyPress}
          inputProps={{
            style: {
              height: 50,
              fontSize: 16,
              fontFamily: "Poppins",
              padding: "0 12px",
            },
          }}
        />
      </div>
      <div className="createQuestionsForm">
        {currentPart == 1 && (
          <Part1
            timer={time}
            question={question.part1}
            setQuestion={setQuestion}
            setImage={setImage}
            image={image}
            isVisibledImage={props.page === 3}
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
          name={props.page == 3 ? "Update" : "Create"}
          disabled={
            checkBlokName ||
            checkPart1 ||
            checkPart2 ||
            checkPart3 ||
            (props.page !== 3 && !image)
          }
          onClick={() => props.saveHandle(question, image)}
        />
      </div>
    </div>
  );
}

export default connect(null, null)(CreateQuestions);
const time = [
  { value: 60, name: 1 },
  { value: 120, name: 2 },
  { value: 180, name: 3 },
  { value: 240, name: 4 },
  { value: 300, name: 5 },
  { value: 360, name: 6 },
];
const initialState = {
  name: "",
  part1: {
    question: [
      { title: "", timer: null, question_number: 1 },
      { title: "", timer: null, question_number: 2 },
      { title: "", timer: null, question_number: 3 },
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
