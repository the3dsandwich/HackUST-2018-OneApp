import React, { Component } from "react";

export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.id
    };
    this.firebase = this.props.firebase;
  }

  render() {
    return <h1>User {this.state.userId}</h1>;
  }
}
