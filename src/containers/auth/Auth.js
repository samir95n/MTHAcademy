import React from "react";
import { Container, TextField } from "@mui/material";
import CustomButton from "../../components/UI/customButton/CustomButton";
import authLogo from "../../assets/authLogo.svg";
import "./auth.scss";
import { login } from "../../store/actions/authActions";

import { connect } from "react-redux";

function Auth(props) {
  const [input, setInput] = React.useState("");
  const [password, setPassowrd] = React.useState("");

  const buttonClickHandler = React.useCallback(() => {
    props.onLogin(input, password);
  }, [props, input, password]);

  const handleKeyPress = React.useCallback(
    (event) => {
      if (event.key === "Enter") {
        buttonClickHandler();
      }
    },
    [buttonClickHandler]
  );
  console.log("eee", props.error);
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
              onChange={(event) => setInput(event.target.value)}
              onKeyPress={handleKeyPress}
              inputProps={{
                style: {
                  fontSize: 16,
                  height: 50,
                  fontFamily: "Poppins",
                  padding: "0 12px",
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
              value={password}
              onChange={(event) => setPassowrd(event.target.value)}
              onKeyPress={handleKeyPress}
              inputProps={{
                style: {
                  fontSize: 16,
                  height: 50,
                  fontFamily: "Poppins",
                  padding: "0 12px",
                },
              }}
            />
          </div>
        </div>
        <div className="authBtn">
          <CustomButton name={"Sign In"} onClick={buttonClickHandler} />
        </div>
        <div className="authError">
          {props.error && <p>Incorrect username or password</p>}
        </div>
      </div>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    error: state.errors.authError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (input, password) => dispatch(login(input, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
