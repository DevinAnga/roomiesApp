import React, { Component } from "react";
import "../general.css";
import Navbar from "../Navbar";
import GenericButton from "../GenericButton";
import Registration from "../auth/register";
import { Switch, Route, NavLink } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.goToRegister = this.goToRegister.bind(this);
    }

    goToRegister() {
        console.log("clicked register");
        // let path = `./register`;
        // let history = useHistory();
        // history.push(path);

        window.location.href = '/Registration';
    }

    render() {
        return (
            <div className="appContainer">
                <Navbar cat={["About", "Help"]} />
                <div id="centralHolder">
                    <img className="homeLogo" src={require('../london.jpg')} alt="application logo" />
                    <h3>Roomie App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    <div id="buttonsHolder" className="buttonsHolder">

                        <button onClick={this.goToRegister} >Register</button>
                        <GenericButton name="Login" buttonClass="button" />

                        <Switch>
                            <Route exact path='/Registration' component={Registration} />
                        </Switch>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;