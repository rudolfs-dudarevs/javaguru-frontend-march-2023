import "./NotFound.css";
import notFoundPic from "../../assets/NotFound.png"

const NotFound = () => {
  return (
    <main className="not-found__main">
        <img src={notFoundPic} className="not-found-pic"></img>
    </main>
  );
};

export default NotFound;