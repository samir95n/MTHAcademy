import React from "react";
import { connect } from "react-redux";
import { TextField } from "@mui/material";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import { changeAuthData } from "../../../store/actions/adminActions";

import "./style.scss";

function Settings(props) {
  const [input, setInput] = React.useState("");
  const [password, setPassowrd] = React.useState("");
  const buttonClickHandler = React.useCallback(() => {
    props.changeAuthData(props.id, input, password);
    setInput("");
    setPassowrd("");
  }, [props, input, password]);

  return (
    <div className="settingsPage">
      <div className="settingsBlock">
        <div className="settingsForm">
          <h2 className="settingsGreeting">Edit Your Login and Password</h2>
          <div className="settingsItem">
            <p className="settingsP">Login</p>
            <TextField
              className="settingsInput"
              placeholder="Enter Login"
              variant="outlined"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              //onKeyPress={handleKeyPress}
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
          <div className="settingsItem">
            <p className="settingsP">Password</p>
            <TextField
              className="settingsInput"
              placeholder="Enter password"
              variant="outlined"
              value={password}
              onChange={(event) => setPassowrd(event.target.value)}
              // onKeyPress={handleKeyPress}
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
        <div className="settingsBtn">
          <CustomButton
            name={"Edit"}
            disabled={!(input.length > 3 && password.length > 3)}
            onClick={buttonClickHandler}
          />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    id: state.auth.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeAuthData: (id, input, password) =>
      dispatch(changeAuthData(id, input, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
