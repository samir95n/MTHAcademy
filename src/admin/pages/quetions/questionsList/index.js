import { useEffect, useMemo } from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { Edit } from "@material-ui/icons";

import CustomButton from "../../../../components/UI/customButton/CustomButton";

import { SET_CURRENT_PAGE } from "../../../../store/actions/actionTypes";

import "./style.scss";

function QuetionsList(props) {
  return (
    <div className="quetionsList">
      <div className="quetionsListButton">
        <CustomButton
          name={"Create Blok"}
          //onClick={buttonClickHandler}
        />
      </div>
      <div className="quetionsListBlock">
        <Grid container spacing={2} className="quetionsListRow">
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
          <Grid item md={2} xs={6}>
            <div className="questionsItem">
              <span className="questionsItemName">Block 1</span>
              <span className="questionsItemIcon">
                <Edit style={{ color: "#336b88", fontSize: "40px" }} />
              </span>
            </div>
          </Grid>
        </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuetionsList);
