import "./Phones.css";
import LeftPhone from "/Users/macbookpro/Documents/Documents - Dins MacBook Pro/repository/javaguru-frontend-march-2023/10-nodarbiba/uzdevumi/DinsKalnins/dins-kalnins-galadarbs/src/assets/phone-left.png";
import RightPhone from "/Users/macbookpro/Documents/Documents - Dins MacBook Pro/repository/javaguru-frontend-march-2023/10-nodarbiba/uzdevumi/DinsKalnins/dins-kalnins-galadarbs/src/assets/phone-right.png";

const Phones = () => {
  return (
    <>
      <div className="PhoneWrapper">
        <img className="phoneLeft" src={LeftPhone} alt="phone" />
        <img className="phoneRight" src={RightPhone} alt="phone" />
      </div>
      <div className="HeadlineWrapper">
        <div className="breaker"></div>
        <p className="phone__title">How the app works</p>
      </div>
    </>
  );
};

export default Phones;
