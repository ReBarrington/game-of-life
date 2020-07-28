import React from 'react';
import Box from './Box';
import '../index.css'

class Grid extends React.Component {

    render() {
        const width = (this.props.cols * 14);
        const rowsArr = [];

        let boxClass = "";

        for (let i = 0; i < this.props.rows; i ++ ){
            for (let j = 0; j < this.props.rows; j ++ ){
                
                let boxId = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? "box on" : "box off"

                rowsArr.push(
                    <Box 
                        boxClass={boxClass}
                        key={boxId}
                        boxId={boxId}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                )
            }
        }

        return (
            <div className="grid" style={{width: width}}>
                {rowsArr}
            </div>
        );
    }

}

export default Grid;