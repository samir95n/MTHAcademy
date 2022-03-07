import React from "react";
import "./clock.scss";
export default function Clock({ time = 20 }) {
  const [timer, setTimer] = React.useState(time);
  const dangerTime = Math.round(time / 2 / 2 / 2);
  React.useEffect(() => {
    if (timer >= 1) {
      const setTimeOut = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(setTimeOut);
    }
  });
  console.log(timer);
  return (
    <div className="clockItem">
      <div className="clockMask">
        <div
          className="pie spinner"
          style={{
            animationDuration: `${time}s`,
            backgroundColor: dangerTime >= timer ? "red" : "",
          }}
        ></div>
        <div
          className="pie filler"
          style={{
            animationDuration: `${time}s`,
            backgroundColor: dangerTime >= timer ? "red" : "",
          }}
        ></div>
        <div className="mask" style={{ animationDuration: `${time}s` }}></div>
      </div>
      <div className="clock"></div>
    </div>
  );
}
