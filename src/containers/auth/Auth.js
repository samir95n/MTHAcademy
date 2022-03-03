import React from 'react';
import { Container, TextField } from '@mui/material';
import CustomButton from '../../components/UI/customButton/CustomButton';
import authLogo from '../../assets/authLogo.svg';
import './auth.scss';

export default function Auth() {
  return (
    <Container maxWidth="sm" className="authContainer" sx={{ p: 0 }}>
      <div className="authBlock">
        <div className="authLogo">
          <img src={authLogo} alt="Logo" />
        </div>
        <div className="authForm">
          <h2 className="authGreeting">Welcome to MTH Academy</h2>
          <div className="authItem">
            <p className="authP">User Name</p>
            <TextField
              className="authInput"
              placeholder="Enter User Name"
              variant="outlined"
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
          <div className="authItem">
            <p className="authP">Password</p>
            <TextField
              className="authInput"
              placeholder="Enter password"
              variant="outlined"
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
        <div className="authBtn">
          <CustomButton name={'Sign In'} />
        </div>
        <div className="authError">
          <p>Incorrect username or password</p>
        </div>
      </div>
    </Container>
  );
}
