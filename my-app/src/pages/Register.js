import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="app register-app">
      <header>
        <nav>
          <div className="login-register">
            <Link to="/" className="auth-btn home-btn">Home</Link>
          </div>
        </nav>
      </header>
      
      <main className="register-main">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + '/uny-compass-logo.png'} 
            alt="UNY COMPASS Logo" 
            className="logo"
          />
        </div>
        
        <div className="register-form-container">
          <form className="register-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-control"
                placeholder="Create a password"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                className="form-control"
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="form-links">
              <div className="left-link">
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
              </div>
              <div className="right-link">
                <Link to="/terms">Terms of Service</Link>
              </div>
            </div>
            
            <button type="submit" className="register-submit-btn">Register</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Register;