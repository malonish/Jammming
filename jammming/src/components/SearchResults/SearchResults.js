import React from 'react';
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

function SearchResults({searchResults,onAdd}){
    return (
        <div className='searchResults'>
            <h3>Results</h3>
            <TrackList tracks={searchResults}  onAdd={onAdd} />
        </div>
    );
}

export default SearchResults;