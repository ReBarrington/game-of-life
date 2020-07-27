import React from 'react';
import CanvasComponent from './Canvas';
import './GameComponents.css'

function Grid () {

    const gridWidth = 25;
    const gridHeight = gridWidth;

    function createGrid(rows) {
        const arr = [];
        for (let i = 0; i < rows; i++ ) {
            arr[i] = [];
        }
        return arr;
    }

    const gridSize = createGrid(gridWidth)


    function fillRandom() { //fill the grid randomly with 1s or 0s
        for (var j = 0; j < gridHeight; j++) { //iterate through rows
            for (var k = 0; k < gridWidth; k++) { //iterate through columns
                var rawRandom = Math.random(); //get a raw random number
                var improvedNum = (rawRandom * 2); //convert it to an int
                var randomBinary = Math.floor(improvedNum);

                if (randomBinary === 1) {
                    gridSize[j][k] = 1;
                } else {
                    gridSize[j][k] = 0;
                }
            }
        }
    }


  return (
      <div className="Grid Container">
          <CanvasComponent gridSize={gridSize} />
      </div>
  );
}

export default Grid;