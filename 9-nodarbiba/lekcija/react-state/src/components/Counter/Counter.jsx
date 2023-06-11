import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount ] = useState(0);

    console.log("_@ Render");

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="container">
            <button className="button" onClick={increment}>+</button>
            <p className="count">{count}</p>
            <button className="button" onClick={decrement}>-</button>
        </div>
    )
}

export default Counter