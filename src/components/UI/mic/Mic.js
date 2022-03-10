import React from 'react';
import useRecorder from '../../../handler/useRecorder';
import './mic.scss';
export default function Mic({ time = 1 }) {
  return (
    <>
      <div className="micItem">
        <div
          className="micMask"
          style={{
            width: `${time ? '35px' : '100%'}`,
            height: `${time ? '35px' : '100%'}`,
            backgroundSize: `${time ? '120%' : '100%'}`,
          }}></div>
        <div
          className="firstCircle"
          style={{
            animationDuration: `${time}s`,
          }}></div>
        <div
          className="secondCircle"
          style={{
            animationDuration: `${time}s`,
          }}></div>
      </div>
    </>
  );
}
