import React from "react";
import "./ProductDisplay.css";
import ProductImage from "../../assets/phones.png";

const ProductDisplay = () => {
  return (
    <div className="product-display">
      <img src={ProductImage} className="product-image" />
    </div>
  );
};

export default ProductDisplay;
