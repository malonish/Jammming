import React, { useCallback } from 'react';
import './Track.css';


function Track(props){
    const addTrack = useCallback(
        (event) => {
          props.onAdd(props.track);
        },
        [props.onAdd, props.track]
      );
    
      const removeTrack = useCallback(
        (event) => {
          props.onRemove(props.track);
        },
        [props.onRemove, props.track]
      );

    const renderButton = () => {
        if (props.isRemoval) {
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
                <h3>{props.track.name}</h3>  
                <p>Artist: {props.track.artist} - Album: {props.track.album}</p>
            </div>
            {renderButton()}
        </div>
    );
}

export default Track;