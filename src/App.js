import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import firebase_config from "./keys/key";
import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import UserData from "./Components/UserData";
import NotFound from "./Components/NotFound";

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
                path="/user/:id"
                render={props => (
                  <UserData firebase={this.firebase} {...props} />
                )}
              />
              <Route render={props => <NotFound code={404} />} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
