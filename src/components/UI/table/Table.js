import React from "react";
import "./table.scss";
export default function Table({ thead, tbody }) {
  return (
    <table className="customTable">
      <thead>
        <tr>
          {thead?.map((item) => (
            <th className={`${item.class ? item.class : ""}`}>{item.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbody &&
          tbody?.map((item, index) => (
            <tr key={index}>
              {item.map((elment) => (
                <td>{elment}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
