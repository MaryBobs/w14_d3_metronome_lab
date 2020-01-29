import React, {Component} from 'react';
import TitleBox from '../components/TitleBox';
import SliderBox from '../components/SliderBox';

class MetronomeContainer extends Component {
    render() {
        return (
            <div>
            <TitleBox />
            <SliderBox />
            </div>
        )
    }
}

export default MetronomeContainer;