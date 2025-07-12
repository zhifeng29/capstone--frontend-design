import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// .css file
import './App.css';


// Import your pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPasswordPage from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;