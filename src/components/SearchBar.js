import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handelSubmit}>
      <input type="text" className="search-input" />
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
