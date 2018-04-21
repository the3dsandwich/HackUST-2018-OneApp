import React, { Component } from "react";
import { Redirect } from "react-router";
import { Segment, Form, Button } from "semantic-ui-react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", redirect: false };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.setState({ username: "", password: "" });

    if (
      (this.state.username === "John" || this.state.username === "john") &&
      this.state.password === "0"
    )
      this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect)
      return (
        <Redirect
          to={"/user/notification/john" + this.state.username.toString()}
        />
      );

    return (
      <Segment inverted color="teal" className="Login-Container">
        <Form inverted onSubmit={this.handleSubmit.bind(this)}>
          <Form.Input
            fluid
            label="User Name"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}
