import React from "react";
import Image1 from "../../assets/img/phones.svg";
import "./PhoneBlock.css";

function PhoneBlock() {
  return (
    <>
      <div className="phone__image-container">
        <img id="phones" src={Image1} alt="Phones" />
      </div>
      <hr className="line"/>
      <h2 className="phone__title">How the app works</h2>
    </>
  );
}

export default PhoneBlock;
