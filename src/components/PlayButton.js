import React from 'react';

const PlayButton = (props) => {
    return (
        <div className="button" >
            <button onClick={props.handlePlay}>
            <svg height="50" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146z"/>
            </svg>
            </button>
        </div>
    )
}

export default PlayButton;