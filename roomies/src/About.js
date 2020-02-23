import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className='About'>
        <h1>About</h1>
        <h3>Hi, I'm {this.props.name}</h3>
        <p>I live in {this.props.city}</p>
        <img classname="profilePic" src='https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1320&q=80' />
      </div>
    );
  }
}
export default About;