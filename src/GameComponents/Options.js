import React from 'react';
import { Button, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import '../index.css'

class Options extends React.Component {


    render() {
        return (
            <div className="center">
                <ButtonToolbar>
                    <Button variant="dark" className="btn btn-default" onClick={this.props.changeColor}>
                        Change Color
                    </Button>
                    <Button variant="dark" className="btn btn-default">
                        Rules of Game
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Options;