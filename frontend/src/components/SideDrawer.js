import React from "react";
import "./SideDrawer.css";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  if (show === 2) {
    sideDrawerClass.push("show");
  }
  return <div className={sideDrawerClass.join(" ")} onClick={click}></div>;
};

export default SideDrawer;
