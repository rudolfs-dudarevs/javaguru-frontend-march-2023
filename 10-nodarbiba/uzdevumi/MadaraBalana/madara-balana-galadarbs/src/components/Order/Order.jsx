import "./Order.css";

const Order = ({ image, imageAlt, isImageRight, preTitle, title, text }) => {
  const componetClass = `order-component ${isImageRight ? "image-right" : ""}`;

  return (
    <div className={componetClass}>
      <div className="image">{image}</div>
      <div className="order_text">
        <h3 className="pretitle">{preTitle}</h3>
        <h2 className="title">{title}</h2>
        <h4 className="text">{text}</h4>
      </div>
    </div>
  );
};

const CustomImage = (image, alt, isBackgroundImage) => {
  return isBackgroundImage ? (
    <div style={`background: url(${image})`}></div>
  ) : (
    <img src={image} alt={alt} />
  );
};

export default Order;
