import React, { useState, useEffect } from "react";
import { getMovieById } from "./api";

const MoviesList = (props) => {
    const { movies, setSelectedMovie } = props;
    const handleClick = (event, id) => {
        console.log("movie clicked", id);
        getMovieById(id).then((data) => {
            console.log(data);
            setSelectedMovie(data);
        });
    };
    console.log(movies);
    return (
        <ul>
            {movies.map((movie, index) => {
                return (
                    <li onClick={(e) => handleClick(e, movie.id)} key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                            alt="movie-alt"
                        />
                        <section className="title-year">
                            <h2 className="movie-title">{movie.title}</h2>
                            <p className="movie-release-year">
                                Release Year: {movie.release_date.slice(0, 4)}
                            </p>
                        </section>
                    </li>
                );
            })}
        </ul>
    );
};

const MovieDetails = ({ selectedMovie, setSelectedMovie }) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const handleClose = () => {
        setSelectedMovie(null);
    };
    useEffect(() => {
        setMovieDetails(selectedMovie);
    }, []);
    return (
        <article className="movie-details">
            <section className="movie-detail-img">
                <img
                    src={`https://image.tmdb.org/t/p/w200${selectedMovie?.poster_path}`} //
                    alt="movie-poster-alt"
                    className="movie-img"
                />
            </section>
            <section className="movie-detail-title-year-plot">
                <h2 className="movie-title-year">
                    {selectedMovie.title} (
                    {selectedMovie.release_date.slice(0, 4) || "0000"})
                </h2>
                <p className="movie-plot">{selectedMovie.overview}</p>
                <button onClick={handleClose} className="close-btn">
                    Close
                </button>
            </section>
        </article>
    );
};

export { MoviesList, MovieDetails };
