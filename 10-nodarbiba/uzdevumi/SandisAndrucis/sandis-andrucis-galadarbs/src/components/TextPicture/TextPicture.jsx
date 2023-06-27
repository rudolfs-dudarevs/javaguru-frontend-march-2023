import "./TextPicture.css";

const TextPicture = ({title, text, description, image, textOrder, imageOrder}) => {
    return (
        <div className="text-picture__container">
            <div className={textOrder + " text-picture__text-container"}>
                <p className="text-picture__title">{title}</p>
                <h2 className="text-picture__text">{text}</h2>
                <p className="text-picture__description">{description}</p>
            </div>
            <div className={imageOrder + " text-picture__image-container"}>
                <img src={image} className="text-picture__image"></img>
            </div>
        </div>
    )
}

export default TextPicture