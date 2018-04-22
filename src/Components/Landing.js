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
        <h3>
          <i>Any</i>one, <i>Any</i> place, <i>Any</i>time
        </h3>
        <Button as={Link} to="/login" color="pink" content="Start" />
      </Segment>
    );
  }
}
