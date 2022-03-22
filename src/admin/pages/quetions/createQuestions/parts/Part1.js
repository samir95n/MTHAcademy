import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { TextField, Grid } from "@mui/material";
import { Fab } from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

import "../style.scss";

function Part1(props) {
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
                //onChange={(event) => setInput(event.target.value)}
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
                <select className="timerSelectItem">
                  {props.timer.map((minutes) => (
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
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Timer</p>
              <div className="timerSelect">
                <select className="timerSelectItem">
                  {props.timer.map((minutes) => (
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
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Timer</p>
              <div className="timerSelect">
                <select className="timerSelectItem">
                  {props.timer.map((minutes) => (
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
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Text 1</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={4}
                multiline
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Title 2</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Text 2</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={6}
                multiline
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Title 3</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Title"
                variant="outlined"
                rows={2}
                multiline
                //onChange={(event) => setInput(event.target.value)}
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
              <p className="createQuestionP">Text 3</p>
              <TextField
                className="createQuestionInput"
                placeholder="Enter Text"
                variant="outlined"
                rows={6}
                multiline
                //onChange={(event) => setInput(event.target.value)}
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Part1;
