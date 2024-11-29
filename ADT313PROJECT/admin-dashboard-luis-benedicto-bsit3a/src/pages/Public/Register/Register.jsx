import React, { useState } from "react";
import './Register.css';

function Register({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Dummy registration
    const newUser = { username, password };
    alert("Registration successful!");
    onRegister(newUser);
  };

  return (
    <div className="register-background">
      <div className="register-overlay">
        <div className="register-container">
          <h2>Create Account</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>
            Already have an account?{" "}
            <span onClick={onLogin} className="login-link">
              Sign in now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
