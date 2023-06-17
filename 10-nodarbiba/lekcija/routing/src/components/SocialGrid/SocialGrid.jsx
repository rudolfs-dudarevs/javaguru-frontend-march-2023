import { useState, useEffect } from "react";
import PostCard from "../PostCard/PostCard";
import UserCard from "../UserCard/UserCard";
import CommentCard from "../CommentCard/CommentCard";
import GridControls from "../GridControls/GridControls";
import Loader from "../Loader/Loader";
import Counter from "../Counter/Counter";
import "./SocialGrid.css";

const SocialGrid = () => {
  const [items, setItems] = useState([]);
  const [rescourceType, setResourceType] = useState("posts");
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/${rescourceType}?_start=0&_end=${count}`
    )
      .then((res) => res.json())
      .then((content) => {
        setIsLoading(false);
        setItems(content);
      });
  }, [rescourceType]);

  const renderCards = (item) => {
    let component;

    switch (rescourceType) {
      case "posts":
        component = (
          <PostCard key={item.id} title={item.title} text={item.body} />
        );
        break;
      case "users":
        component = (
          <UserCard
            key={item.id}
            name={item.name}
            email={item.email}
            website={item.website}
          />
        );
        break;
      case "comments":
        component = (
          <CommentCard
            key={item.id}
            name={item.name}
            text={item.body}
            email={item.email}
          />
        );
        break;
    }

    return component;
  };

  const handleCountChange = (operation) => {
    switch (operation) {
      case "increment":
        setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
        break;
      case "decrement":
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
        break;
    }
  };

  return (
    <div className="social-grid">
      <div className="social-grid__controls">
        <GridControls handleResourceChange={setResourceType} />
        <Counter count={count} handleCountChange={handleCountChange} />
      </div>
      <div className="social-grid__content">
        {isLoading ? <Loader /> : items.map((item) => renderCards(item))}
      </div>
    </div>
  );
};

export default SocialGrid;
