import React from "react";
import "./HowAppWorks.css";
import HowAppWorksLeft from "../../assets/HowAppWorks_left.png";
import HowAppWorksRight from "../../assets/HowAppWorks_right.png";
import PhoneDisplay from "../../assets/phones.png";

const HowAppWorks = () => {
  return (
    <div className="how-app-works">
      <img className="how-app-works__phones" src={PhoneDisplay} />
      <div className="how_app_works__bottom">
        <hr className="how-app-works__hr"></hr>
        <p className="how-app-works__text">How the app works</p>
      </div>
    </div>
  );
};

export default HowAppWorks;
