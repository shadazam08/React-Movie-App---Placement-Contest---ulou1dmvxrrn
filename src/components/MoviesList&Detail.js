import React, { useState, useEffect } from "react";

const MoviesList = (props) => {
    return (
        <ul>
            <li>
                <img src={movie.poster_path} alt="movie-alt" />
                <section className="title-year">
                    <h2 className="movie-title">Title</h2>
                    <p className="movie-release-year">Release Year: Year</p>
                </section>
            </li>
        </ul>
    )
}

const MovieDetails = (props) => {
    const [movieDetails, setMovieDetails] = useState("");

    return (
        <article className="movie-details">
            <section className="movie-detail-img">
                <img src={movieDetails.poster_path} alt="movie-poster-alt" className="movie-img"/>
            </section>
            <section className="movie-detail-title-year-plot">
                <h2 className="movie-title-year">Title (Release Date)</h2>
                <p className="movie-plot">Overview</p>
                <button className="close-btn">Close</button>
            </section>
        </article>
    )
}

export {MoviesList, MovieDetails};