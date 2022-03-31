import React from "react";
import "./loader.scss";
export default function Loader(props) {
  return (
    <div className="loaderOverlay">
      <div className="loaderBlock">
        <div className="loader"></div>
      </div>
    </div>
  );
}
