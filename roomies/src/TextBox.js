import React, { Component } from 'react';
import "./TextBox.css";



class TextBox extends Component {
    render() {

            let divStyle = {
            height: `${this.props.height}`,
            width: `${this.props.width}`,
          };

        return ( 
            <div>
            <label className="TextBox-center" htmlFor={this.props.name}>{this.props.name}</label>
            <br />
            <textarea className="TextBox-center" style={divStyle} id={this.props.name}></textarea>
            </div>
        );
    }
}

export default TextBox;