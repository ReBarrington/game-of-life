import React from 'react';
import { useCanvas } from './useCanvas';
import GameOptions from './GameOptions';

const Canvas = props => {

    console.log(props, ' is props in Canvas')
    
    const { fillRandom, gridFill, gridHeight, gridWidth } = props;
  
    const [ coordinates, setCoordinates, canvasRef, canvasWidth, canvasHeight, ctx ] = useCanvas();
  
    const handleCanvasClick=(event)=>{
      // on each click get current mouse location 
      const currentCoord = { x: event.clientX, y: event.clientY };
      // add the newest mouse location to an array in state 
      setCoordinates([...coordinates, currentCoord]);
    };
  
    const handleClearCanvas=(event)=>{
      setCoordinates([]);
    };

    const drawGrid = (gridHeight, gridWidth, gridFill) => {
        console.log(ctx, ' is ctx inside drawGrid')
        // setCoordinates([]);
        for (var j = 1; j < gridHeight; j++) { // iterate through rows
            for (var k = 1; k < gridWidth; k++) { // iterate through columns
                if (gridFill[j][k] === 1) {
                    ctx.fillStyle = "#66FF00";
                    ctx.fillRect(j, k, 1, 1);
                }
            }
        }
    }

    const startWithRandom = () => {
        console.log('Starting with random')
        fillRandom();
        drawGrid(gridHeight, gridWidth, gridFill);
    }
  
    return (
        <div>
            <canvas 
            ref={canvasRef}
            width={canvasWidth}
            height={canvasHeight}
            onClick={handleCanvasClick} />

            <GameOptions clear={handleClearCanvas} random={startWithRandom} props={props} />
        </div>
    );
  
  };

  export default Canvas;