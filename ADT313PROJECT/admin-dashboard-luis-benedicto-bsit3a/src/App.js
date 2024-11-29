import React, { useEffect, useState } from "react";
import axios from "axios";
import Youtube from "react-youtube";
import "./App.css";
import Login from "./pages/Public/Login/Login";
import Register from "./pages/Public/Register/Register";

function App() {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + "search/movie";
  const DISCOVER_API = MOVIE_API + "discover/movie";
  const API_KEY = "9847e26188ef9aa254e2c4fda3dbc898";
  const POSTER_PATH = "https://image.tmdb.org/t/p/w300";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [playingTrailer, setPlayingTrailer] = useState(null);
  const [user, setUser] = useState(null); 
  const [isRegistering, setIsRegistering] = useState(false); 

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (event) => {
    if (event) event.preventDefault();

    try {
      const { data } = await axios.get(searchKey ? SEARCH_API : DISCOVER_API, {
        params: { api_key: API_KEY, query: searchKey },
      });
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const playTrailer = async (movieId) => {
    try {
      const { data } = await axios.get(`${MOVIE_API}movie/${movieId}`, {
        params: { api_key: API_KEY, append_to_response: "videos" },
      });

      const trailerVideo = data.videos?.results.find(
        (vid) => vid.name === "Official Trailer"
      ) || data.videos?.results[0];

      setPlayingTrailer({ movieId, trailerKey: trailerVideo?.key });
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <div key={movie.id} className="movie-card">
        <div
          className="movie-thumbnail"
          onClick={() => playTrailer(movie.id)}
          style={{ position: "relative" }}
        >
          {playingTrailer?.movieId === movie.id && playingTrailer.trailerKey ? (
            <Youtube
              videoId={playingTrailer.trailerKey}
              className="youtube-trailer"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: { autoplay: 1, controls: 0 },
              }}
            />
          ) : (
            <img
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
          )}
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
        </div>
      </div>
    ));

  return (
    <div className="App">
      {!user ? (
    
        isRegistering ? (
          <Register onLogin={() => setIsRegistering(false)} onRegister={(user) => setUser(user)} />
        ) : (
          <Login onRegister={() => setIsRegistering(true)} onLogin={(user) => setUser(user)} />
        )
      ) : (
      
        <>
          <header className="header">
            <div className="brand">🎥 MovieFlix</div>
            <div className="user-info">
              <span>Welcome, {user.username}!</span>
              <button onClick={() => setUser(null)} className="logout-btn">Logout</button>
            </div>
            <form className="search-form" onSubmit={fetchMovies}>
              <input
                type="text"
                placeholder="Search for a movie..."
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button type="submit">🔍</button>
            </form>
          </header>

          <div className="movie-grid">{renderMovies()}</div>
        </>
      )}
    </div>
  );
}

export default App;
