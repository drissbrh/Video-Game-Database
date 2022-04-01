import React from "react";
import "./Backdrop.css";

const Backdrop = ({ click, show }) => {
  return (
    (show === 2 || show === 3) && (
      <div className="backdrop" onClick={click}>
        Backdrop
      </div>
    )
  );
};

export default Backdrop;
