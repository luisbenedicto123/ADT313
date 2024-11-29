import React, { useState } from "react";
import './Login.css';

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login for demonstration
    if (username === "test" && password === "1234") {
      onLogin({ username });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-background">
      <div className="login-overlay">
        <div className="login-container">
          <h2>Sign In</h2>
          <form onSubmit={handleLogin}>
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
            <button type="submit">Sign In</button>
          </form>
          <p>
            New to Netflix?{" "}
            <span onClick={onRegister} className="register-link">
              Sign up now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
