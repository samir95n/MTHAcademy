import React from "react";
import { connect } from "react-redux";
import CustomButton from "../../../components/UI/customButton/CustomButton";

import {
  createBlock,
  getBlock,
  deleteBlock,
} from "../../../store/actions/adminActions";

import CreateQuestions from "./createQuestions";
import QuetionsList from "./questionsList";

import "./style.scss";

function Quetions(props) {
  const [page, setPage] = React.useState("list");
  const [selectedBlock, setSelectedBlock] = React.useState(null);
  console.log("selectedBlock", selectedBlock);

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
          setSelectedBlock={setSelectedBlock}
          getBlock={props.getBlock}
          deleteBlock={props.deleteBlock}
        />
      )}
      {page === "create" && (
        <CreateQuestions setPage={setPage} saveHandle={createBlock} />
      )}
      {page === "update" && <CreateQuestions setPage={setPage} />}
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
    createBlock: (block, img) => dispatch(createBlock(block, img)),
    getBlock: (id) => dispatch(getBlock(id)),
    deleteBlock: (id) => dispatch(deleteBlock(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quetions);
