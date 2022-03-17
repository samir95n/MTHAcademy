import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import CustomButton from '../../../components/UI/customButton/CustomButton';

import { SET_CURRENT_PAGE } from '../../../store/actions/actionTypes';

import QuetionsList from './QuetionsList';
import CreateQuestions from './CreateQuestions';

import './style.scss';

function Quetions(props) {
  return (
    <div className="questionPage">
      <QuetionsList />
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
    onChangeCurrentPage: (pageName) => dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quetions);
