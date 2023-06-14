import React from "react";
import "./PostCard.css";

// # Šajā rindiņā var redzēt, kā komponente saņem props "title" un "text"
const PostCard = ({ title, text }) => {
  return (gitgit 
    <div className="post-card">
      {/* Šādi izmantojam props "title" un "text" iekš komponentes */}
      <p className="post-card__title">{title}</p>
      <p className="post-card__text">{text}</p>
    </div>
  );
};

export default PostCard;
