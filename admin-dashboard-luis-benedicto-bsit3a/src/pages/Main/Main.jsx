import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const navigate = useNavigate();

  // Redirect to the login page if the user is not authenticated
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/login'); // Redirect to the login page if token is missing
    }
  }, [navigate]);

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified route
  };

  return (
    <div className="main-container">
      <header className="main-header">
        <h1>Welcome to MovieZone</h1>
        <p>Your ultimate destination for movie exploration and management.</p>
      </header>

      <div className="main-actions">
        <div className="main-card">
          <h2>Browse Movies</h2>
          <p>Explore trending movies, search for your favorites, and dive into details.</p>
          <button
            className="main-button"
            onClick={() => handleNavigation('/browse')}
          >
            Start Browsing
          </button>
        </div>

        <div className="main-card">
          <h2>Manage Your Collection</h2>
          <p>Organize your favorite movies and keep track of what you love.</p>
          <button
            className="main-button"
            onClick={() => handleNavigation('/dashboard')}
          >
            Go to Dashboard
          </button>
        </div>

        <div className="main-card">
          <h2>Discover New Releases</h2>
          <p>Stay updated with the latest blockbusters and must-watch movies.</p>
          <button
            className="main-button"
            onClick={() => handleNavigation('/discover')}
          >
            Discover Now
          </button>
        </div>
      </div>

      {/* Outlet for rendering nested routes */}
      <Outlet />
    </div>
  );
};

export default Main;
