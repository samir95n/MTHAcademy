import { useEffect, useMemo } from "react";
import "./style.scss";
const parts = [
  { name: "Part 1", value: 1 },
  { name: "Part 2", value: 2 },
  { name: "Part 3", value: 3 },
];
function PartNav(props) {
  return (
    <div className="partNav">
      <div className="partNavRow">
        {parts.map((item, index) => (
          <div
            key={index}
            className={`partNavItem ${
              props.active == item.value ? "active" : ""
            }`}
            onClick={() => props.onClick(item.value)}
          >
            <span className="partNavIcon">{item.value}</span>
            <span className="partNavName">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PartNav;
