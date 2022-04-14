import React from "react";
import { connect } from "react-redux";
import { TextField } from "@mui/material";
import CustomButton from "../../../../components/UI/customButton/CustomButton";

import {
  getAllBlocks,
  createUser,
} from "../../../../store/actions/adminActions";

import "./style.scss";

function CreateUser(props) {
  const [user, setUser] = React.useState({
    name: "",
    surname: "",
    email: "",
    username: "",
    password: "",
    role: "",
    teacher_id: null,
    block_id: null,
  });
  const onChangeInputs = (e, type) => {
    let target = e.target.value;
    setUser((prev) => {
      if (
        type === "role" &&
        (target === "operator" || target === "teacher" || !target)
      ) {
        return { ...prev, [type]: target, block_id: null, teacher_id: null };
      }
      return { ...prev, [type]: target };
    });
  };
  React.useEffect(() => {
    props.getAllBlocks();
  }, []);
  console.log("mmm", user);
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
              value={user.name}
              onChange={(e) => onChangeInputs(e, "name")}
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
              value={user.surname}
              onChange={(e) => onChangeInputs(e, "surname")}
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
              value={user.email}
              onChange={(e) => onChangeInputs(e, "email")}
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
              value={user.username}
              onChange={(e) => onChangeInputs(e, "username")}
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
              value={user.password}
              onChange={(e) => onChangeInputs(e, "password")}
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
            <p className="settingsP">Choose Role</p>
            <div className="settingsItemSelect">
              <select
                className="settingsItemSelectItem"
                defaultValue={user.role}
                onChange={(e) => onChangeInputs(e, "role")}
              >
                <option></option>
                {props.role == "admin" ? (
                  reles.map((role) => <option value={role}>{role}</option>)
                ) : (
                  <option value={"student"}>student</option>
                )}
              </select>
            </div>
          </div>
          {user.role === "student" && (
            <>
              <div className="settingsItem">
                <p className="settingsP">Choose Teacher</p>
                <div className="settingsItemSelect">
                  <select
                    className="settingsItemSelectItem"
                    defaultValue={user.teacher_id}
                    onChange={(e) => onChangeInputs(e, "teacher_id")}
                  >
                    <option></option>
                    {props.teachers?.map((teacher) => (
                      <option value={teacher.id}>
                        {teacher.name + " " + teacher.surname}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="settingsItem">
                <p className="settingsP">Choose Blok</p>
                <div className="settingsItemSelect">
                  <select
                    className="settingsItemSelectItem"
                    defaultValue={user.block_id}
                    onChange={(e) => onChangeInputs(e, "block_id")}
                  >
                    <option></option>
                    {props.allBlock?.map((block) => (
                      <option value={block.id}>{block.id}</option>
                    ))}
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="settingsBtn">
          <CustomButton
            name={"Create"}
            disabled={
              user.name.length < 4 ||
              user.surname.length < 4 ||
              user.email.length < 4 ||
              user.username.length < 5 ||
              user.password.length < 8 ||
              !user.role ||
              (user.role === "student" && (!user.teacher_id || !user.block_id))
            }
            onClick={() => {
              props.createUser(user);
              props.setPage("table");
            }}
          />
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    allBlock: state.admin.allBlock,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBlocks: () => dispatch(getAllBlocks()),
    createUser: (user) => dispatch(createUser(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);

const reles = ["student", "operator", "teacher"];
