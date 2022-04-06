import React from "react";
import "./clock.scss";
export default function Clock({ time = 0, timer = 0 }) {
  const rotateDeg = 360 / time;
  return (
    <div className="clockItem">
      <div className="clockMask">
        <div
          className="pie spinner"
          style={{
            transform: `rotate(-${rotateDeg * timer}deg)`,
            backgroundColor: `${rotateDeg * timer < 45 ? "red" : ""}`,
            visibility: `${rotateDeg * timer == 360 ? "hidden" : "visible"}`,
          }}
        ></div>
        <div
          className="pie filler"
          style={{
            opacity: `${rotateDeg * timer <= 180 ? "1" : "0"}`,
            backgroundColor: `${rotateDeg * timer < 45 ? "red" : ""}`,
          }}
        ></div>
        <div
          className="mask"
          style={
            time && {
              opacity: `${rotateDeg * timer >= 180 ? "1" : "0"}`,
              // backgroundColor: dangerTime
              //   ? dangerTime >= timer
              //     ? "red"
              //     : ""
              //   : "",
            }
          }
        ></div>
      </div>

      <div className="clock"></div>
    </div>
  );
}
