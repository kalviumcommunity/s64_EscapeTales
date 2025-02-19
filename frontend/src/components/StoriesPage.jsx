import React from "react";
import StoryCard from "./StoryCard";
import "./StoriesPage.css";

const StoriesPage = () => {
  const stories = [
    {
      id: 1,
      title: "The Hidden Chamber",
      description: "A mysterious adventure awaits. Can you uncover the secrets buried deep within?",
      image: "https://www.indy100.com/media-library/egypt-scientists-reveal-hidden-corridor-in-great-pyramid-of-giza.jpg?id=53528818&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C0",
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
      description: "A journey through lost memories. Will you piece together the fragments of time?",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1718699815i/205474954.jpg",
    },
  ];

  return (
    <div className="stories-page">
      
      <h2 className="page-title">📖 EscapeTales Stories</h2>
      <p className="page-subtitle">Dive into immersive experiences filled with suspense, mystery, and adventure.</p>
      
      <div className="stories-container">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            description={story.description}
            image={story.image}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesPage;
