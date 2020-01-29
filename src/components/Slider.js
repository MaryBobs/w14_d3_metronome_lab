import React from 'react';

const Slider = (props) => {
    return (
        <div className="Slider">
            <input type="range" id="bpm" name="bpm"
            min="40" max="218"></input>
        </div>
    )
}

export default Slider;