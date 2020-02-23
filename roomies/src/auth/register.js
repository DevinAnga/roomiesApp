import React, { Component } from "react";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password_confirm: "",
            registrartionErrs: ""
        }

        this.doSubmit = this.doSubmit.bind(this);
        this.doOnChange = this.doOnChange.bind(this);
    }

    doSubmit(event) {
        //This will handle the form data
        console.log("register form submit");
        //TODO: validate fields
        // call to register WS goes here
        event.preventDefault();
    }

    //saves the state of form data
    doOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="appContainerGreen">
                <h1>This is my registration form </h1>
                <form onSubmit={this.doSubmit}>
                    <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.doOnChange} required />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.doOnChange} required />
                    <input type="password" name="password_confirm" placeholder="Confirm Password" value={this.state.password_confirm} onChange={this.doOnChange} required />

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;