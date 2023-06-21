import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="HeroWrapper">
        <h3>Food App</h3>
        <h1>Why stay hungry when you can order form Bella Onojie</h1>
        <h4>Download the bella onoje’s food app now on</h4>
        <div className="ButtonWrapper">
          <Button label="Playstore" variant="primary"></Button>
          <Button label="App Store" variant="secondary"></Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
