import React from "react"
import "./UserCard.css"

const UserCard = ({name, email, website}) => {
    return (
        <div className="user-card">
            <p className="user-card__name">{name}</p>
            <p className="user-card__email"><a href={`mailto:${email}`}>{email}</a></p>
            <p className="user-card__website"><a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
        </div>
    )
}

export default UserCard