import React from "react";
import "./Button.css";

const Button = ({ setLoad }) => {
  const handleBtnClick = () => {
    setLoad((prev) => !prev);
  };
  return (
    <div className="btn_wrapper">
      <button className="generate_btn" onClick={handleBtnClick}>
        Click me to generate random colors, where is unlocked
      </button>
    </div>
  );
};

export default Button;
