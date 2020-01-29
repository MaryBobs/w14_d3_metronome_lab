import React from 'react';
import CounterBox from './CounterBox.js';
import Slider from './Slider.js';

const SliderBox = (props) =>  {
    return (
        <div>
        <CounterBox displayValue={props.value}/>
        <Slider onValueSelected={props.onValueSelected}/>
        </div>
    )
}

export default SliderBox;