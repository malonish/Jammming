import React, {useCallback} from 'react';
import TrackList from "../TrackList/TrackList";
import "./PlayList.css"

function PlayList({onNameChange,tracks,onRemove,onSave}){
    const handleNameChange = useCallback(
        (event) => {
            onNameChange(event.target.value);
        },
        [onNameChange]
    );

    return (
        <div className="playList">
            <input onChange={handleNameChange} defaultValue={"New Playlist"}/>
            <TrackList 
                tracks={tracks} 
                isRemoval={true}
                onRemove={onRemove}/>   
           
            <button className='savePlayList' onClick={onSave}>Save To Spotify</button>
            
            
        </div>
    );

}

export default PlayList;