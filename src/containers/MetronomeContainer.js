import React, {Component} from 'react';
import TitleBox from '../components/TitleBox';
import SliderBox from '../components/SliderBox';
import PlayButton from '../components/PlayButton';
import Slider from '../components/Slider';

class MetronomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeValue: 100,
            sound: 'audio/click.wav'
        };
        this.handleSelectedValue = this.handleSelectedValue.bind(this);
        this.playClick = this.playClick.bind(this);
    }

    handleSelectedValue(value) {
        this.setState({rangeValue: value});
    }

    // handlePlay() {
        // clickInterval = setInterval(playClick(), 1000);
    // }

     

    playClick(){
        const audio = new Audio(this.state.sound)
        return audio.play();
    }



    render() {
        return (
            <div>
            <TitleBox />
            <SliderBox value={this.state.rangeValue} onValueSelected={this.handleSelectedValue}/>
            <PlayButton sound={this.state.sound} handlePlay={this.playClick}/>
            </div>
        )
    }
}

export default MetronomeContainer;