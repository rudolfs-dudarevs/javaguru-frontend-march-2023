import instructionPhoto1 from "../../assets/Instructions1.png";
import instructionPhoto2 from "../../assets/Instructions2.png";
import instructionPhoto3 from "../../assets/Instructions3.png";
import TextPicture from "../TextPicture/TextPicture";

const Instructions = () => {
  return (
    <div>
      <TextPicture
        title="Create an account"
        text="Create/login to an existing account to get started"
        description="An account is created with your email and a desired password"
        image={instructionPhoto1}
      />
      <TextPicture
        title="Explore while shopping"
        text="Shop for your favorites meal as e dey hot."
        description="Shop for your favorite meals or drinks and enjow while doing it."
        image={instructionPhoto2}
        isReverse
      />
      <TextPicture
        title="Checkout"
        text="When you done check out and get it delivered"
        description="When you done check out and get it delivered with ease"
        image={instructionPhoto3}
      />
    </div>
  );
};

export default Instructions;
