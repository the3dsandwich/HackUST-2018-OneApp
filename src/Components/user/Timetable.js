import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import TimetableView from "./TimetableView";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
    this.firebase = this.props.firebase;
  }

  render() {
    return (
      <Segment className="User-Container">
        <h1>{this.state.userId}'s Timetable</h1>
      </Segment>
    );
  }
}
