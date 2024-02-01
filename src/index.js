import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import { Helmet } from 'react-helmet';

import Page from './pages/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Helmet>
      <script src="https://app.enzuzo.com/apps/enzuzo/static/js/__enzuzo-cookiebar.js?uuid=e6196710-c0b4-11ee-9808-abbc9c2925d8"></script>
    </Helmet>
    <React.StrictMode>
      <Router> {/* Wrap your app with BrowserRouter */}
        <Routes> {/* Use Routes to define your routes */}
          <Route path="/property/:id" element={<Page />} /> {/* Render the About component for /about */}
          <Route path="/" element={<App />} /> {/* Render the App component for the root path */}
        </Routes>
      </Router>
    </React.StrictMode>
  </>
);

reportWebVitals();
