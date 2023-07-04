import React from "react";
import "./Button.css";

const Button = ({ text, isPrimary, type }) => {
  return (
    <div className="button-container" type={type}>
      <button className={isPrimary ? "btn-primary" : "btn-secondary"}>
        {text}
      </button>
    </div>
  );
};

export default Button;
