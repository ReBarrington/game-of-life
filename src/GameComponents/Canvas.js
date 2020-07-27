import React from 'react';

class CanvasComponent extends React.Component {
    
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillRect(0,0, 1600, 800);
    }
    render() {
        return (
            <canvas ref="canvas" width={1600} height={800}/>
        );
    }
}

export default CanvasComponent;