import React from "react";
import "./ProductFeature.css";

const ProductFeature = ({ keepOrder, featureImage, preTitle, title, text }) => {
  if (keepOrder) {
    return (
      <div className="product-feature">
        {/* Text on the left, image on the right */}

        <div className="feature-content">
          <h4 className="pre-title">{preTitle}</h4>
          <h3 className="title">{title}</h3>
          <p className="text">{text}</p>
        </div>
        <img src={featureImage} className="feature-image" />
      </div>
    );
  }
  return (
    <div className="product-feature">
      {/* Image on the left, text on the right */}
      <img src={featureImage} className="feature-image" />
      <div className="feature-content">
        <h4 className="pre-title">{preTitle}</h4>
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export default ProductFeature;
