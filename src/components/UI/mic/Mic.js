import React from "react";
import useRecorder from "../../../handler/useRecorder";
import "./mic.scss";
export default function Mic({ recording = false }) {
  return (
    <>
      <div className="micItem">
        <div
          className="micMask"
          // style={{
          //   width: `${recording ? "100%" : "100%"}`,
          //   height: `${recording ? "100%" : "100%"}`,
          //   backgroundSize: `${recording ? "100%" : "100%"}`,
          // }}
        ></div>
        <div
          className="firstCircle"
          style={{
            animationDuration: `${recording ? 1 : 0}s`,
          }}
        ></div>
        <div
          className="secondCircle"
          style={{
            animationDuration: `${recording ? 1 : 0}s`,
          }}
        ></div>
      </div>
    </>
  );
}
