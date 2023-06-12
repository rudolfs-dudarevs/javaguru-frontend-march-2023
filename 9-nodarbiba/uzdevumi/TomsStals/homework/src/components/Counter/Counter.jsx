import React, { useState } from "react";
import "./Counter.css";

// Saņemt no props funkciju handleCountChange, ko izmantot uz pogas klikšķa
// Saņemt no props mainīgo count, kas attēlot pašreiozējo Counter vērtību
const Counter = (props) => {
  const increment = () => {
    props.handleCountChange("increment");
  };

  const decrement = () => {
    props.handleCountChange("decrement");
  };

  return (
    <div className="container">
      <button className="button" onClick={increment}>
        +
      </button>
      <p className="count">{props.count}</p>
      <button className="button" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Counter;
