import React from "react";
import "./ProductDisplay.css";
import PhoneLeft from "../../assets/phone-left.png";
import PhoneRight from "../../assets/phone-right.png";
import ProductImage from "../../assets/product-display.png";

const ProductDisplay = () => {
  return (
    <div className="product-display">
      <img src={PhoneLeft} className="phone-left" />
      <img src={PhoneRight} className="phone-right" />
      {/* <img src={ProductImage} className="product-image" /> */}
    </div>
  );
};

export default ProductDisplay;
