import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Profile from './Profile';
import About from './About';
import Bills from './Bills';
import GroupChat from './components/GroupChat';
import "./app.css";

// import './main.module.css'
// import GenericButton from './GenericButton';
// import Example from './Nav';
// import 'bootstrap/dist/css/bootstrap.css';
// import { NavLink } from 'reactstrap';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./app.css";
import Home from './home/home';
// import TextBox from './TextBox';
// import NavSection from './NavSection';
// import Navbar from './Navbar';
// import 'bootstrap/dist/css/bootstrap.css';
// import Example from './Nav';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.


class App extends Component {
    render() {
        return (
            <div className="App" >
                <nav className='App-nav'>
                    <NavLink activeClassName='active-page' to='/Profile'>
                        Edit
                    </NavLink>
                    <NavLink activeClassName='active-page' to='/About'>
                        About
                    </NavLink>
                    <NavLink activeClassName='active-page' to='/Bills'>
                        Bills
                        </NavLink>
                    <NavLink activeClassName='active-page' to='/GroupChat'>
                        GroupChat
                    </NavLink>
                </nav>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route exact path='/Profile' component={Profile} />
                    <Route exact path='/About' render={() => <About name='Pugsy' city='London'/>} />
                    <Route exact path='/Bills' component={Bills} />
                    <Route exact path='/About' render={() => <About name='Pugsy' city='London' />} />
                    <Route exact path='/GroupChat' component={GroupChat} />
                </Switch>
            </div >
        );
    }
}

export default App;