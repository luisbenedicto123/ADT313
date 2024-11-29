import React from 'react';
import './Movie.css';

const Movie = ({ movie, selectMovie }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

    return (
        <div onClick={() => selectMovie(movie)} className="movie">
            <div className="movie-image">
                {movie.poster_path && (
                    <img
                        src={IMAGE_PATH + movie.poster_path}
                        alt={movie.title}
                        className="movie-poster"
                    />
                )}
            </div>

            <div className="movie-info">
                <h5 className="movie-title">{movie.title}</h5>
                {movie.vote_average && (
                    <div className="movie-vote">
                        <span className="vote-icon">⭐</span>
                        <span className="vote-average">{movie.vote_average}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Movie;
