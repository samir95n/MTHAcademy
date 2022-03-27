import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Container, TextField } from "@mui/material";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import { SET_CURRENT_PAGE } from "../../../store/actions/actionTypes";

import "./style.scss";

function Users(props) {
  return (
    <div className="settingsPage">
      <div className="settingsBlock">
        <div className="settingsForm">
          <h2 className="settingsGreeting">Create User</h2>
          <div className="settingsItem">
            <p className="settingsP">Name</p>
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
                  fontFamily: "Poppins",
                  padding: "0 12px",
                },
              }}
            />
          </div>
          <div className="settingsItem">
            <p className="settingsP">Surname</p>
            <TextField
              className="settingsInput"
              placeholder="Enter User Surname"
              variant="outlined"
              //onChange={(event) => setInput(event.target.value)}
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
          <div className="settingsItem">
            <p className="settingsP">Mail</p>
            <TextField
              className="settingsInput"
              placeholder="Enter User Mail"
              variant="outlined"
              //onChange={(event) => setInput(event.target.value)}
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
          <div className="settingsItem">
            <p className="settingsP">Login</p>
            <TextField
              className="settingsInput"
              placeholder="Enter User Login"
              variant="outlined"
              //onChange={(event) => setInput(event.target.value)}
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
                  fontFamily: "Poppins",
                  padding: "0 12px",
                },
              }}
            />
          </div>
          <div className="settingsItem">
            <p className="settingsP">Choose Blok</p>
            <div className="settingsItemSelect">
              <select className="settingsItemSelectItem">
                {blocks.map((blok) => (
                  <option value={blok}>{blok}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="settingsBtn">
          <CustomButton
            name={"Create"}
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
    onChangeCurrentPage: (pageName) =>
      dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);

const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
