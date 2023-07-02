import React from "react";
import "./HowAppWorks.css";
import HowAppWorksLeft from "../../assets/HowAppWorks_left.png";
import HowAppWorksRight from "../../assets/HowAppWorks_right.png";

const HowAppWorks = () => {
  return (
    <div className="how_app_works">
      <div className="how_app_works__pics">
        <img className="HowAppWorksLeft" src={HowAppWorksLeft} />
        <img className="HowAppWorksRight" src={HowAppWorksRight} />
      </div>
      <div className="how_app_works__bottom">
        <hr className="how-app-works__hr"></hr>
        <p className="how-app-works__text">How the app works</p>
      </div>
    </div>
  );
};

export default HowAppWorks;
