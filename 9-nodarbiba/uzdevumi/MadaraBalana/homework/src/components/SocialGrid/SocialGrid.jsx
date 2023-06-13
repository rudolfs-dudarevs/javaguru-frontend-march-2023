import React, { useState, useEffect } from "react";
import PostCard from "../PostCard/PostCard.jsx";
import GridControls from "../GridControls/GridControls.jsx";
import Counter from "../Counter/Counter.jsx";
import UserCard from "../CommentCard/CommentCard.jsx";
import CommentCard from "../CommentCard/CommentCard.jsx";
import "./SocialGrid.css";

const SocialGrid = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  const [count, setCount] = useState(5);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}?_start=0&_end=${count}`
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType, count]);

  const renderCards = (item) => {
    {
      let component;

      switch (resourceType) {
        case "posts":
          component = (
            <PostCard key={item.id} title={item.title} text={item.body} />
          );
          break;
        case "users":
          component = (
            <UserCard
              name={item.name}
              email={item.email}
              website={item.website}
            />
          );
          break;
        case "comments":
          component = (
            <CommentCard name={item.name} text={item.body} email={item.email} />
          );
          break;
      }

      return component;
    }
  };

  const handleCountChange = (operation) => {
    switch (operation) {
      case "increment":
        if (count < 10) {
          setCount(count + 1);
        }
        break;
      case "decrement":
        if (count > 1) {
          setCount(count - 1);
        }
        break;
    }
  };

  return (
    <div className="social-grid">
      <div className="social-grid__controls">
        <GridControls handleResourceChange={setResourceType} />
        <Counter handleCountChange={handleCountChange} count={count} />
      </div>
      <div className="social-grid__content">
        {items.map((item) => renderCards(item))}
      </div>
    </div>
  );
};

export default SocialGrid;
