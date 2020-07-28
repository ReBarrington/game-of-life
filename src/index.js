import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Grid from './GameComponents/Grid';
import Buttons from './GameComponents/Buttons';


class Main extends React.Component {

  // this component will hold all state
  constructor() {
    super();
    this.speed = 100;
    this.rows = 60;
    this.cols = 90;

    this.state = {
      generation: 0,
      evolving: false,
      // make an array as big as the rows and another as big as the cols. creates 2D array that has all boxes set to off
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  selectBox = (row, col) => {
    // create copy of the 2d array
    let gridCopy = arrayClone(this.state.gridFull);
    // find clicked array item and set to on
      gridCopy[row][col] = ! gridCopy[row][col];
      if (this.state.evolving === false) {
        this.setState({
          gridFull: gridCopy
        })
    }
  }

  fillRandomly = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i ++ ) { 
      for (let j = 0; j < this.rows; j ++ ) {
        // randomy create number between 1 and 4 (25% chance of turning on)
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  }

  evolveButton = () => {
    clearInterval((this.intervalID))
    this.intervalID = setInterval(this.evolve, this.speed)
    this.setState({
      evolving: true
    })
  }

  pauseButton = () => {
    clearInterval(this.intervalID)
    this.setState({
      evolving: false
    })
  }

  clear = () => {
    const grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({
			gridFull: grid,
      generation: 0,
      evolving: false
		});
  }

  slow = () => {
		this.speed = 1000;
		this.evolveButton();
	}

	fast = () => {
		this.speed = 100;
		this.evolveButton();
  }
  
  gridSize = (size) => {
		switch (size) {
			case "1":
				this.cols = 30;
				this.rows = 20;
			break;
			case "2":
				this.cols = 60;
				this.rows = 40;
			break;
			default:
				this.cols = 90;
				this.rows = 60;
		}
		this.clear();

	}

  evolve = () => {
    // make 2 copies
    // in order to check current grid and change clone
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let j = 1; j < this.rows -1; j ++) {
      for (let k = 0; k < this.cols -1; k++) {
        let count = 0;
        
        // game of life rules
        // checking neighbors
  
        //add up the total values for the surrounding cells
        count += g[j - 1][k - 1]; //top left
        count += g[j - 1][k]; //top center
        count += g[j - 1][k + 1]; //top right
        count += g[j][k - 1]; //middle left
        count += g[j][k + 1]; //middle right
        count += g[j + 1][k - 1]; //bottom left
        count += g[j + 1][k]; //bottom center
        count += g[j + 1][k + 1]; //bottom right

        //apply the rules to each cell
        if (g[j][k] === 0) {
          switch (count) {
            case 3:
              g2[j][k] = 1; //if cell is dead and has 3 neighbours, switch it on
              break;
            default:
              g2[j][k] = 0; //otherwise leave it dead
          }
        
        } else if (g[j][k] === 1) { //apply rules to living cell
            switch (count) {
              case 0:
              case 1:
                g2[j][k] = 0; //die of lonelines
                break;
              case 2:
              case 3:
                g2[j][k] = 1; //carry on living
                break;
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
                g2[j][k] = 0; //die of overcrowding
                break;
              default:
                g2[j][k] = 0; //
            }
        }
      }
    
    }
    //copy mirrorGrid to theGrid
    for (var j = 0; j < this.rows; j++) { //iterate through rows
      for (var k = 0; k < this.cols; k++) { //iterate through columns
        g[j][k] = g2[j][k];
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1,
      evolving: true
    });
  }



  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Buttons 
          evolving={this.state.evolving}
          evolveButton={this.evolveButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          fillRandomly={this.fillRandomly}
          gridSize={this.gridSize}
        />
        <Grid 
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    )
  }
}


function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
