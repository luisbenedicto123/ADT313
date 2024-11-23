import { useEffect, useState } from 'react';
import axios from 'axios';
import './DiscoverMovies.css';

const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);

  // Fetch newly released movies
  useEffect(() => {
    const fetchNewReleases = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const { data } = await axios.get('/movies/new-releases', {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setMovies(data);
      } catch (error) {
        console.error('Error fetching new releases:', error);
      }
    };

    fetchNewReleases();
  }, []);

  return (
    <div className="discover-container">
      <h1>Discover New Releases</h1>
      <div className="movies-list">
        {movies.map((movie) => (
          <div className="movie-item" key={movie.id}>
            <img
              src={movie.posterPath}
              alt={movie.title}
              className="movie-thumbnail"
            />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Released on: {movie.releaseDate}</p>
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverMovies;
