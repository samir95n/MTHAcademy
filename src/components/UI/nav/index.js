import { useEffect, useMemo } from "react";
import "./style.scss";
const pageName = ["user", "quetions", "answers", "settings", "logout"];
function Nav(props) {
  return (
    <div className="navBlock">
      <div className="navRow">
        {pageName.map((item) => (
          <div
            className={`navItem ${props.active == item ? "active" : ""}`}
            onClick={() => props.onClick(item)}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Nav;
