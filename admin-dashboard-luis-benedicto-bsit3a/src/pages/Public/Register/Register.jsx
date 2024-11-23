import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Reset error
    setError('');

    // Validate form fields
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      setStatus('loading');
      const { data } = await axios.post('/register', { email, password });
      // Store token or handle success logic
      localStorage.setItem('accessToken', data.access_token);
      navigate('/main/movies'); // Redirect to the main page or dashboard
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>
        <button
          className="register-button"
          disabled={status === 'loading'}
          onClick={handleRegister}
        >
          {status === 'loading' ? 'Registering...' : 'Register'}
        </button>
        <div className="login-link">
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
