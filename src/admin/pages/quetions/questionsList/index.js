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
  // console.log("allBlock", props.allBlock);
  const selectBlockHandle = (item) => {
    props.setSelectedBlock((prev) => {
      if (!prev) {
        return item;
      }
      if (item.id != prev.id) {
        return item;
      }
      return prev;
    });
  };
  return (
    <div className="quetionsList">
      <div className="quetionsListBlock">
        <Grid container spacing={2} className="quetionsListRow">
          {props.allBlock?.map((item, index) => (
            <Grid item md={2} xs={6} key={index}>
              <div className="questionsItem">
                <span className="questionsItemName">Blok {item.id}</span>
                <span className="questionsItemIcon">
                  <Edit
                    style={{ color: "#336b88", fontSize: "40px" }}
                    onClick={() => props.getBlock(item.id)}
                  />
                  <Delete
                    style={{ color: "red", fontSize: "40px" }}
                    onClick={() => props.deleteBlock(item.id)}
                  />
                </span>
              </div>
            </Grid>
          ))}
        </Grid>
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
    getAllBlocks: (pageName) => dispatch(getAllBlocks()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuetionsList);
