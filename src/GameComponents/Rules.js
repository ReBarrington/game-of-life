import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';

class Rules extends React.Component {
 
  constructor(){
    super()

    this.customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
      };

    this.state = {
        show: false
        }
    }
 
  toggle = () => {
      this.setState({
          show: !this.state.show
      })
  }
 
 
  render() {
    return (
      <div>
        <Button 
            variant="dark" 
            className="btn btn-default"
            onClick={this.toggle}
        >
            Rules of Game
        </Button>
            <Modal isOpen={this.state.show} toggle={this.toggle} onRequestClose={this.toggle} style={this.customStyles} >
                <h1> Conway's Game of Life </h1>
                <h1> Rules: </h1>
                <section id="rules">
                    <p>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
                    <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
                    <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
                    <p>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>
                </section>
            </Modal>
      </div>
    )
  }
}

export default Rules;