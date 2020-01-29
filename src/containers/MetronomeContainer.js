import React, {Component} from 'react';
import TitleBox from '../components/TitleBox';
import SliderBox from '../components/SliderBox';
import PlayButton from '../components/PlayButton';

class MetronomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rangeValue: 100,
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
        setInterval(this.playClick, 1000);
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