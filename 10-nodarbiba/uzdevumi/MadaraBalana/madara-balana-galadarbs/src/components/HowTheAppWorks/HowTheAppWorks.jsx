import PhoneLeft from "../../assets/phone_left.png";
import PhoneRight from "../../assets/phone_right.png";
import "./HowTheAppWorks.css";

const HowTheAppWorks = () => {
  return (
    <div className="how_app_works">
      <div className="how_app_works__pics">
        <img className="phone_left" src={PhoneLeft} />
        <img className="phone_right" src={PhoneRight} />
      </div>
      <div className="how_app_works__bottom">
        <div className="how_app_works__line"></div>
        <h1 className="how_app_works__text">How the app works</h1>
      </div>
    </div>
  );
};

export default HowTheAppWorks;
