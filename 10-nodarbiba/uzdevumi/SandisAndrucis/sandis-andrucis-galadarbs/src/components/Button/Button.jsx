import "./Button.css";



const Button = ({classNa, text, type}) => {
    return (
        <button className={classNa} type={type}>{text}</button>
    );
  };
  
export default Button;