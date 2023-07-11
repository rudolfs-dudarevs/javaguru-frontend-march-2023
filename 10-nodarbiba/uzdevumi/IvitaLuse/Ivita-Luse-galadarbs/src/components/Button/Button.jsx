import "../../components/Button/Button.css";

const Button = ({ text, isSecondary }) => {
  return (
    <button className={isSecondary ? "btn-secondary" : "btn-primary"}>
      {text}
    </button>
  );
};

export default Button;