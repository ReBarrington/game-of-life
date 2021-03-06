import React from 'react';
import '../index.css'

class Box extends React.Component {

    selectBox = () => {
        if (this.props.evolving === false) {
            this.props.selectBox(this.props.row, this.props.col)
        }
    }

    render() {
        return (
            <div 
                className={this.props.boxClass}
                id={this.props.id}
                onClick={this.selectBox}
            >
            </div>
        )
    }
}

export default Box;