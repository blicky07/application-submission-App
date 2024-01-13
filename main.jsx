import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root');

// Use createRoot for rendering
const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
