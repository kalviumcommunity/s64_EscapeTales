import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  // Validation logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}/.test(
        formData.password.trim()
      )
    ) {
      newErrors.password =
        'Password must be at least 8 characters long, with 1 uppercase letter, 1 number, and 1 special character.';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
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
      onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error-text">{errors.name}</p>}

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error-text">{errors.email}</p>}

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="error-text">{errors.password}</p>}

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
