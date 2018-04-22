import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.userId };
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Menu
        inverted
        pointing
        color="pink"
        widths={3}
        className="Nav"
        size="large"
      >
        <Menu.Item as={Link} to="/" name="Home" />
        <Menu.Item name="OneApp" />
        <Menu.Item as={Link} to="/login">
          <Icon name="user circle outline" />
          Login
        </Menu.Item>
      </Menu>
    );
  }
}
