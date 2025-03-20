import React, { useState } from "react";
import StoryCard from "../Cards/StoryCard";
import "../../styles/StoriesPage.css";

const StoriesPage = () => {
  const [stories, setStories] = useState([
    {
      id: 1,
      title: "The Hidden Chamber",
      description: "A journey through lost memories. Will you piece together the fragments of time?",
      image: "https://www.indy100.com/media-library/egypt-scientists-reveal-hidden-corridor-in-great-pyramid-of-giza.jpg?id=53528818&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C0"
    },
    {
      id: 2,
      title: "Whispering Shadows",
      description: "Dark secrets lurk in the mist. Listen closely, for the whispers may reveal the truth.",
      image: "https://store-images.s-microsoft.com/image/apps.8200.14238108869185230.81f92aa4-0738-4987-9b1a-a257d0b09ace.4004791d-c81c-4a76-bd60-6b9ca9efebbd",
    },
    {
      id: 3,
      title: "The Forgotten Tale",
      description: "An adventure buried in forgotten memories. Will you uncover the past?",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718699815i/205474954.jpg",
    },
  ]);

  const handleUpdate = (id, updatedData) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === id ? { ...story, ...updatedData } : story
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this story?`)) {
      setStories((prevStories) => prevStories.filter((story) => story.id !== id));
    }
  };

  return (
    <div className="stories-page">
      <h2 className="page-title">📖 EscapeTales Stories</h2>
      <div className="stories-container">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            id={story.id}
            title={story.title}
            description={story.description}
            image={story.image}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;