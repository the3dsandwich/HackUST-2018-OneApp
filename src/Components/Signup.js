import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Segment, Button, Form, Header } from "semantic-ui-react";

const gender = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

const school = [
  { key: "CUHK", text: "The Chinese University of Hong Kong", value: "cuhk" },
  {
    key: "HKUST",
    text: "Hong Kong University of Science and Technology",
    value: "hkust"
  },
  { key: "etc", text: "etc.", value: "etc." }
];

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
  }

  handleChange = (e, { name, value }) =>
    this.setState({ [name]: value }, console.log(this.state.name));

  handleSubmit = () => {
    if (this.state.username === "john" || this.state.username === "John")
      this.setState({ redirect: true });

    this.setState({
      givenname: null,
      familyname: null,
      gender: null,
      username: null,
      password: null,
      sid: null,
      cusername: null,
      cpassword: null
    });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/user/notification/john" />;

    return (
      <Segment className="Signup-Container">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Header as="h2">Basics</Header>
          <Form.Input
            fluid
            inline
            required
            label="Given Name"
            name="givenname"
            value={this.state.givenname}
            placeholder="given name"
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            inline
            required
            label="Family Name"
            name="familyname"
            value={this.state.familyname}
            placeholder="family name"
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            inline
            label="Gender"
            options={gender}
            placeholder="Gender"
            value={this.state.gender}
            onChange={(e, { value }) => this.setState({ gender: value })}
          />
          <Form.Input
            fluid
            inline
            required
            label="Create User Name"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            inline
            required
            label="Create Password"
            name="password"
            type="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          />
          <Header as="h2">Import information</Header>
          <Form.Select
            fluid
            inline
            required
            label="Select School"
            options={school}
            placeholder="Institution"
            value={this.state.school}
            onChange={(e, { value }) => this.setState({ school: value })}
          />
          {this.state.school === "hkust" ? (
            <Form.Input
              fluid
              inline
              label="Student ID"
              name="sid"
              value={this.state.sid}
              placeholder="sid"
              onChange={this.handleChange}
            />
          ) : null}
          {this.state.school === "hkust" ? (
            <Form.Input
              fluid
              inline
              label="ITSC Account"
              name="cusername"
              value={this.state.cusername}
              placeholder="itsc<sid>@ust.hk"
              onChange={this.handleChange}
            />
          ) : null}
          {this.state.school === "hkust" ? (
            <Form.Input
              fluid
              inline
              label="Canvas password"
              name="cpassword"
              value={this.state.cpassword}
              placeholder="password"
              type="password"
              onChange={this.handleChange}
            />
          ) : null}
          <Button primary type="submit">
            Submit
          </Button>
        </Form>
      </Segment>
    );
  }
}
