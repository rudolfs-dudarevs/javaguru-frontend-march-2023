
import React, { useState } from 'react';
import "./HighlightsComp.css"

const HighlightsComp = ({align, picture, preTitle, title, text, boxOrder}) => {
    return (
        <div className={align}>
            <div className="img-container">
                {picture}
            </div>
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
        </div>
    )
}
export default HighlightsComp