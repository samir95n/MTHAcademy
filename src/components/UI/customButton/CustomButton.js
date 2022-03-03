import React from 'react';
import './customButton.scss';
export default function CustomButton(props) {
  return (
    <button onClick={props.onClick} className="customButton" disabled={props.disabled}>
      {props.name}
    </button>
  );
}
