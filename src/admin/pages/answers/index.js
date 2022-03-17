import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';

import { AssignmentTurnedIn, Delete } from '@material-ui/icons';

import { SET_CURRENT_PAGE } from '../../../store/actions/actionTypes';

import './style.scss';

function Answers(props) {
  return (
    <div className="answersPage">
      <div className="answerTable">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Exam date</th>
              <th className="answerTableCenter">Question block</th>
              <th className="answerTableCenter">answers</th>
              <th className="answerTableCenter">delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Anar Ibrahimov</td>
              <td>03.03.2022</td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span className="answersIcon">
                  <AssignmentTurnedIn style={{ color: '#006ade', fontSize: '22px' }} />
                </span>
              </td>
              <td>
                <span className="answersIcon">
                  <Delete style={{ color: 'red', fontSize: '22px' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Senan Ibrahimov</td>
              <td>03.03.2022</td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span className="answersIcon">
                  <AssignmentTurnedIn style={{ color: '#006ade', fontSize: '22px' }} />
                </span>
              </td>
              <td>
                <span className="answersIcon">
                  <Delete style={{ color: 'red', fontSize: '22px' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ivan Ibrahimov</td>
              <td>03.03.2022</td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span className="answersIcon">
                  <AssignmentTurnedIn style={{ color: '#006ade', fontSize: '22px' }} />
                </span>
              </td>
              <td>
                <span className="answersIcon">
                  <Delete style={{ color: 'red', fontSize: '22px' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Cavad Ibrahimov</td>
              <td>03.03.2022</td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span className="answersIcon">
                  <AssignmentTurnedIn style={{ color: '#006ade', fontSize: '22px' }} />
                </span>
              </td>
              <td>
                <span className="answersIcon">
                  <Delete style={{ color: 'red', fontSize: '22px' }} />
                </span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Alex Ibrahimov</td>
              <td>03.03.2022</td>
              <td>
                <span>2</span>
              </td>
              <td>
                <span className="answersIcon">
                  <AssignmentTurnedIn style={{ color: '#006ade', fontSize: '22px' }} />
                </span>
              </td>
              <td>
                <span className="answersIcon">
                  <Delete style={{ color: 'red', fontSize: '22px' }} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
    onChangeCurrentPage: (pageName) => dispatch({ type: SET_CURRENT_PAGE, payload: pageName }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Answers);
