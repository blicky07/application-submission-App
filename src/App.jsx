// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './users/Containers/Login.jsx';
import RegisterUser from './users/Containers/RegisterUser.jsx';
import Header from './users/Components/Header.jsx';
import Home from './users/Components/Home.jsx';
import ForgotPassword from './users/Containers/ForgotPassword.jsx';
import Contact from './users/Containers/Contact.jsx';
import ApplicationForm from './users/Containers/ApplicationForm.jsx';
//import Links from './users/Components/Links.jsx';

function App() {

  const [formData, setFormData] = useState({}); // Initialize formData state

  return (
    <>
    <BrowserRouter>
      <Header /> {/* Display the header component */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the Home page */}
        <Route path="login" element={<Login />} /> {/* Route for the Login page */}
        <Route path="register" element={<RegisterUser />} /> {/* Route for the registration page */}
        <Route path="contact" element={<Contact />} /> {/* Route for the Contact page */}
        <Route path="apply" element={<ApplicationForm formData={formData} setFormData={setFormData} />} /> {/* Pass formData and setFormData as props to ApplicationForm */}
        <Route path="password/forgot" element={<ForgotPassword />} /> 
        {/*<Route path="links" element={<Links />} /> */}
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;