import React, { useState, useCallback } from "react";
import './SearchBar.css'

function SearchBar(props){
    const [text, setText] = useState([]);

    const handleTextChange = useCallback((event) => {
        setText(event.target.value);
      }, []);

      const search = useCallback(() => {
        props.onSearch(text);
      }, [props.onSearch, text]);

    //map tracks to Track components via props 
    return (
        <div className="searchBar">
            <input id="search" placeholder="Enter Song Title" onChange={handleTextChange}/>
            <button onClick={search}>Search</button>
        </div>
    );
}

export default SearchBar;