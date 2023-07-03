import "./Phones.css";
import Phone from "../../assets/Phones.png";

const Phones = () => {
  return (
    <>
      <div className="PhoneWrapper">
        <img className="phone" src={Phone} alt="phone" />
      </div>
      <div className="HeadlineWrapper">
        <div className="breaker"></div>
        <p className="phone__title">How the app works</p>
      </div>
    </>
  );
};

export default Phones;
