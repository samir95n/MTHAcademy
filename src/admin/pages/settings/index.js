import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Container, TextField } from '@mui/material';
import CustomButton from '../../../components/UI/customButton/CustomButton';

import { SET_CURRENT_PAGE } from '../../../store/actions/actionTypes';

import './style.scss';

function Settings(props) {
  return (
    <div className="settingsPage">
      <div className="settingsBlock">
        <div className="settingsForm">
          <h2 className="settingsGreeting">Edit Your Login and Password</h2>
          <div className="settingsItem">
            <p className="settingsP">Login</p>
            <TextField
              className="settingsInput"
              placeholder="Enter User Name"
              variant="outlined"
              //onChange={(event) => setInput(event.target.value)}
              // onKeyPress={handleKeyPress}
              inputProps={{
                style: {
                  fontSize: 16,
                  height: 50,
                  fontFamily: 'Poppins',
                  padding: '0 12px',
                },
              }}
            />
          </div>
          <div className="settingsItem">
            <p className="settingsP">Password</p>
            <TextField
              className="settingsInput"
              placeholder="Enter password"
              variant="outlined"
              // value={password}
              // onChange={(event) => setPassowrd(event.target.value)}
              // onKeyPress={handleKeyPress}
              inputProps={{
                style: {
                  fontSize: 16,
                  height: 50,
                  fontFamily: 'Poppins',
                  padding: '0 12px',
                },
              }}
            />
          </div>
        </div>
        <div className="settingsBtn">
          <CustomButton
            name={'Edit'}
            //onClick={buttonClickHandler}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
