import React, { useState } from "react";
import "./Counter.css";

// Saņemt no props funkciju handleCountChange, ko izmantot uz pogas klikšķa
// Saņemt no props mainīgo count, kas attēlot pašreiozējo Counter vērtību
const Counter = () => {   
    return (
        <div className="container">
            {/* onClick piesaistīt handleCountChange - kā parametru funkcija padot 'increment' */}
            <button className="button" onClick={() => {}}>+</button>
            {/* ievietot count mainīgo */}
            <p className="count">{5}</p>
            {/* onClick piesaistīt handleCountChange - kā parametru funkcija padot 'decrament' */}
            <button className="button" onClick={() => {}}>-</button>
        </div>
    )
}

export default Counter