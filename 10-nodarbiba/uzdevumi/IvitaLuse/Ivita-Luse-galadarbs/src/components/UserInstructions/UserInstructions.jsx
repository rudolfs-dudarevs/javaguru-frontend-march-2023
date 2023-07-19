import "./UserInstructions.css";
import phone_left from "../../assets/phone_left.png";
import phone_right from "../../assets/phone_right.png";
import phone_left_second from "../../assets/phone_left_second.png";

const UserInstructions = () => {
  return (
    <div className="instructions__container">
      <Instructions
        text1="Create an account"
        text2="Create/login to an existing account to get started"
        text3="An account is created with your email and a desired password"
        image={phone_left}
      />
      <Instructions
        text1="Explore while shopping"
        text2="Shop for your favorites meal as e dey hot."
        text3="Shop for your favorite meals or drinks and enjow while doing it."
        image={phone_right}
        isReversedOrder
      />
      <Instructions
        text1="Checkout"
        text2="When you done check out and get it delivered"
        text3="When you done check out and get it delivered with ease"
        image={phone_left_second}
      />
    </div>
  );
};

const Instructions = ({ text1, text2, text3, image, isReversedOrder }) => {
  const orderClass = `${isReversedOrder ? "reversed" : ""}`;

  return (
    <div className={`instructions ${orderClass}`}>
      <div className="instructions__text">
        <h3 className="instructions__h3">{text1}</h3>
        <h2 className="instructions__h2">{text2}</h2>
        <h4 className="instructions__h4">{text3}</h4>
      </div>
      <div className="instructions__image-container">
        <img src={image} className="instructions__image"></img>
      </div>
    </div>
  );
};

export default UserInstructions;
