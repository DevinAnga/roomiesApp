import React, { Component } from 'react';
import NavSection from './NavSection';
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [this.props.cat]
        }
    }

    render() {
        let navArray = this.props.cat.map(ni => <NavSection name={ni} />);
        return (
            <div className="Navbar-stuff">
                <img className="navLogo" src={require('./london.jpg')} alt="application logo" />
                {navArray}
            </div>
        );
    }
}

export default Navbar;