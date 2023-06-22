import "./Button.css";

const Button = ({ text, variant, type }) => {
  return (
    <button
      className={variant === "primary" ? "btn-primary" : "btn-secondary"}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
