import React, {Component} from 'react';
import TitleBox from '../components/TitleBox';
import SliderBox from '../components/SliderBox';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {
    render() {
        return (
            <div>
            <TitleBox />
            <SliderBox />
            <PlayButton />
            </div>
        )
    }
}

export default MetronomeContainer;