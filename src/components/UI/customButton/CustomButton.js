import React from "react";
import "./customButton.scss";
export default function CustomButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`customButton ${props.type ? props.type : ""}`}
      disabled={props.disabled}
    >
      {props.name}
    </button>
  );
}
