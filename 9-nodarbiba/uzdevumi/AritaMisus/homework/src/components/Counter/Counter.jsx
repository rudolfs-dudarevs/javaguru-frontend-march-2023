import React from "react";
import "./Counter.css";

const Counter = ({ handleCountChange, count }) => {
  const decrement = () => {
    if (count > 1) {
      handleCountChange("decrement");
    }
  };

  const increment = () => {
    if (count < 10) {
      handleCountChange("increment");
    }
  };

  return (
    <div className="container">
      <button
        className="button minus"
        onClick={() => handleCountChange("decrement")}
      >
        -
      </button>
      <p className="count">{count}</p>
      <button
        className="button plus"
        onClick={() => handleCountChange("increment")}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
