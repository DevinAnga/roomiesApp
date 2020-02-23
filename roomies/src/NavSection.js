import React, { Component } from 'react';
import "./Navbar.css";

class NavSection extends Component {
    render() {
        return (
            <h5 className="NavSection-stuff">{this.props.name}</h5>
        );
    }
}

export default NavSection;