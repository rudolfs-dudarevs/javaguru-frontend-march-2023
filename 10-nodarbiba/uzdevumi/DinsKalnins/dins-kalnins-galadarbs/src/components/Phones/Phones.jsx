import "./Phones.css";
import LeftPhone from "../../assets/phone-left.png";
import RightPhone from "../../assets/phone-right.png";

const Phones = () => {
  return (
    <>
      <div className="PhoneWrapper">
        <img className="phoneLeft" src={LeftPhone} alt="phone" />
        <img className="phoneRight" src={RightPhone} alt="phone" />
      </div>
      <div className="HeadlineWrapper">
        <div className="breaker"></div>
        <p className="phone__title">How the app works</p>
      </div>
    </>
  );
};

export default Phones;
