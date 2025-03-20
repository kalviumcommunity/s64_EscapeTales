import React, { useState } from 'react';
import './AddStoryForm.css';

const AddStoryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Title is required.';
    } else if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long.';
    }

    if (!description.trim()) {
      newErrors.description = 'Description is required.';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long.';
    }

    if (!image.trim()) {
      newErrors.image = 'Image URL is required.';
    } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(image.trim())) {
      newErrors.image = 'Enter a valid image URL (e.g., .jpg, .png).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit({ title, description, image });
      setTitle('');
      setDescription('');
      setImage('');
      setErrors({});
    }
  };

  return (
    <form className="add-story-form" onSubmit={handleSubmit}>
      <h2>Add a New Story</h2>

      <input
        type="text"
        placeholder="Story Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p className="error-text">{errors.title}</p>}

      <textarea
        placeholder="Story Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {errors.image && <p className="error-text">{errors.image}</p>}

      <button type="submit">Add Story</button>
    </form>
  );
};

export default AddStoryForm;
