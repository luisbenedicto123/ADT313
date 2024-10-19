import { useState, useRef, useCallback, useEffect } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../../../utils/hooks/useDebounce';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFieldsDirty, setIsFieldsDirty] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const userInputDebounce = useDebounce({ name, email, password, confirmPassword }, 2000);
  const [debounceState, setDebounceState] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleShowPassword = useCallback(() => {
    setIsShowPassword((prev) => !prev);
  }, []);

  const handleShowConfirmPassword = useCallback(() => {
    setIsShowConfirmPassword((prev) => !prev);
  }, []);

  const handleOnChange = (event, type) => {
    setDebounceState(false);
    setIsFieldsDirty(true);

    switch (type) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleRegister = async () => {
    const data = { name, email, password, confirmPassword };
    setStatus('loading');

    await axios.post('/admin/register', data, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data.access_token);
        navigate('/main/movies');
        setStatus('idle');
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log(e);
        setStatus('idle');
      });
  };

  useEffect(() => {
    setDebounceState(true);
  }, [userInputDebounce]);

  const isPasswordValid = password === confirmPassword && password.length > 0;

  return (
    <div className='Register'>
      <div className='main-container'>
        <form>
          <div className='form-container'>
            <h3>Register</h3>
            {error && <span className='register errors'>{error}</span>}
            <div>
              <div className='form-group'>
                <label>Name:</label>
                <input
                  type='text'
                  name='name'
                  ref={nameRef}
                  onChange={(e) => handleOnChange(e, 'name')}
                />
              </div>
              {debounceState && isFieldsDirty && name === '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>E-mail:</label>
                <input
                  type='text'
                  name='email'
                  ref={emailRef}
                  onChange={(e) => handleOnChange(e, 'email')}
                />
              </div>
              {debounceState && isFieldsDirty && email === '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>Password:</label>
                <input
                  type={isShowPassword ? 'text' : 'password'}
                  name='password'
                  ref={passwordRef}
                  onChange={(e) => handleOnChange(e, 'password')}
                />
              </div>
              {debounceState && isFieldsDirty && password === '' && (
                <span className='errors'>This field is required</span>
              )}
            </div>
            <div>
              <div className='form-group'>
                <label>Confirm Password:</label>
                <input
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  ref={confirmPasswordRef}
                  onChange={(e) => handleOnChange(e, 'confirmPassword')}
                />
              </div>
              {debounceState && isFieldsDirty && confirmPassword === '' && (
                <span className='errors'>This field is required</span>
              )}
              {!isPasswordValid && debounceState && isFieldsDirty && (
                <span className='errors'>Passwords must match</span>
              )}
            </div>
            <div className='show-password' onClick={handleShowPassword}>
              {isShowPassword ? 'Hide' : 'Show'} Password
            </div>
            <div className='show-password' onClick={handleShowConfirmPassword}>
              {isShowConfirmPassword ? 'Hide' : 'Show'} Confirm Password
            </div>
            <div className='submit-container'>
              <button
                type='button'
                disabled={status === 'loading' || !isPasswordValid}
                onClick={() => {
                  if (status === 'loading') {
                    return;
                  }
                  if (name && email && password && confirmPassword && isPasswordValid) {
                    handleRegister();
                  } else {
                    setIsFieldsDirty(true);
                    if (name === '') {
                      nameRef.current.focus();
                    } else if (email === '') {
                      emailRef.current.focus();
                    } else if (password === '') {
                      passwordRef.current.focus();
                    } else if (confirmPassword === '') {
                      confirmPasswordRef.current.focus();
                    }
                  }
                }}
              >
                {status === 'idle' ? 'Register' : 'Loading...'}
              </button>
            </div>
            <div className='login-container'>
              <a href='/login'>
                <small>Already have an account? Login</small>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
