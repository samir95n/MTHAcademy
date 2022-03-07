import React from "react";
import "./pause.scss";
import pauseImage from "../../../assets/pause.svg";
export default function Pause({ time = 60 }) {
  return (
    <div className="pause">
      <div className="pauseItem">
        <img src={pauseImage} alt="pause_image" />
      </div>
    </div>
  );
}
