import React from "react";
import "./UserCard.css";

// # Šajā rindiņā var redzēt, kā komponente saņem props "title" un "text"
const UserCard = ({ name, email, website }) => {
  return (
    <div className="user-card">
      {/* Šādi izmantojam props "title" un "text" iekš komponentes */}
      <p className="user-card__name">{name}</p>
      <p className="user-card__email">{email}</p>
      <p className="user-card__website">{website}</p>
    </div>
  );
};

export default UserCard;
