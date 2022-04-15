import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import {
  createBlock,
  updateBlock,
  getBlock,
  deleteBlock,
} from "../../../store/actions/adminActions";

import CreateQuestions from "./createQuestions";
import QuetionsList from "./questionsList";

import "./style.scss";

function Quetions(props) {
  const [page, setPage] = React.useState("list");
  const createQuestionHandle = (question, image) => {
    createBlock(question, image);
    setPage("list");
  };
  const updateQuestionHandle = (question, image) => {
    createBlock(props.updatedBlock.id, question, image);
    setPage("list");
  };
  const getBlockHandle = (id) => {
    props.getBlock(id);
    setPage("update");
  };
  return (
    <div className="questionPage">
      <div className="adminBtn">
        <CustomButton
          name={page === "list" ? "Create Blok" : "< Back"}
          onClick={() =>
            setPage((prev) => (prev === "list" ? "create" : "list"))
          }
        />
      </div>
      {page === "list" && (
        <QuetionsList
          getBlock={getBlockHandle}
          deleteBlock={props.deleteBlock}
        />
      )}
      {page === "create" && (
        <CreateQuestions saveHandle={createQuestionHandle} />
      )}
      {page === "update" && (
        <CreateQuestions
          saveHandle={updateQuestionHandle}
          page={page}
          updatedBlock={props.updatedBlock}
        />
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    updatedBlock: state.admin.updatedBlock,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBlock: (block, img) => dispatch(createBlock(block, img)),
    updateBlock: (id, block, img) => dispatch(updateBlock(id, block, img)),
    getBlock: (id) => dispatch(getBlock(id)),
    deleteBlock: (id) => dispatch(deleteBlock(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quetions);
