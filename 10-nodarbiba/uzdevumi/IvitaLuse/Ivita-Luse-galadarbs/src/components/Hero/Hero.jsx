import React from "react";
import "./Hero.css";
import Button from "../../components/Button/Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h3 className="hero__pretitle">food app</h3>
        <h1 className="hero__title">
          Why stay hungry when you can order from Bella Olonje
        </h1>
        <h2 className="hero__subtitle">
          Download the Bella Olonje's app now on
        </h2>
        <div className="hero__button-container">
          <Button text="Playstore" />
          <Button text="App store" isSecondary />
        </div>
      </div>
    </div>
  );
};

export default Hero;
