import React, { useState, useCallback } from "react";
import './SearchBar.css'

function SearchBar({onSearch}){
    const [text, setText] = useState([]);

    const handleTextChange = useCallback((event) => {
        setText(event.target.value);
      }, []);

      const search = useCallback(() => {
        onSearch(text);
      }, [onSearch, text]);

    //map tracks to Track components via props 
    return (
        <div className="searchBar">
            <input id="search" placeholder="Enter Song Title" onChange={handleTextChange}/>
            <button onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;