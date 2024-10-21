import React, { useState } from 'react';
import '../styles/Login.css';
import googleIcon from '../assets/googleIcon.png';
import { useNavigate } from 'react-router-dom';  // For navigation

const Login = () => {
  const [selectedRole, setSelectedRole] = useState("EDU Administrator"); // Initial state
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    if (role === "EDU Administrator") {
      navigate('/admin-dashboard'); // Replace with the actual route
    } else if (role === "Parent") {
      navigate('/parent-dashboard'); // Replace with the actual route
    } else if (role === "Student") {
      navigate('/student-dashboard'); // Replace with the actual route
    }
  };

  return (
    <div className="login-container">
      <div className="roles-sidebar">
        {/* Role Section */}
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

      <div className="login-content">
        <div className="login-box">
          <h2>Login</h2>
          <button className="google-login-btn">
            <img src={googleIcon} alt="Google Icon" className="google-icon" /> Login using Google
          </button>
          <p>or</p>
          <form className="login-form">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="login-account-btn">Login to Your Account</button>
          </form>
          <p className="signup-text">
            Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
