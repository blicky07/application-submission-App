// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token); // Store the token in localStorage

      // Redirect user to home page after successful login
      navigate.push('/home'); 
    } catch (error) {
      setError('Invalid email or password');
    }onabort
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p>Not registered? <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default Login;