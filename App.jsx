// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Containers/Login.jsx';
import RegisterUser from './Containers/RegisterUser.jsx';
import Header from './Components/Header.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';

function App() {
  return (
    <>
      <Header /> {/* Display the header component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        <Route path="login" element={<Login />} /> {/* Route for the Login page */}
        <Route path="register" element={<RegisterUser />} /> {/* Route for the registration page */}
        <Route path="contact" element={<Contact />} /> {/* Route for the Contact page */}
      </Routes>
    </>
  );
}

export default App;
