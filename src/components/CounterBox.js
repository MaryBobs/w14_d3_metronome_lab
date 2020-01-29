import React from 'react';

const CounterBox = (props) => {
    return(
        <div className="counter">
            <span>{props.displayValue}</span>
            <span>BPM</span>
        </div>
    )
}

export default CounterBox;