import React from 'react';
import GameOptions from './GameOptions';


class CanvasComponent extends React.Component {
    
    componentDidMount() {
        this.updateCanvas();
    }

    startWithRandom() {
        console.log('Starting with random')
        this.updateCanvas();
        this.props.fillRandom();
        this.drawGrid();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 25, 25);
    }

    drawGrid() {
        // const c = document.getElementById('canvas');
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 25, 25); // clear canvas ahead of each redraw
        for (var j = 1; j < this.props.gridHeight; j++) { // iterate through rows
            for (var k = 1; k < this.props.gridWidth; k++) { // iterate through columns
                if (this.props.gridFill[j][k] === 1) {
                    ctx.fillStyle = "#66FF00";
                    ctx.fillRect(j, k, 1, 1);
                }
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.startWithRandom.bind(this)}>Start with Random Placement</button>
                <canvas ref="canvas" width={1600} height={800}/>
            </div>
        )
    }
}

export default CanvasComponent;