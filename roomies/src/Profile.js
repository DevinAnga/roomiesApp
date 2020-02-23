import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", city: "", about: "", occupation: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    alert(`You typed: ${this.state.firstName}`);
    this.setState({ firstName: "" });
  }
  render() {
    return (
      <div className='Profile'>
        <h1>Profile Information</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name </label>
          <input
            id='firstName'
            type='text'
            name='firstName'
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br /><br />
          <label htmlFor="city">City </label>
          <input
            id="city"
            type='text'
            name='city'
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br /><br />
          <label htmlFor="about">About </label>
          <input
            id="about"
            type='text'
            name='about'
            value={this.state.about}
            onChange={this.handleChange}
          />
          <br /><br />
          <label htmlFor="occupation">Occupation </label>
          <input
            id="occupation"
            type='occupation'
            name='occupation'
            value={this.state.occupation}
            onChange={this.handleChange}
          />
          <br /><br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default Profile;
