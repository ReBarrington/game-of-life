import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Grid from './GameComponents/Grid';
import Buttons from './GameComponents/Buttons';
import Options from './GameComponents/Options';


class Main extends React.Component {

  // this component will hold all state
  constructor() {
    super();
    this.speed = 100;
		this.rows = 30;
		this.cols = 50;

    this.state = {
      generation: 0,
      evolving: false,
      // make an array as big as the rows and another as big as the cols. creates 2D array that has all boxes set to off
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
      color: "default"
    }
  }

  selectBox = (row, col) => {
    // create copy of the 2d array
    let gridCopy = arrayClone(this.state.gridFull);
    // find clicked array item and set to on
      gridCopy[row][col] = ! gridCopy[row][col];
        this.setState({
          gridFull: gridCopy
        })
  }
  

  fillRandomly = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i ++ ) { 
      for (let j = 0; j < this.cols; j ++ ) {
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
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
		  for (let j = 0; j < this.cols; j++) {

		    let count = 0;
		    if (i > 0) if (g[i - 1][j]) count++;
		    if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
		    if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
		    if (j < this.cols - 1) if (g[i][j + 1]) count++;
		    if (j > 0) if (g[i][j - 1]) count++;
		    if (i < this.rows - 1) if (g[i + 1][j]) count++;
		    if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
		    if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) count++;
		    if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
		    if (!g[i][j] && count === 3) g2[i][j] = true;
		  }
		}
		this.setState({
		  gridFull: g2,
      generation: this.state.generation + 1,
		});

  }
  
  changeColor = () => {
    console.log(' changing color from ', this.state.color)
    if (this.state.color === "default") {
      this.setState({
        color: "red"
      })
    }
    else if (this.state.color === "red") {
      this.setState({
        color: "yellow"
      })
    }
    else if (this.state.color === "yellow") {
      this.setState({
        color: "orange"
      })
    }
    else if (this.state.color === "orange") {
      this.setState({
        color: "lightblue"
      })
    }
    else if (this.state.color === "lightblue") {
      this.setState({
        color: "blue"
      })
    }
    else if (this.state.color === "blue") {
      this.setState({
        color: "default"
      })
    }
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
          evolving={this.state.evolving}
          color={this.state.color}
        />
        <h2>Generations: {this.state.generation}</h2>
        <Options changeColor={this.changeColor} colorTheme={this.state.color} />
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
