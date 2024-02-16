// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:5000/password/forgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setError('');
      } else {
        setError('Error: Unable to initiate password reset. Please check your email address.');
      }
    } catch (error) {
      setError('Error: Unable to initiate password reset. Please check your email address.');
    }
  };

  return (
    <div className="forgot-password-container"> {/* Use the class name from CSS */}
      <h2>Forgot Password</h2>
      <p>Please enter your email address below to reset your password.</p>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" className="resetButton" onClick={handleForgotPassword}>Reset Password</button> {/* Use the class name from CSS */}
      <div className="error">{error}</div> {/* Use the class name from CSS */}
    </div>
  );
};

export default ForgotPassword;
