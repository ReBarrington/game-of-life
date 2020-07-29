import React from 'react';
import { Button, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import '../index.css'

class Buttons extends React.Component {

    handleSelect = (e) => {
        this.props.gridSize(e)
    }

    render() {
        return (
            <div className="btn-cont">
                <ButtonToolbar className="buttons">
                    <DropdownButton
                        title="Evolve"
                        id="size-menu"
                        onSelect={this.props.evolveButton}
                        variant="dark"
                    >
                        <Dropdown.Item variant="dark" className="btn btn-default" onClick={this.props.slow}>
                            Slow
                        </Dropdown.Item>
                        <Dropdown.Item variant="dark" className="btn btn-default" onClick={this.props.fast}>
                            Fast
                        </Dropdown.Item>
                    </DropdownButton>
                    <Button variant="dark" className="btn btn-default" onClick={this.props.pauseButton}>
                        Pause
                    </Button>
                    <Button variant="dark" className="btn btn-default" onClick={this.props.clear}>
                        Clear
                    </Button>
                    <Button variant="dark" className="btn btn-default" onClick={this.props.fillRandomly}>
                        Populate Randomly
                    </Button>
                    <DropdownButton
                        title="Grid Size"
                        id="size-menu"
                        onSelect={this.handleSelect}
                        variant="dark"
                    >
                        <Dropdown.Item eventKey="1">20x30</Dropdown.Item>
                        <Dropdown.Item eventKey="2">40x60</Dropdown.Item>
                        <Dropdown.Item eventKey="3">60x90</Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons;