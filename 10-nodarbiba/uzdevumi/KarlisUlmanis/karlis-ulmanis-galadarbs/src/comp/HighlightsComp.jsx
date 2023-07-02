
import React, { useState } from 'react';
import "./HighlightsComp.css"

const HighlightsComp = ({reverse, picture, preTitle, title, text}) => {

    const CompClass = `highlight ${reverse ? "img-right" : "" }`;

    return (
        <div className={CompClass}>
            <div className="text-container">
                <div className="preTitle">
                    {preTitle}
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="text">
                    {text}
                </div>
            </div>
            <div className="img-container">
                {picture}
            </div>            
        </div>
    )
}
export default HighlightsComp