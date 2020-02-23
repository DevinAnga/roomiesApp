import React, { Component } from 'react';
import "./GenericButton.css";

class GenericButton extends Component {
    render() {
        return ( 
            <div>
            <button className={this.props.buttonClass}> { this.props.name }</button>
            </div>
        );
    }
}

export default GenericButton;