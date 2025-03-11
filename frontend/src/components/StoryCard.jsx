import React, { useState } from "react";
import "./StoryCard.css";

const StoryCard = ({ id, title, description, image, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Editable fields
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newDescription, setNewDescription] = useState(description);

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleSave = () => {
    onUpdate(id, {
      title: newTitle,
      image: newImage,
      description: newDescription
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(title);
    setNewImage(image);
    setNewDescription(description);
    setIsEditing(false);
  };

  return (
    <div className="story-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            placeholder="Image URL"
            className="edit-input"
          />
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title"
            className="edit-input"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description"
            className="edit-textarea"
          />
        </>
      ) : (
        <>
          <img src={image} alt={title} className="story-image" />
          <h3 className="story-title">{title}</h3>
          <p className="story-description">{description}</p>
        </>
      )}

      <div className="story-actions">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEditToggle} className="update-btn">Edit</button>
            <button onClick={() => onDelete(id)} className="delete-btn">Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
