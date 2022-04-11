import React from "react";
import { Grid } from "@mui/material";
import ContentLayout from "../HOC/layout/contentLayout/ContentLayout";

//redux
import { getBlock } from "../store/actions/examActions";
import { connect } from "react-redux";

import Start from "./contentPages/start/Start";
import Exam from "./contentPages/exam/Exam";
import Finish from "./contentPages/finish/Finish";

function Content(props) {
  React.useEffect(() => {
    props.getBlock(props.blockId);
  }, []);
  return (
    <>
      <ContentLayout>
        {props.currrentPage == "start" && <Start />}
        {props.currrentPage == "exam" && <Exam />}
        {props.currrentPage == "finish" && <Finish />}
      </ContentLayout>
    </>
  );
}
function mapStateToProps(state) {
  return {
    currrentPage: state.pagination.currentPage.pageName,
    blockId: state.auth.blockId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBlock: (blockId) => dispatch(getBlock(blockId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
