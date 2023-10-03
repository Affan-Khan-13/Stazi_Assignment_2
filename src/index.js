import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route

import Page from './pages/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router> {/* Wrap your app with BrowserRouter */}
        <Routes> {/* Use Routes to define your routes */}
          <Route path="/property/:id" element={<Page />} /> {/* Render the About component for /about */}
          <Route path="/" element={<App />} /> {/* Render the App component for the root path */}
        </Routes>
      </Router>
  </React.StrictMode>
);

reportWebVitals();
