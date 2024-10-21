import React, { useState, useEffect, useRef } from 'react';
import '../styles/Signup.css';
import googleIcon from '../assets/googleIcon.png';
import { useNavigate } from 'react-router-dom';

const roles = ["EDU Parent", "EDU Administrator", "EDU Student"];

const Signup = () => {
  const roleRefs = useRef([]);  // To hold references for each role item
  const navigate = useNavigate();

  // Handles the click on roles
  const handleRoleClick = (role) => {
    if (role === "EDU Administrator") {
      navigate('/admin-dashboard');
    } else if (role === "EDU Parent") {
      navigate('/parent-dashboard');
    } else if (role === "EDU Student") {
      navigate('/student-dashboard');
    }
  };

  // This function handles the dynamic scaling and opacity of role items based on scroll position
  const handleScroll = () => {
    const centerY = window.innerHeight / 2;  // The center of the screen (vertically)
    roleRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - centerY);

        // Calculate scale and opacity based on distance from center
        const scale = Math.max(1 - distanceFromCenter / 300, 0.8);
        const opacity = Math.max(1 - distanceFromCenter / 300, 0.5);
        
        ref.style.transform = `scale(${scale})`;
        ref.style.opacity = opacity;
      }
    });
  };

  // Adding scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="signup-container">
      <div className="roles-sidebar">
        {roles.map((role, index) => (
          <div
            key={role}
            ref={(el) => (roleRefs.current[index] = el)}  // Reference each role item
            className="role-item"
            onClick={() => handleRoleClick(role)}
          >
            {role}
          </div>
        ))}
      </div>
      <div className="signup-background">
        <div className="signup-box">
          <h2>Sign Up</h2>
          <div className="google-signup-btn">
            <img className="google-icon" src={googleIcon} alt="Google" />
            <span>Sign Up with Google</span>
          </div>
          <form className="signup-form">
            <input type="email" placeholder="Email address" />
            <input type="password" placeholder="Create password" />
            <input type="password" placeholder="Confirm password" />
            <button className="create-account-btn" type="submit">Create Account</button>
          </form>
          <p className="login-text">
            Already have an account? <a className="login-link" href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
