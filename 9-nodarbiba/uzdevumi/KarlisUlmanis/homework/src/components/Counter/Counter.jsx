import React, { useState } from "react";
import "./Counter.css";

// const cipars = (item) => {
//     switch(item) {
//         case "viens":
//             console.log("viens")
//             break;
//         case "divi":
//             console.log("divi")
//     } 
// }


// Saņemt no props funkciju handleCountChange, ko izmantot uz pogas klikšķa
// Saņemt no props mainīgo count, kas attēlot pašreiozējo Counter vērtību
const Counter = ({handleCountChange, result}) => {   
    return (
        <div className="container">
            {/* onClick piesaistīt handleCountChange - kā parametru funkcija padot 'increment' */}
            <button className="button" onClick={() => handleCountChange('increment')}>+</button>
            {/* ievietot count mainīgo */}
            <p className="count">{result}</p>
            {/* onClick piesaistīt handleCountChange - kā parametru funkcija padot 'decrament' */}
            <button className="button" onClick={() => {handleCountChange('decrament')}}>-</button>
        </div>
    )
}

export default Counter