import React from "react"
import "./UserCard.css"

const UserCard = ({name, email, website}) => {
    return (
        <div className="user-card">
            <p className="user-card__name">{name}</p>
            <p className="user-card__email">{email}</p>
            <p className="user-card__website">{website}</p>
        </div>
    )
}

export default UserCard