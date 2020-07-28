import React from 'react';
import { Button, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import '../index.css'

class Buttons extends React.Component {

    handleSelect = (e) => {
        this.props.gridSize(e)
    }

    render() {
        return (
            <div className="center">
                <ButtonToolbar>
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
                        <Dropdown.Item eventKey="1">20x10</Dropdown.Item>
                        <Dropdown.Item eventKey="2">50x30</Dropdown.Item>
                        <Dropdown.Item eventKey="3">70x50</Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Buttons;