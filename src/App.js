import React from 'react';
import './App.css';
import GameWindow from './LayoutComponents/GameWindow';
// import Info from './LayoutComponents/Info';

function App() {
  return (
    <div className="App">
        <h1> Conway's Game of Life </h1>
        <div className="Content">
          <div className="GameWindow">
            <GameWindow />
          </div>
          {/* <div className="Info">
            <Info />
          </div> */}
        </div>
    </div>
  );
}

export default App;
