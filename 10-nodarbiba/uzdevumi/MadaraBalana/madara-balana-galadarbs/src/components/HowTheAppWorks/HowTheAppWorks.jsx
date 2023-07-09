import PhoneLeft from "../../assets/phone-left_1.png";
import PhoneRight from "../../assets/phone-right_1.png";
import Phones from "../../assets/phones.png";
import "./HowTheAppWorks.css";

const HowTheAppWorks = () => {
  return (
    <div className="how_app_works">
      <div className="how_app_works__pics">
        <img className="phone_left" src={PhoneLeft} />
        <img className="phone_right" src={PhoneRight} />
        <div className="phones">
          <img src={Phones} />
        </div>
      </div>
      <div className="how_app_works__bottom">
        <div className="how_app_works__line"></div>
        <h1 className="how_app_works__text">How the app works</h1>
      </div>
    </div>
  );
};

export default HowTheAppWorks;
