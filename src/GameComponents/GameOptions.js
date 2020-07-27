import React from 'react';

const GameOptions = props => {
    console.log(props, ' is props in GameOptions')

    // const startRandom = () => {
    //     props.fillRandom();
    //     props.drawGrid();
    // }

    return (
        <div className="buttons">
            <button onClick={props.random}> Start with Random </button>
            <button onClick={props.clear} > CLEAR </button>
        </div>
    )
}

export default GameOptions;