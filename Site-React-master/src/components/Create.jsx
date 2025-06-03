
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import backgroundImage from './img/R.png'; 
import './css/Create.css'; 

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName, email, password, role });
    navigate('/dashboard');
  };

  return (
    <div className="login show-login" style={{ display: "flex" }} id="create">
      <img src={backgroundImage} alt="background" style={{ marginTop: "-19vh", width: "120%", height: "700px" }} />
      <form style={{ marginTop: "-10vh", width: "600px", textAlign: "center", backgroundColor: "#fff", marginLeft: "-47%", height: "600px" }} onSubmit={handleSubmit}>
        <h2 className="login__title">Create Account</h2>
        <div className="login__group">
          <div>
            <label htmlFor="firstName" className="login__label">First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="login__input"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="login__label">Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="login__input"
            />
          </div>
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
          <div>
            <label htmlFor="role" className="login__label">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="login__input"
            >
              <option value="">Select your role</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="director">Director</option>
            </select>
          </div>
          <div>
            <button type="submit" className="login__button">Create Account</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
