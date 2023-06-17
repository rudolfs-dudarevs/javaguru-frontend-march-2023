import "./GridControls.css";

const GridControls = ({ handleResourceChange }) => {
  return (
    <>
      <button
        className="grid-controls__button"
        onClick={() => handleResourceChange("posts")}
      >
        Posts
      </button>
      <button
        className="grid-controls__button"
        onClick={() => handleResourceChange("users")}
      >
        Users
      </button>
      <button
        className="grid-controls__button"
        onClick={() => handleResourceChange("comments")}
      >
        Comments
      </button>
    </>
  );
};

export default GridControls;
