import React, { useCallback } from 'react';
import './Track.css';


function Track({onAdd, track, onRemove, isRemoval}){
    const addTrack = useCallback(
        (event) => {
          onAdd(track);
        },
        [onAdd, track]
      );
    
      const removeTrack = useCallback(
        (event) => {
          onRemove(track);
        },
        [onRemove, track]
      );

    const renderButton = () => {
        if (isRemoval) {
          return (
            <button className="Track-button" onClick={removeTrack}>
              -
            </button>
          );
        }
        return (
          <button className="Track-button" onClick={addTrack}>
            +
          </button>
        );
      };

    return (
        <div className="Track">
            <div className="Track-info">
                <h3>{track.name}</h3>  
                <p>Artist: {track.artist} - Album: {track.album}</p>
            </div>
            {renderButton()}
        </div>
    );
}

export default Track;