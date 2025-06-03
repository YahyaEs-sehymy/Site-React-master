

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ isVisible, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Hardcoded credentials for demo purposes
    if (email === 's@gmail.com' && password === '123') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className={`login ${isVisible ? "show-login" : ""}`} id="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2 className="login__title">Log In</h2>

        <div className="login__group">
          <div>
            <label htmlFor="email" className="login__label">Email</label>
            <input
              type="email"
              placeholder="Write your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login__input"
            />
          </div>
          <div>
            <label htmlFor="password" className="login__label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login__input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div>
            <p className="login__signup">
              You do not have an account? <Link to="/create">Sign up</Link>
            </p>
            <a href="#" className="login__forgot">You forgot your password</a>
            <button type="submit" className="login__button">Log In</button>
          </div>
        </div>
      </form>
      <i className="ri-close-line login__close" onClick={onClose}></i>
    </div>
  );
}

export default Login;
