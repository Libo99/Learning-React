import React from "react";
import loading from "../assets/loading-kopi.gif";
import "./Loading.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default LoadingSpinner;
