import "./Instructions.css";
import instructionPhoto1 from "../../assets/Instructions1.png"
import instructionPhoto2 from "../../assets/Instructions2.png"
import instructionPhoto3 from "../../assets/Instructions3.png"

const Instructions = () => {
    return (
        <div className="instructions__container">
            <InstructionsBody 
            text1="Create an account"
            text2="Create/login to an existing account to get started" 
            text3="An account is created with your email and a desired password"
            image={instructionPhoto1}
            textOrder="instructions__text instructions__order2"
            imageOrder="instructions__image-container instructions__order1"
            />
            <InstructionsBody 
            text1="Explore while shopping"
            text2="Shop for your favorites meal as e dey hot." 
            text3="Shop for your favorite meals or drinks and enjow while doing it."
            image={instructionPhoto2}
            textOrder="instructions__text instructions__order3"
            imageOrder="instructions__image-container instructions__order4"
            />
            <InstructionsBody 
            text1="Checkout"
            text2="When you done check out and get it delivered" 
            text3="When you done check out and get it delivered with ease"
            image={instructionPhoto3}
            textOrder="instructions__text instructions__order6"
            imageOrder="instructions__image-container instructions__order5"
            />
        </div>
    );
};

const InstructionsBody = ({text1, text2, text3, image, textOrder, imageOrder}) => {
    return (
        <>
            <div className={textOrder}>
                <h3 className="instructions__h3">{text1}</h3>
                <h2 className="instructions__h2">{text2}</h2>
                <h4 className="instructions__h4">{text3}</h4>
            </div>
            <div className={imageOrder}>
                <img src={image} className="instructions__image"></img>
            </div>
        </>
    )
}
  
export default Instructions;