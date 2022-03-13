import React from "react";
import "./pause.scss";
import pauseImage from "../../../assets/pause.svg";
export default function Pause(props) {
  return (
    <div className="pause">
      <div className="pauseItem" onClick={props.onClick}>
        <img src={pauseImage} alt="pause_image" />
      </div>
    </div>
  );
}
