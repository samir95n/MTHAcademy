import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import PartNav from '../../../../components/UI/partNav';
import CustomButton from '../../../../components/UI/customButton/CustomButton';

import './style.scss';

function AnswersList(props) {
  const [currentPart, setCurrentPart] = React.useState(1);
  const examDate = props.answers?.exam_date?.split(' ');
  return (
    <div className="answersList">
      <div className="answersListBtn">
        <CustomButton name="< Back" onClick={() => props.setPage('students')} />
      </div>
      <div className="answersListDate">
        <span className="answersDateText">Exam started :</span>
        {examDate && (
          <span className="answersDateInfo">
            Date : {examDate[0] && examDate[0]}
            Time : {examDate[1] && examDate[1]}
          </span>
        )}
      </div>
      <div className="answersListHeader">
        <h3>Recorded voice files</h3>
      </div>
      <div className="answersListNav">
        <PartNav onClick={setCurrentPart} active={currentPart} />
      </div>
      <div className="answersListBlock">
        {currentPart === 1 && (
          <div className="answersPart">
            {props.answers?.part1?.map((item, index) => (
              <div className="answersVoiceItem">
                <p>Answer {++index}</p>
                <div className="answersVoice">
                  <audio controls src={item.answer}></audio>
                </div>
              </div>
            ))}
          </div>
        )}
        {currentPart === 2 && (
          <div className="answersPart">
            {props.answers?.part2?.map((item, index) => (
              <div className="answersVoiceItem">
                <p>Answer {++index}</p>
                <div className="answersVoice">
                  <audio controls src={item.answer}></audio>
                </div>
              </div>
            ))}
          </div>
        )}
        {currentPart === 3 && (
          <div className="answersPart">
            {props.answers?.part3?.map((item, index) => (
              <div className="answersVoiceItem">
                <p>Answer {++index}</p>
                <div className="answersVoice">
                  <audio controls src={item.answer}></audio>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    answers: state.admin.answers,
    studentId: state.admin.selectedStudent,
  };
}

export default connect(mapStateToProps, null)(AnswersList);
