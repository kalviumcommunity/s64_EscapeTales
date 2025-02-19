import React from "react";
import "./StoryCard.css";

const StoryCard = ({ title, description, image }) => {
  return (
    <div className="story-card">
      <img src={image} alt={title} className="story-image" />
      <div className="story-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more">Read More →</button>
      </div>
    </div>
  );
};


export default StoryCard;


