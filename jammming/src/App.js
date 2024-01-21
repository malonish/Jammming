import React, { useState, useCallback } from "react";
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PlayList from './components/PlayList/PlayList'
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './util/Spotify';

function App() {

  const[playListName , setPlayListName] = useState("New Playlist");
  const [playListTracks, setPlayListTracks] = useState([]);

  const updatePlayListName = useCallback((name) => {
    setPlayListName(name);
  }, []);


  const addTrack = useCallback ((track) => 
    {
      //if some() === true then don't add. It's there already
      if(playListTracks.some((playListTrack) => playListTrack.id === track.id)){
        return;
      }
      //spread notation
      setPlayListTracks((prev) => [...prev, track]);
    }, [playListTracks]
  );

  const removeTrack = useCallback((track) => 
    {
      setPlayListTracks((prev) => prev.filter((prevTrack) => prevTrack.id !== track.id));
    }, []
  );

  const [searchResults, setSearchResults] = useState([]);

  const savePlaylist = useCallback(() => {
    const uris = playListTracks.map((track) => track.uri); 
    Spotify.savePlaylist(playListName,uris).then(() => {
      setPlayListTracks([]);
    });
  }, [playListName, playListTracks]);

  const search = useCallback((text) => {
    Spotify.search(text).then(setSearchResults);
  }, []);


  return (
    <div className="app">
      <div className="searchBar">
        <SearchBar onSearch={search}/>
      </div>

      <div className="listContainer">
        <SearchResults searchResults={searchResults} 
          onAdd={addTrack}
        />
        <PlayList 
          playListName={playListName}
          tracks={playListTracks}
          onNameChange={updatePlayListName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
