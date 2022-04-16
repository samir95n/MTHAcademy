import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { TextField, Grid } from "@mui/material";
import { Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import "../style.scss";

function Part2({ question, timer, setQuestion }) {
  const descriptionHandle = (e, input, number) => {
    const target = e.target.value;
    setQuestion((prev) => {
      const newArr = prev.part2.description.map((item) => {
        if (item.description_number === number) {
          return { ...item, [input]: target };
        }
        return item;
      });
      return {
        ...prev,
        part2: { ...prev.part2, description: newArr },
      };
    });
  };
  const questionHandle = (e, input) => {
    const target = e.target.value;
    setQuestion((prev) => {
      return {
        ...prev,
        part2: {
          ...prev.part2,
          question: { ...prev.part2.question, [input]: target },
        },
      };
    });
  };
  return (
    <div className="createQuestionsPart">
      <h6 className="createQuestionsPartHead">Part-2</h6>
      <Grid container spacing={1} className="createQuestionRow">
        <Grid item md={6} xs={12} className="createQuestionItem">
          <h6 className="createQuestionItemHead">Question-1</h6>
          <div className="createQuestionsInputBlock">
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Title</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.question.title}
                onChange={(e) => questionHandle(e, "title")}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Timer</p>
              <div className="timerSelect">
                <select
                  className="timerSelectItem"
                  value={question.question.timer}
                  onChange={(e) => questionHandle(e, "timer")}
                >
                  <option></option>
                  {timer.map((minutes, index) => (
                    <option key={index} value={minutes.value}>
                      {minutes.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Colunm name 1</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.question.title1}
                onChange={(e) => questionHandle(e, "title1")}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Colum text 1</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={4}
                multiline
                value={question.question.text1}
                onChange={(e) => questionHandle(e, "text1")}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Colum name 2</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.question.title2}
                onChange={(e) => questionHandle(e, "title2")}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Colum text 2</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={4}
                multiline
                value={question.question.text2}
                onChange={(e) => questionHandle(e, "text2")}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
          </div>
        </Grid>
        <Grid item md={6} xs={12} className="createQuestionItem">
          <h6 className="createQuestionItemHead">Description</h6>
          <div className="createQuestionsInputBlock">
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Title 1</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.description[0].title}
                onChange={(e) => descriptionHandle(e, "title", 1)}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Text 1</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={4}
                multiline
                value={question.description[0].text}
                onChange={(e) => descriptionHandle(e, "text", 1)}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Title 2</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.description[1].title}
                onChange={(e) => descriptionHandle(e, "title", 2)}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Text 2</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={6}
                multiline
                value={question.description[1].text}
                onChange={(e) => descriptionHandle(e, "text", 2)}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Title 3</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.description[2].title}
                onChange={(e) => descriptionHandle(e, "title", 3)}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Text 3</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={6}
                multiline
                value={question.description[2].text}
                onChange={(e) => descriptionHandle(e, "text", 3)}
                inputProps={{
                  style: {
                    fontSize: 16,
                    fontFamily: "Poppins",
                    padding: "0 12px",
                  },
                }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Part2;
