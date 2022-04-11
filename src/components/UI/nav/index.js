import { useEffect, useMemo } from "react";
import "./style.scss";
const pageName = ["users", "quetions", "answers", "settings"];
function Nav({ role, active, onClick, logOutHandle }) {
  return (
    <div className="navBlock">
      <div className="navRow">
        {pageName.map((item, index) => {
          if (
            (role == "teacher" && item == "answers") ||
            (role == "operator" && (item == "users" || item == "quetions")) ||
            role == "admin"
          )
            return (
              <div
                key={index}
                className={`navItem ${active == item ? "active" : ""}`}
                onClick={() => onClick(item)}
              >
                <span>{item}</span>
              </div>
            );
        })}
        <div className={`navItem`} onClick={logOutHandle}>
          <span>logout</span>
        </div>
      </div>
    </div>
  );
}
export default Nav;
