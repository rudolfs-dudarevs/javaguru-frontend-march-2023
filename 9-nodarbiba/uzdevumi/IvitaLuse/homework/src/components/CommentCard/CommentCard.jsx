import React from "react";
import "./CommentCard.css";

const CommentCard = ({ title, text }) => {
  return (
    <div className="comment-card">
      {}
      <p className="comment-card__title">{title}</p>
      <p className="comment-card__text">{text}</p>
    </div>
  );
};

export default CommentCard;
