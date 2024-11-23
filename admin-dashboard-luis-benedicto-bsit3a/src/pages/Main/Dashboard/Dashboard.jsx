import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  // Fetch all movies from backend
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    axios({
      method: 'get',
      url: '/movies',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log('Error fetching movies:', error);
      });
  }, []);

  // Handle delete movie
  const handleDelete = (movieId) => {
    const accessToken = localStorage.getItem('accessToken');
    axios({
      method: 'delete',
      url: `/movies/${movieId}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        setMovies(movies.filter((movie) => movie.id !== movieId));
        alert('Movie deleted successfully.');
      })
      .catch((error) => {
        console.log('Error deleting movie:', error);
      });
  };

  // Handle edit movie
  const handleEdit = (movieId) => {
    navigate(`/movies/edit/${movieId}`);
  };

  return (
    <div className='dashboard'>
      <h1>Movie Dashboard</h1>
      <Link to='/movies/new'>
        <button className='add-button'>Add New Movie</button>
      </Link>

      <table className='movie-table'>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Overview</th>
            <th>Popularity</th>
            <th>Release Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <img
                  src={movie.posterPath}
                  alt={movie.title}
                  className='poster-thumbnail'
                />
              </td>
              <td>{movie.title}</td>
              <td>{movie.overview}</td>
              <td>{movie.popularity}</td>
              <td>{movie.releaseDate}</td>
              <td>
                <button
                  className='edit-button'
                  onClick={() => handleEdit(movie.id)}
                >
                  Edit
                </button>
                <button
                  className='delete-button'
                  onClick={() => handleDelete(movie.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
