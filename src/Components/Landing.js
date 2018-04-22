import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";
import img from "../img/logo.jpg";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Segment className="Landing-Container">
        <img src={img} alt="logo" />
        <p>
          The <i>only</i> app you'll need to manage your time
        </p>
        <Button as={Link} to="/login" color="pink" content="Start" />
      </Segment>
    );
  }
}
