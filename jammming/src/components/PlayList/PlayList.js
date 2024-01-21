import React, {useCallback} from 'react';
import TrackList from "../TrackList/TrackList";
import "./PlayList.css"

function PlayList(props){
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div className="playList">
            <input onChange={handleNameChange} defaultValue={"New Playlist"}/>
            <TrackList 
                tracks={props.tracks} 
                isRemoval={true}
                onRemove={props.onRemove}/>   
           
            <button className='savePlayList' onClick={props.onSave}>Save To Spotify</button>
            
            
        </div>
    );

}

export default PlayList;