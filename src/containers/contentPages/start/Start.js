import React from 'react';
import { Grid } from '@mui/material';
import HeaderText from '../../../components/UI/headerText/HeaderText';
import CustomButton from '../../../components/UI/customButton/CustomButton';
import { useDispatch, connect } from 'react-redux';
import { SET_CANGE_MAIN_PAGE } from '../../../store/actions/actionTypes';
import './start.scss';

function Start(props) {
  React.useEffect(() => {
    const setTimeoutVal = setTimeout(() => props.startExam(), 30000);
    return () => clearTimeout(setTimeoutVal);
  }, []);
  return (
    <>
      <HeaderText text={`Part ${props.currentPart}`} />
      <Grid container spacing={0} className="startContainer">
        <Grid item md={9} xs={12}>
          <div className="startTextBlock">
            {props.part &&
              props.part.map((item, index) => (
                <div key={index} className="startTextItem">
                  <h4 className="startTextHead">{item.title}</h4>
                  {item.text.split('.').map((paragraph, key) => (
                    <p key={key} className="startTextParagraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

function mapStateToProps(state) {
  return {
    currentPart: state.pagination.currentPart,
    part: state.exam[`part${state.pagination.currentPart}`],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startExam: () => dispatch({ type: SET_CANGE_MAIN_PAGE, payload: 'exam' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
