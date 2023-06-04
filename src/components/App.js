import React, { useEffect, useMemo, useState } from "react";
import "../styles/App.css";
import SearchBar from "./SearchBar";
import { MoviesList, MovieDetails } from "./MoviesList&Detail";
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
    const [sortBy, setSortBy] = useState("ascending");
    const [selectedMovie, setSelectedMovie] = useState(null);

    // Sorting Movies by Release Year Logic
    const sortedMovies = useMemo(() => {
        if (movies.length === 0) {
            return [];
        }
        return movies.sort((firstMovie, secondMovie) => {
            const firstYear = firstMovie.release_date.split("-")[0];
            const secondYear = secondMovie.release_date.split("-")[0];
            const first = parseInt(firstYear);
            const second = parseInt(secondYear);
            if (sortBy === "descending") {
                return first - second;
            } else {
                return second - first;
            }
        });
    }, [movies, sortBy]);
    const handleSort = () => {
        const sortedList = sortedMovies;
        console.log(sortedList);
        setMovies(sortedList);
        setSortBy((prev) => {
            if (prev === "ascending") {
                return "descending";
            }
            return "ascending";
        });
    };
    useEffect(() => {
        console.log("movies modified", movies);
    }, [movies]);

    return (
        <div id="main">
            <h1>Movie Search</h1>
            <SearchBar setMovies={setMovies} />
            <button onClick={handleSort} className="sort-btn">
                Sort Movies by release year ({sortBy})
            </button>
            <MoviesList setSelectedMovie={setSelectedMovie} movies={movies} />
            {selectedMovie && (
                <section className="movie-details">
                    <MovieDetails
                        setSelectedMovie={setSelectedMovie}
                        selectedMovie={selectedMovie}
                    />
                </section>
            )}
        </div>
    );
};

export default App;
