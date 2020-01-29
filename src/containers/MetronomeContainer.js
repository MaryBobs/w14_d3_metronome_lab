import React, {Component} from 'react';
import TitleBox from '../components/TitleBox';
import SliderBox from '../components/SliderBox';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeValue: null,
            sound: new Audio('audio/click.wav')
        };
        this.handleSelectedValue = this.handleSelectedValue.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.playClick = this.playClick.bind(this);
    }

    handleSelectedValue(value) {
        this.setState({rangeValue: value});
    }

    playClick(){
        this.state.sound.play();
    }

    handlePlay() {
        const val = this.calculateBPM();
        setInterval(this.playClick, val);
    }

    calculateBPM() {
        const bpm = 60000 / this.state.rangeValue;
        return bpm;
    }


    



    render() {
        return (
            <div>
            <TitleBox />
            <SliderBox value={this.state.rangeValue} onValueSelected={this.handleSelectedValue}/>
            <PlayButton handlePlay={this.handlePlay}/>
            </div>
        )
    }
}

export default MetronomeContainer;