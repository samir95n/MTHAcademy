import React from "react";
import "./pause.scss";
import pauseImage from "../../../assets/pause.svg";
export default function Pause({ disabled = false, onClick }) {
  return (
    <div className="pause">
      <div
        className={`pauseItem ${disabled ? "disabled" : ""}`}
        onClick={() => {
          disabled || onClick();
        }}
      >
        <img src={pauseImage} alt="pause_image" />
      </div>
    </div>
  );
}
