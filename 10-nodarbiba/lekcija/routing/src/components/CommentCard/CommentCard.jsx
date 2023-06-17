import React from "react";
import "./CommentCard.css";

const CommentCard = ({ name, text, email }) => {
  return (
    <div className="comment-card">
      <p className="comment-card__title">{name}</p>
      <p className="comment-card__text">{text}</p>
      <p className="comment-card__text">{email}</p>
    </div>
  );
};

export default CommentCard;
