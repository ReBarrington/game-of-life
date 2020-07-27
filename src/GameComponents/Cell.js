import React, { Component } from 'react';

class Cell extends Component {
    constructor() {
        super();
        this.state = {
            alive: false
        }
    }
    render() {
        return (
            <div className="gridSquare">

            </div>
        )
    }

}

export default Cell;