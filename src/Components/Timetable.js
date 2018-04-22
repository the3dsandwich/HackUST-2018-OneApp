import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";
import ttimg from "../img/timetablee.jpg";

export default class Timetable extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
    this.firebase = this.props.firebase;
  }

  render() {
    return (
      <Segment className="User-Container">
        <Header as="h1">John's Timetable</Header>
        <div className="User-Timetable-Container">
          <img src={ttimg} alt="time table" />
        </div>
      </Segment>
    );
  }
}
