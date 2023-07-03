import "./UserCard.css"

const UserCard = ({title, nickname, mailto, post, ring}) => {
    return (
        <div className="user-card">
            <p className="user-card__name">{title}</p>
            <p className="user-card__name">{nickname}</p>
            <ul className="user-card__list-item">
                <li>E-mail: {mailto}</li>
                <li>Phone: {ring}</li>
                <li>Website: {post}</li>
            </ul>
        </div>
    )
}

export default UserCard