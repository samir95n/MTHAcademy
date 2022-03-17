import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Container, TextField } from '@mui/material';
import { Fab, Button } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import CustomButton from '../../../components/UI/customButton/CustomButton';

import { SET_CURRENT_PAGE } from '../../../store/actions/actionTypes';

import './style.scss';

function CreateQuestions(props) {
  return (
    <div className="createQuestions">
      <h5 className="createQuestionsHead">Create Blok</h5>
      <div className="createQuestionsForm">
        <div className="createQuestionsPart">
          <h6 className="createQuestionsPartHead">Part-1</h6>
          <div className="createQuestion">
            <h6 className="createQuestionsPartHead">Question-1</h6>
            <div className="createQuestionsInputBlock">
              <div className="createQuestionsInputItem">
                <p className="createQuestionP">Title</p>
                <TextField
                  className="ааа"
                  placeholder="Enter Time"
                  variant="outlined"
                  rows={4}
                  //onChange={(event) => setInput(event.target.value)}
                  // onKeyPress={handleKeyPress}
                  inputProps={{
                    style: {
                      fontSize: 16,
                      fontFamily: 'Poppins',
                      padding: '0 12px',
                    },
                  }}
                />
              </div>
              <div className="createQuestionsInputItem">
                <p className="createQuestionP">Photo (747X452)</p>
                <div className="addPhotoBtn">
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: 'none' }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                    />
                    <Fab color="primary" size="small" component="span" aria-label="add">
                      <AddPhotoAlternateIcon />
                    </Fab>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentPage: state.admin.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeCurrentPage: (pageName) => dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestions);
