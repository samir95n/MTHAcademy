import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { TextField, Grid } from "@mui/material";
import { Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import "../style.scss";

function Part1({ question, timer, setQuestion, setImage }) {
  const addValueHandle = (e, type, input, number) => {
    const target = e.target.value;
    setQuestion((prev) => {
      const newArr = prev.part1[type].map((item) => {
        if (item[`${type}_number`] === number) {
          return { ...item, [input]: target };
        }
        return item;
      });
      return {
        ...prev,
        part1: { ...prev.part1, [type]: newArr },
      };
    });
  };
  return (
    <div className="createQuestionsPart">
      <h6 className="createQuestionsPartHead">Part-1</h6>
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
                value={question.question[0].title}
                onChange={(e) => addValueHandle(e, "question", "title", 1)}
                // onKeyPress={handleKeyPress}
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
              <p className="createQuestionP">Image (747X452)</p>
              <div className="addPhotoBtn">
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <Fab
                    color="primary"
                    size="large"
                    component="span"
                    aria-label="add"
                  >
                    <AddPhotoAlternateIcon />
                  </Fab>
                </label>
              </div>
            </div>
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Timer</p>
              <div className="timerSelect">
                <select
                  className="timerSelectItem"
                  defaultValue={question.question[0].timer}
                  onChange={(e) => addValueHandle(e, "question", "timer", 1)}
                >
                  <option></option>
                  {timer.map((minutes) => (
                    <option value={minutes}>{minutes}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <h6 className="createQuestionItemHead">Question-2</h6>
          <div className="createQuestionsInputBlock">
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Title</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.question[1].title}
                onChange={(e) => addValueHandle(e, "question", "title", 2)}
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
                  defaultValue={question.question[1].timer}
                  onChange={(e) => addValueHandle(e, "question", "timer", 2)}
                >
                  <option></option>
                  {timer.map((minutes) => (
                    <option value={minutes}>{minutes}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <h6 className="createQuestionItemHead">Question-3</h6>
          <div className="createQuestionsInputBlock">
            <div className="createQuestionsInputItem">
              <p className="createQuestionP">Title</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                value={question.question[2].title}
                onChange={(e) => addValueHandle(e, "question", "title", 3)}
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
                  defaultValue={question.question[2].timer}
                  onChange={(e) => addValueHandle(e, "question", "timer", 3)}
                >
                  <option></option>
                  {timer.map((minutes) => (
                    <option value={minutes}>{minutes}</option>
                  ))}
                </select>
              </div>
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
                onChange={(e) => addValueHandle(e, "description", "title", 1)}
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
                onChange={(e) => addValueHandle(e, "description", "text", 1)}
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
                onChange={(e) => addValueHandle(e, "description", "title", 2)}
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
                onChange={(e) => addValueHandle(e, "description", "text", 2)}
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
                onChange={(e) => addValueHandle(e, "description", "title", 3)}
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
                onChange={(e) => addValueHandle(e, "description", "text", 3)}
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

export default Part1;
