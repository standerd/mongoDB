import React from "react";
import "./spinner.css";

const spinner = () => {
  return (
    <div className="spinner">
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loading">Data is Loading, Please Be Patient</p>
    </div>
  );
};

export default spinner;
