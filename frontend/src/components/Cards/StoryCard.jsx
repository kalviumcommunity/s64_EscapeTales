import React, { useState } from "react";
import "../../styles/StoryCard.css";

const StoryCard = ({ id, title, description, image, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Editable fields
  const [newTitle, setNewTitle] = useState(title);
  const [newImage, setNewImage] = useState(image);
  const [newDescription, setNewDescription] = useState(description);

  // Error states for validation
  const [errors, setErrors] = useState({});

  const handleEditToggle = () => setIsEditing(!isEditing);

  const validateInputs = () => {
    const newErrors = {};

    if (!newTitle.trim()) newErrors.title = "Title is required.";
    else if (newTitle.length < 3 || newTitle.length > 50)
      newErrors.title = "Title must be 3-50 characters long.";

    if (!newImage.trim()) newErrors.image = "Image URL is required.";
    else if (!/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/.test(newImage))
      newErrors.image = "Invalid image URL format.";

    if (!newDescription.trim()) newErrors.description = "Description is required.";
    else if (newDescription.length < 10 || newDescription.length > 300)
      newErrors.description = "Description must be 10-300 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateInputs()) {
      onUpdate(id, {
        title: newTitle,
        image: newImage,
        description: newDescription,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewTitle(title);
    setNewImage(image);
    setNewDescription(description);
    setIsEditing(false);
    setErrors({});
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
          {errors.image && <p className="error-text">{errors.image}</p>}

          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Title"
            className="edit-input"
          />
          {errors.title && <p className="error-text">{errors.title}</p>}

          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description"
            className="edit-textarea"
          />
          {errors.description && <p className="error-text">{errors.description}</p>}
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
