import "./Order.css"

const Order = ({ image, imageIsRight, preTitle, title, text }) => {
    const componetClass = `order-component ${ imageIsRight ? "image-right" : "" }`;

return (
    <div className={componetClass}>
        <div className="image">
            <img src={image} alt="phones"/>
        </div>
        <div className="order_text">
            <h3 className="pretitle">{preTitle}</h3>
            <h2 className="title">{title}</h2>
            <h4 className="text">{text}</h4>
        </div>
    </div>
    );
};

export default Order;