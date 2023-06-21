import "./HowItWorks.css";
import LeftPhone from "../../assets/phone-left.png";
import RightPhone from "../../assets/phone-right.png";

const HowItWorks = () => {
  return (
    <>
      <div className="WorksWrapper">
        <img className="phoneLeft" src={LeftPhone} alt="phone" />
        <img className="phoneRight" src={RightPhone} alt="phone" />
      </div>
      <div className="HeadlineWrapper">
        <hr />
        <h2>How the app works</h2>
      </div>
    </>
  );
};

export default HowItWorks;
