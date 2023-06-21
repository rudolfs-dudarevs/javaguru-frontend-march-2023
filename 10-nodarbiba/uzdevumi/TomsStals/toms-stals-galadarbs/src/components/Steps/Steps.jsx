import "./Steps.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Steps = ({ style, image, heading, subheading, description }) => {
  return (
    <>
      <div style={style} className="StepsWrapper">
        <div className="StepsImage">
          <img src={image} alt="create process on phone" />
        </div>
        <div className="StepsContent">
          <h3>{subheading}</h3>
          <h2>{heading}</h2>
          <h4>{description}</h4>
        </div>
      </div>
    </>
  );
};

Steps.PropTypes = {
  style: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Steps;
