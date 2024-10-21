import React, { useState } from 'react';
import '../styles/Signup.css';
import googleIcon from '../assets/googleIcon.png';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState("EDU Administrator"); // Default selection
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    if (role === "EDU Administrator") {
      navigate('/admin-dashboard'); // Route to admin dashboard
    } else if (role === "Parent") {
      navigate('/parent-dashboard'); // Route to parent dashboard
    } else if (role === "Student") {
      navigate('/student-dashboard'); // Route to student dashboard
    }
  };

  return (
    <div className="signup-container">
      <div className="roles-sidebar">
        <div
          className={`role-item ${selectedRole === "Parent" ? "active" : ""}`}
          onClick={() => handleRoleClick("Parent")}
        >
          EDU Parent
        </div>
        <div
          className={`role-item ${selectedRole === "EDU Administrator" ? "active" : ""}`}
          onClick={() => handleRoleClick("EDU Administrator")}
        >
          EDU Administrator
        </div>
        <div
          className={`role-item ${selectedRole === "Student" ? "active" : ""}`}
          onClick={() => handleRoleClick("Student")}
        >
          EDU Student
        </div>
      </div>

      <div className="signup-content">
        <div className="signup-box">
          <h2>Sign up</h2>
          <button className="google-signup-btn">
            <img src={googleIcon} alt="Google Icon" className="google-icon" /> Sign up using Google
          </button>
          <p>or</p>
          <form className="signup-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="create-account-btn">Create Your Account</button>
          </form>
          <p className="login-text">
            Already have an account? <a href="/login" className="login-link">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
