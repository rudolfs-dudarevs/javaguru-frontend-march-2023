import "./UnderConstruction.css";
import underConstructionPic from "../../assets/UnderConstruction.png"

const UnderConstruction = () => {
  return (
    <main className="under-construction__main">
        <img src={underConstructionPic} className="under-construction-pic"></img>
    </main>
  );
};

export default UnderConstruction;