import React from "react"
import "./GridControls.css"

const GridControls = ({ handleResourceChange }) => {
    return (
        <div className="grid-controls">
            <button className="grid-controls__button" onClick={() => handleResourceChange('posts')}>Posts</button>
            <button className="grid-controls__button" onClick={() => handleResourceChange('users')}>Users</button>
            <button className="grid-controls__button" onClick={() => handleResourceChange('comments')}>Comments</button>
        </div>
    )
}

export default GridControls