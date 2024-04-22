import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post(`https://hospital-management-backend-iixs.onrender.com/login/${username}/${password}`)
      .then(response => {
        const responseData = response.data;
        if (responseData.uname === username && responseData.password === password) {
          navigate('/dashboard');
        } else {
          alert('Authentication failed. Please check your username and password.');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
      });
  };

  return (
    <div className="login-container">
      <h2>Hospital Management System</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
