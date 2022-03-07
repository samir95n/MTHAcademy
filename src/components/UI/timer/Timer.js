import React from "react";
import "./timer.scss";
export default function Timer({ time = 60 }) {
  //   const [timer, setTimer] = React.useState(time);
  //   const dangerTime = Math.round(time / 2 / 2 / 2);
  //   React.useEffect(() => {
  //     if (timer >= 1) {
  //       const setTimeOut = setInterval(() => setTimer((prev) => prev - 1), 1000);
  //       return () => clearInterval(setTimeOut);
  //     }
  //   });
  return (
    <div className="timer">
      <div className="timerItem">
        <p className="timerText">00:00</p>
      </div>
    </div>
  );
}
