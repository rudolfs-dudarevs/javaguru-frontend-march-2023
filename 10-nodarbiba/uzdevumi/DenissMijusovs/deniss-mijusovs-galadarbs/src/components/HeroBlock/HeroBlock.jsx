import React from "react";
import "./HeroBlock.css";

const HeroBlock = () => {
  return (
    <div className="hero-block">
      <div className="hero-block__content">
        <p className="hero-block__description">Food App</p>
        <h1 className="hero-block__title">
          Why stay hungry when you can order form Bella Onojie
        </h1>
        <p className="hero-block__description">
          Download the bella onoje’s food app now on
        </p>
        <div className="hero-block__buttons">
          <button className="hero-block__button">Playstore</button>
          <button className="hero-block__button">App store</button>
        </div>
      </div>
    </div>
  );
};

export default HeroBlock;
