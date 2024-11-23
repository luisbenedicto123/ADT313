import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Movie.css';

const Movie = () => {
  const [movie, setMovie] = useState(undefined);
  const { movieId } = useParams(); // Get the movie ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios({
      method: 'get',
      url: `/movies/${movieId}`, // Fetch movie by ID
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching movie details:', error);
      });
  }, [movieId]);

  // Navigate to the edit page
  const handleEdit = () => {
    navigate(`/movies/edit/${movieId}`);
  };

  if (!movie) {
    return <div>Loading...</div>; // Display loading message until movie data is fetched
  }

  return (
    <div className='movie-container'>
      <div className='movie-details'>
        <img
          className='movie-poster'
          src={movie.posterPath}
          alt={movie.title}
        />
        <div className='movie-info'>
          <h1>{movie.title}</h1>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Popularity:</strong> {movie.popularity}</p>
          <p><strong>Vote Average:</strong> {movie.voteAverage}</p>
        </div>
      </div>
      <div className='movie-actions'>
        <button className='edit-button' onClick={handleEdit}>
          Edit Movie
        </button>
      </div>
    </div>
  );
};

export default Movie;
