import React, { useState } from "react";
import "./Counter.css";

const Counter = ({handleCountChange, count}) => {   
    return (
        <div className="container">
            <button className="button" onClick={() => handleCountChange("increment")}>+</button>
            <p className="count">{count}</p>
            <button className="button" onClick={() => handleCountChange("decrement")}>-</button>
        </div>
    )
}

export default Counter