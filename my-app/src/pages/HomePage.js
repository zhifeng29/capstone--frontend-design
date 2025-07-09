import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="app">
      <header>
        <nav>
          <div className="login-register">
            <Link to="/login" className="auth-btn login-btn">Login</Link>
            <Link to="/register" className="auth-btn register-btn">Register</Link>
          </div>
        </nav>
      </header>
      
      <main>
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + '/uny-compass-logo.png'} 
            alt="UNY COMPASS Logo" 
            className="logo"
          />
        </div>
        <button className="explore-btn">Start Exploring</button>
      </main>
    </div>
  );
}

export default HomePage;