import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");
    
    return (
        <form>
            <input type="text" className="search-input"/>
            <button type="submit" className="search-btn">Search</button>
        </form>
    );
}

export default SearchBar;