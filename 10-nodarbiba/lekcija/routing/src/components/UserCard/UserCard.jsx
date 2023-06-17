import "./UserCard.css";

const UserCard = ({ name, email, website }) => {
  return (
    <div className="user-card">
      <p className="user-card__title">{name}</p>
      <p className="user-card__text">{email}</p>
      <p className="user-card__text">{website}</p>
    </div>
  );
};

export default UserCard;
