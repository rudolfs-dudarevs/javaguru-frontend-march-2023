import React from "react";
import "./UserCard.css";

const UserCard = ({ title, text }) => {
  return (
    <div className="user-card">
      {}
      <p className="user-card__title">{title}</p>
      <p className="user-card__text">{text}</p>
    </div>
  );
};

export default UserCard;
