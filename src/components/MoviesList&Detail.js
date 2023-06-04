import React, { useState, useEffect } from "react";

const MoviesList = ({movies, onSort, onSelectMovie}) => {
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key={movie.id} onClick={() => onSelectMovie(movie)}>
                        <img src={movie.poster_path} alt="movie-alt" />
                        <section className="title-year">
                            <h2 className="movie-title">{movie.title}</h2>
                            <p className="movie-release-year">Release Year: {movie.release_date}</p>
                        </section>
                    </li>
                )
            }) }
            
        </ul>
    )
}

const MovieDetails = ({movie, onClose}) => {
    const [movieDetails, setMovieDetails] = useState("");
    useEffect (() => {
        const fetchMoviesDetails = async () => {
            try{
                const responce = await fetch( `https://api.themoviedb.org/3/movie/${movie.id}?api_key=[api_key]&language=en-us`);
                const data = await responce.json();
                setMovieDetails(data);
            }catch(error){
                console.log(error);
            }
        };
        fetchMoviesDetails();
    }, [movie.id]);
    if(!movieDetails){
        return <div>Loading movies Detais...</div>
    }


    return (
        <article className="movie-details">
            <section className="movie-detail-img">
                <img src={movieDetails.poster_path} alt="movie-poster-alt" className="movie-img"/>
            </section>
            <section className="movie-detail-title-year-plot">
                <h2 className="movie-title-year">{movieDetails.title} {movieDetails.release_date}</h2>
                <p className="movie-plot">{movieDetails.overview}</p>
                <button className="close-btn">{onClose}</button>
            </section>
        </article>
    )
}

export {MoviesList, MovieDetails};
