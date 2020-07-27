import React from 'react';

class CanvasComponent extends React.Component {
    
    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 1600, 800);
    }

    drawGrid() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 1600, 800); // clear canvas ahead of each redraw
        for (var j = 1; j < this.props.gridHeight; j++) { // iterate through rows
            for (var k = 1; k < this.props.gridWidth; k++) { // iterate through columns
                if (this.props.gridSize[j][k] === 1) {
                    ctx.fillStyle = "green";
                    ctx.fillRect(j, k, 1, 1);
                }
            }
        }
    }

    render() {
        return (
            <canvas ref="canvas" width={1600} height={800}/>
        )
    }
}

export default CanvasComponent;