import React, {Component} from 'react';
import TitleBox from '../components/TitleBox';
import SliderBox from '../components/SliderBox';
import PlayButton from '../components/PlayButton';
import Slider from '../components/Slider';

class MetronomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeValue: 100
        };
        this.handleSelectedValue = this.handleSelectedValue.bind(this);
    }

    handleSelectedValue(value) {
        this.setState({rangeValue: value});
    }



    render() {
        return (
            <div>
            <TitleBox />
            <SliderBox onValueSelected={this.handleSelectedValue}/>
            <PlayButton />
            </div>
        )
    }
}

export default MetronomeContainer;