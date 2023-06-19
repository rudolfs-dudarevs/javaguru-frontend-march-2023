import React from "react";
import "./Button.css";

const Button = ({ text, isPrimary }) => {
  return (
    <div className="button-container">
      <button className={isPrimary ? "btn-primary" : "btn-secondary"}>
        {text}
      </button>
    </div>
  );
};

export default Button;
