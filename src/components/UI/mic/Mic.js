import React from "react";
import "./mic.scss";
export default function Mic({ time = 1 }) {
  const [timer, setTimer] = React.useState(time);
  const dangerTime = Math.round(time / 2 / 2 / 2);
  React.useEffect(() => {
    if (timer >= 1) {
      const setTimeOut = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(setTimeOut);
    }
  });
  return (
    <div className="micItem">
      <div className="micMask"></div>
      <div
        className="firstCircle"
        style={{
          animationDuration: `${time}s`,
        }}
      ></div>
      <div
        className="secondCircle"
        style={{
          animationDuration: `${time}s`,
        }}
      ></div>
    </div>
  );
}
