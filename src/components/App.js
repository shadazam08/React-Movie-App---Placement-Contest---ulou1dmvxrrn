import React, { useEffect, useMemo, useState } from 'react'
import '../styles/App.css';
import SearchBar from './SearchBar';
import { MoviesList, MovieDetails } from './MoviesList&Detail';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [sortBy, setSortBy] = useState("ascending");
  const [selectedMovie, setSelectedMovie] = useState("");

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
  }, [movies, sortBy])

  return (
    <div id="main">
      <h1>Movie Search</h1>
      <SearchBar />
      <button className="sort-btn">Sort Movies by release year ({sortBy})</button>
      <MoviesList />
      <section className='movie-details'>
        <MovieDetails />
      </section>
    </div>
  )
}

export default App;
