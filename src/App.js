import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import firebase_config from "./keys/key";
import Nav from "./Components/Nav";
import AppBar from "./Components/AppBar";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";
import Notification from "./Components/user/Notification";
import Profile from "./Components/user/Profile";
import Meetup from "./Components/user/Meetup";
import Timetable from "./Components/user/Timetable";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.firebase = firebase.initializeApp(firebase_config);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="Background">
          <div className="App">
            <Switch>
              <Route exact path="/" render={props => <Nav />} />
              <Route exact path="/login" render={props => <Nav />} />
            </Switch>
            <Switch>
              <Route exact path="/" render={props => <Landing />} />
              <Route exact path="/login" render={props => <Login />} />
              <Route
                exact
                path="/user/:id"
                render={props => (
                  <Notification firebase={this.firebase} {...props} />
                )}
              />
              <Route
                exact
                path="/user/profile/:id"
                render={props => (
                  <Profile firebase={this.firebase} {...props} />
                )}
              />
              <Route
                exact
                path="/user/meetup/:id"
                render={props => <Meetup firebase={this.firebase} {...props} />}
              />
              <Route
                exact
                path="/user/timetable/:id"
                render={props => (
                  <Timetable firebase={this.firebase} {...props} />
                )}
              />
              <Route render={props => <NotFound code={404} />} />
            </Switch>
            <Route path="/user/:id" render={props => <AppBar {...props} />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
