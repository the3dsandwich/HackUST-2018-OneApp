import React, { Component } from "react";

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Error {this.props.code}</h1>;
  }
}
