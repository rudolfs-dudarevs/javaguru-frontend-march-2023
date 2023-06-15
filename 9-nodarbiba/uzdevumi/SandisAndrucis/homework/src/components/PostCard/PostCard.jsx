import React from "react"
import "./PostCard.css"

const PostCard = ({title, text}) => {
    return (
        <div className="post-card">
            <p className="post-card__title">{title}</p>
            <p className="post-card__text">{text}</p>
        </div>
    )
}

export default PostCard