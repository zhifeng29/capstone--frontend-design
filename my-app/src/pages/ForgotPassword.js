import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="app forgot-password-app">
      <header>
        <nav>
          <div className="login-register">
            <Link to="/" className="auth-btn home-btn">Home</Link>
          </div>
        </nav>
      </header>
      
      <main className="forgot-password-main">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + '/uny-compass-logo.png'} 
            alt="UNY COMPASS Logo" 
            className="logo"
          />
        </div>
        
        <div className="forgot-password-form-container">
          <form className="forgot-password-form">
            <h2 className="form-title">Reset Your Password</h2>
            <p className="form-subtitle">Enter your email address and we'll send you a link to reset your password.</p>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <button type="submit" className="forgot-password-submit-btn">Send Reset Link</button>
            
            <div className="form-links">
              <div className="left-link">
                <span>Remember your password? </span>
                <Link to="/login">Sign in</Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ForgotPassword;