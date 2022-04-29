import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../../components/UI/customButton/CustomButton';

import {
  createBlock,
  updateBlock,
  getBlock,
  deleteBlock,
} from '../../../store/actions/adminActions';
import { SET_SUB_PAGE, SET_INITIAL_ERROR } from '../../../store/actions/actionTypes';

import CreateQuestions from './createQuestions';
import QuetionsList from './questionsList';

import './style.scss';

function Quetions(props) {
  const [page, setPage] = React.useState('list');
  const createQuestionHandle = (question, image) => {
    props.createBlock(question, image);
  };
  const updateQuestionHandle = (question, image) => {
    props.updateBlock(props.updatedBlock.id, question, image);
  };
  const getBlockHandle = (id) => {
    props.getBlock(id);
    props.setSubPage(3);
  };
  return (
    <div className="questionPage">
      <div className="adminBtn">
        <CustomButton
          name={props.subPage === 1 ? 'Create Block' : '< Back'}
          onClick={() => {
            props.setSubPage(props.subPage == 1 ? 2 : 1);
            props.setInitialEror();
          }}
        />
      </div>
      {props.subPage === 1 && (
        <QuetionsList getBlock={getBlockHandle} deleteBlock={props.deleteBlock} />
      )}
      {props.subPage === 2 && <CreateQuestions saveHandle={createQuestionHandle} />}
      {props.subPage === 3 && (
        <CreateQuestions
          saveHandle={updateQuestionHandle}
          page={props.subPage}
          updatedBlock={props.updatedBlock}
        />
      )}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    updatedBlock: state.admin.updatedBlock,
    subPage: state.admin.subPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createBlock: (block, img) => dispatch(createBlock(block, img)),
    updateBlock: (id, block, img) => dispatch(updateBlock(id, block, img)),
    getBlock: (id) => dispatch(getBlock(id)),
    deleteBlock: (id) => dispatch(deleteBlock(id)),
    setSubPage: (page) => dispatch({ type: SET_SUB_PAGE, payload: page }),
    setInitialEror: () => dispatch({ type: SET_INITIAL_ERROR }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quetions);
