import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.userId };
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link> <Link to="/login">Login</Link>{" "}
        <Link to={"/user/" + this.state.userId}>Personal Data</Link>
      </div>
    );
  }
}
