import "./CommentCard.css"

const CommentCard = ({title, mailto, text}) => {
    return (
        <div className="comment-card">
            <p className="comment-card__title">{title}</p>
            <p className="comment-card__text">{mailto}</p>
            <p className="comment-card__text">{text}</p>
        </div>
    )
}

export default CommentCard