import React from "react";
import "./headerText.scss";
export default function HeaderText(props) {
  return <h2 className="containerHeader">{props.text}</h2>;
}
