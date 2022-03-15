import React from "react";
import "./footer.scss";
import { useSelector, connect } from "react-redux";

function Footer({ currentPart, isVisablePagination = true }) {
  const getPageNumber = React.useMemo(() => {
    let elements = [];
    for (let index = 1; index <= 3; index++) {
      elements.push(
        <div
          key={index}
          className={`paginationItem ${
            currentPart > index ? "activeDone" : ""
          } ${currentPart == index ? "active" : ""} `}
        >
          {currentPart > index ? icon : <span>{index}</span>}
        </div>
      );
    }
    return elements;
  }, [currentPart]);
  return (
    <div className="footer">
      {isVisablePagination && <div className="pagination">{getPageNumber}</div>}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    currentPart: state.pagination.currentPart,
  };
}
export default connect(mapStateToProps, null)(Footer);

const icon = (
  <svg
    width="27"
    height="21"
    viewBox="0 0 27 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.6952 3.9127L10.8022 19.8057C10.4019 20.2026 9.7561 20.2026 9.35583 19.8057L9.03629 19.4861L8.68984 19.1397L7.18968 17.6395L7.1695 17.6092L0.297678 10.6802C-0.099226 10.2833 -0.099226 9.63417 0.297678 9.2339L2.46383 7.07111C2.8641 6.67084 3.50991 6.67084 3.91018 7.07111L10.0925 13.2971L23.086 0.300201C23.4863 -0.100067 24.1321 -0.100067 24.5324 0.300201L26.7019 2.46972C27.0887 2.86662 27.0887 3.51579 26.6952 3.9127Z"
      fill="white"
    />
  </svg>
);
