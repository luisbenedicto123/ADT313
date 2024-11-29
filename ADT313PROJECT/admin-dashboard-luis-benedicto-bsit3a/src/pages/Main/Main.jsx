import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="main-container">
      <div className="sidebar">
        <h2 className="sidebar-logo">MovieVerse</h2>
        <ul className="nav-list">
          <li>
            <a href="/main/movies">Movies</a>
          </li>
          <li className="logout">
            <a onClick={handleLogout}>Logout</a>
          </li>
        </ul>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
