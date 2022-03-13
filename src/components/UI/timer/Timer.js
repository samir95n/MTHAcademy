import React from "react";
import "./timer.scss";
export default function Timer({ timer = 0 }) {
  const timerFormat = React.useMemo(() => {
    const timerMinuts = Math.floor(timer / 60);
    const timerSeconds = timer - timerMinuts * 60;
    if (timer < 60) {
      if (timer < 10) {
        return `00:0${timer}`;
      }
      return `00:${timer}`;
    } else {
      if (timerMinuts < 10) {
        if (timerSeconds < 10) {
          return `0${timerMinuts}:0${timerSeconds}`;
        }
        return `0${timerMinuts}:${timerSeconds}`;
      } else {
        if (timerSeconds < 10) {
          return `${timerMinuts}:0${timerSeconds}`;
        }
        return `${timerMinuts}:${timerSeconds}`;
      }
    }
  }, [timer]);
  return (
    <div className="timer">
      <div className="timerItem">
        <p className="timerText">{timerFormat}</p>
      </div>
    </div>
  );
}
