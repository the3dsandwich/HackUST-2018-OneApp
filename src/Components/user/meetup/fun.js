import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

export default class Fun extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
  }

  render() {
    return <Segment className="User-Container" />;
  }
}
