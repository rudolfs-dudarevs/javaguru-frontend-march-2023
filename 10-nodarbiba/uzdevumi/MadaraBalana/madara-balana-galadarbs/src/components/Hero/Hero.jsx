import Button from "../Button/Button.jsx";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero_food">Food app</p>
      <h1 className="hero_title">
        Why stay hungry when you can order from Bella Onojie
      </h1>
      <p className="hero_subtitle">
        Download the bella onoje`s food app now on
      </p>
      <div className="buttons">
        <Button text="Playstore" />
        <Button text="App store" isSecondary />
      </div>
    </div>
  );
};

export default Hero;
