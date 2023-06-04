import React, { useState } from "react";
import { searchMovieData } from "./api";

const SearchBar = ({ setMovies }) => {
    const [searchInput, setSearchInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovieData(searchInput).then((data) => {
            let { results } = data;
            console.log(results);
            setMovies(results);
        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                type="text"
                className="search-input"
            />
            <button type="submit" className="search-btn">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
