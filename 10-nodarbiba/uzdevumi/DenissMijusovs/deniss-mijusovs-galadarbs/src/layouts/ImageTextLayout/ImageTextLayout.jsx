import PropTypes from "prop-types";
import "./ImageTextLayout.css";

const ImageTextLayout = ({
  imageSrc,
  text,
  subtitle,
  title,
  isImageOnRight,
}) => {
  return (
    <div
      className={
        isImageOnRight
          ? "image-text-container right"
          : "image-text-container left"
      }
    >
      <div className="image-container">
        <img src={imageSrc} alt="Image" />
      </div>
      <div className="text-container">
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

ImageTextLayout.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isImageOnRight: PropTypes.bool.isRequired,
};

export default ImageTextLayout;
