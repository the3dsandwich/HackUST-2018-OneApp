import { React, Component } from "react";
import firebase from "firebase";
import firebase_config from "./keys/key";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.firebase = firebase.initializeApp(firebase_config);
  }
}
