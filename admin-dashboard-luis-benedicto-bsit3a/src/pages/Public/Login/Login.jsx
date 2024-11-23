import { useState, useRef, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleShowPassword = () => setIsShowPassword((prev) => !prev);

  const handleOnChange = (e, type) => {
    setIsFieldsDirty(true);
    if (type === 'email') setEmail(e.target.value);
    if (type === 'password') setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setIsFieldsDirty(true);
      return;
    }
    try {
      setStatus('loading');
      const { data } = await axios.post('/admin/login', { email, password });
      localStorage.setItem('accessToken', data.access_token);
      navigate('/main/movies');
      setStatus('idle');
    } catch (e) {
      setError(e.response?.data?.message || 'Login failed');
      setStatus('idle');
    }
  };

  useEffect(() => {
    if (isFieldsDirty) {
      setError('');
    }
  }, [email, password]);

  return (
    <div className="movie-login-container">
      <div className="movie-login-form">
        <h2 className="movie-title">Cinema Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleOnChange(e, 'email')}
            placeholder="Enter your email"
            className={isFieldsDirty && !email ? 'input-error' : ''}
          />
          {isFieldsDirty && !email && <div className="error-text">Email is required</div>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="password-input">
            <input
              type={isShowPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => handleOnChange(e, 'password')}
              placeholder="Enter your password"
              className={isFieldsDirty && !password ? 'input-error' : ''}
            />
            <span onClick={handleShowPassword} className="toggle-password">
              {isShowPassword ? 'Hide' : 'Show'}
            </span>
          </div>
          {isFieldsDirty && !password && <div className="error-text">Password is required</div>}
        </div>

        <button
          className="login-button"
          disabled={status === 'loading'}
          onClick={handleLogin}
        >
          {status === 'loading' ? 'Logging in...' : 'Login'}
        </button>

        <div className="register-link">
          <a href="/register">Don't have an account? Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
