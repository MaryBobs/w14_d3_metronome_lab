import React from 'react';

const Slider = (props) => {

    function handleChange(e) {
        props.onValueSelected(e.target.value);
    }

    return (
        <div className="Slider">
            <input onChange={handleChange} type="range" id="bpm" name="bpm"
            min="40" max="218"></input>
        </div>
    )
}

export default Slider;