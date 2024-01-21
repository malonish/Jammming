import React from 'react';
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css";

function SearchResults(props){
    return (
        <div className='searchResults'>
            <h3>Results</h3>
            <TrackList tracks={props.searchResults}  onAdd={props.onAdd} />
        </div>
    );
}

export default SearchResults;