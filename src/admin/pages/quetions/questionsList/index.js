import React from "react";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import { Edit, Delete } from "@material-ui/icons";

import { getAllBlocks } from "../../../../store/actions/adminActions";

import "./style.scss";

function QuetionsList(props) {
  React.useEffect(() => {
    props.getAllBlocks();
  }, []);
  // console.log('allBlock', props.allBlock);
  return (
    <div className="quetionsList">
      <div className="quetionsListBlock">
        <Grid container spacing={2} className="quetionsListRow">
          {props.allBlock?.map((item, index) => (
            <Grid item md={2} xs={6} key={index}>
              <div className="questionsItem">
                <div className="questionsItemName">
                  <p>Name:</p>
                  <span>{item.name}</span>
                </div>
                <span className="questionsItemIcon">
                  <Edit
                    style={{
                      color: "#336b88",
                      fontSize: "33px",
                      marginRight: "5px",
                    }}
                    onClick={() => props.getBlock(item.id)}
                  />
                  <Delete
                    style={{ color: "red", fontSize: "33px" }}
                    onClick={() => props.deleteBlock(item.id)}
                  />
                </span>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="errors">
        {props.bloksError && <p>{props.bloksError}</p>}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    allBlock: state.admin.allBlock,
    bloksError: state.errors.deleteBlokError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBlocks: (pageName) => dispatch(getAllBlocks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuetionsList);
