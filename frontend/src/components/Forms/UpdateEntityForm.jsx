import React, { useState } from 'react';
import './UpdateEntityForm.css';

const UpdateEntityForm = ({ onUpdate }) => {
  const [formData, setFormData] = useState({
    entityId: '',
    title: '',
    description: '',
    image: ''
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.entityId.trim()) {
      newErrors.entityId = 'Entity ID is required.';
    } else if (!/^\d+$/.test(formData.entityId.trim())) {
      newErrors.entityId = 'Entity ID must be a numeric value.';
    }

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required.';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required.';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long.';
    }

    if (formData.image.trim() && !/^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/.test(formData.image.trim())) {
      newErrors.image = 'Enter a valid image URL (JPG, JPEG, PNG, GIF, WEBP).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onUpdate(formData);
      setFormData({
        entityId: '',
        title: '',
        description: '',
        image: ''
      });
      setErrors({});
    }
  };

  return (
    <form className="update-entity-form" onSubmit={handleSubmit}>
      <h2>Update Entity</h2>

      <input
        type="text"
        name="entityId"
        placeholder="Entity ID"
        value={formData.entityId}
        onChange={handleChange}
      />
      {errors.entityId && <p className="error-text">{errors.entityId}</p>}

      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      {errors.title && <p className="error-text">{errors.title}</p>}

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}

      <input
        type="text"
        name="image"
        placeholder="Image URL (optional)"
        value={formData.image}
        onChange={handleChange}
      />
      {errors.image && <p className="error-text">{errors.image}</p>}

      <button type="submit">Update Entity</button>
    </form>
  );
};

export default UpdateEntityForm;
