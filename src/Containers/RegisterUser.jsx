// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './RegisterUser.css';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    citizenship: '',
    academicQualification: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/register/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.status === 201) {
        setSuccess(true);
        setError('');
      } else {
        setSuccess(false);
        setError(responseData.message || 'Failed to register user');
      }
    } catch (error) {
      setSuccess(false);
      setError('Failed to register user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleRegisterUser}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="citizenship">Citizenship:</label>
          <input
            type="text"
            id="citizenship"
            name="citizenship"
            value={formData.citizenship}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="academicQualification">Academic Qualification:</label>
          <input
            type="text"
            id="academicQualification"
            name="academicQualification"
            value={formData.academicQualification}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Registration successful!</p>}
    </div>
  );
};

export default RegisterUser;
