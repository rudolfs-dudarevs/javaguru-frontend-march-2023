import React from "react";
import "./CommentCard.css";

// # Šajā rindiņā var redzēt, kā komponente saņem props "title" un "text"
const UserCard = ({ name, text, email }) => {
  return (
    <div className="comment-card">
      {/* Šādi izmantojam props "title" un "text" iekš komponentes */}
      <p className="comment-card__name">{name}</p>
      <p className="comment-card__email">{text}</p>
      <p className="comment-card__website">{email}</p>
    </div>
  );
};

export default UserCard;
