import React, { useState, useEffect } from "react";
import PostCard from "../PostCard/PostCard.jsx";
import GridControls from "../GridControls/GridControls.jsx";
import Counter from "../Counter/Counter.jsx";
import UserCard from "../UserCard/UserCard.jsx";
import CommentCard from "../CommentCard/CommentCard.jsx";
// # importēt Counter komponenti
// # importēt UserCard komponenti
// # importēt CommentCard komponenti
import "./SocialGrid.css";

const SocialGrid = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // # izveidot jaunu useState priekš count mainīgā vērtība iegūšanas un iestatīšanas ar sākotnējo vērtību 5
  const [count, setCount] = useState(5);
  useEffect(() => {
    // # URL paramtera _end=10 vērtību aizvietot ar count, kas būs vērtība no component state
    fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}?_start=0&_end=${count}`
    )
      .then((response) => response.json())
      .then((json) => setItems(json));
    // # Dependancy masīvu [resourceType] papildināt ar count mainīgo,
    // lai šis useEffect izpildītos arī uz count vērtības maiņu
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
          // # Ievietot UserCard komponenti un padot tai nepieciešamos props
          // component =
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
          // # Ievietot CommentCard komponenti un padot tai nepieciešamos props
          //  component =
          component = (
            <CommentCard
              key={item.id}
              name={item.name}
              text={item.body}
              email={item.email}
            ></CommentCard>
          );

          break;
      }

      return component;
    }
  };

  const handleCountChange = (operation) => {
    switch (operation) {
      case "increment":
        // # Izveidot loģiku, lai palielinātu Count vērtību
        console.log("increment");
        if (count <= 9) {
          setCount((count) => count + 1);
        }

        break;
      case "decrement":
        // # Izveidot loģiku, lai samazinātu Count vērtību
        console.log("decrement");
        if (count >= 2) {
          setCount((count) => count - 1);
        }
    }
  };

  return (
    <div className="social-grid">
      <div className="social-grid__controls">
        <GridControls handleResourceChange={setResourceType} />
        {/* # Ievietot Count komponenti un padot tai nepieciešamos props - handleCountChange un count */}
        <Counter handleCountChange={handleCountChange} count={count} />
      </div>
      <div className="social-grid__content">
        {items.map((item) => renderCards(item))}
      </div>
    </div>
  );
};

export default SocialGrid;
