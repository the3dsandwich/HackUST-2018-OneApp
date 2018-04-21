import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
  }

  render() {
    return (
      <Menu widths={4} className="App-Bar" size="large">
        <Menu.Item as={Link} to={"/user/timetable/" + this.state.userId}>
          <Icon name="calendar" />Timetable
        </Menu.Item>
        <Menu.Item as={Link} to={"/user/meetup/" + this.state.userId}>
          <Icon name="food" />Meetup
        </Menu.Item>
        <Menu.Item as={Link} to={"/user/notification/" + this.state.userId}>
          <Icon name="exclamation" />Notification
        </Menu.Item>
        <Menu.Item as={Link} to={"/user/profile/" + this.state.userId}>
          <Icon name="user" />Profile
        </Menu.Item>
      </Menu>
    );
  }
}
