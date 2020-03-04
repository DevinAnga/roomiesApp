import React from "react";
import { Route, Switch } from "react-router-dom";
import Bills from "../Bills/Bills";
import GroupChat from "../groupchat/GroupChat";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import HouseList from "../HouseList/houselist";
import Registration from "../auth/Registration";
import Login from "../auth/Login";
import UserHome from "../UserHome/UserHome";
import About from "../About/About";

export default function() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        // render={() => <Home handleLogin={this.handleLogin} />}
        render={() => <Home />}
      />
      <Route exact path="/Profile" component={Profile} />
      <Route
        exact
        path="/About"
        render={() => <About name="Pugsy" city="London" />}
      />
      <Route exact path="/Registration" render={() => <Registration />} />
      <Route
        exact
        path="/Login"
        // render={() => <Login handleLogin={this.handleLogin} />}
        render={() => <Login />}
      />
      <Route exact path="/Bills" component={Bills} />
      <Route exact path="/GroupChat" component={GroupChat} />
      <Route exact path="/HouseList" component={HouseList} />
      <Route exact path="/UserHome" component={UserHome} />
    </Switch>
  );
}