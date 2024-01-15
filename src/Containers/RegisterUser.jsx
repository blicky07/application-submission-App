// RegisterUser.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './RegisterUser.css'

const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [academicQualification, setAcademicQualification] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/backend/register', {
        username,
        email,
        citizenship,
        academicQualification,
        password,
      });

      if (response.status === 201) {
        setSuccess(true);
        setError('');
      } else {
        setSuccess(false);
        setError('Failed to register user');
      }
    } catch (error) {
      setSuccess(false);
      setError('Failed to register user');
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="citizenship">Citizenship:</label>
          <input
            type="text"
            id="citizenship"
            name="citizenship"
            value={citizenship}
            onChange={(e) => setCitizenship(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="academicQualification">Academic Qualification:</label>
          <input
            type="text"
            id="academicQualification"
            name="academicQualification"
            value={academicQualification}
            onChange={(e) => setAcademicQualification(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Registration successful!</p>}
    </div>
  );
};

export default RegisterUser;
