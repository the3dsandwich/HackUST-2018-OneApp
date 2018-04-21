import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

export default class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.id
    };
    this.firebase = this.props.firebase;
  }

  render() {
    return (
      <Segment className="User-Container">
        <h1>Wiiiiii</h1>
      </Segment>
    );
  }
}
