import { useEffect, useState } from 'react';
import axios from 'axios';
import './BrowseMovies.css';

const BrowseMovies = () => {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const { data } = await axios.get('/movies', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="browse-container">
      <h1>Browse Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={movie.posterPath}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseMovies;
