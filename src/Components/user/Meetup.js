import React, { Component } from "react";
import { Segment, Header, Divider, Button } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const square = { width: 250, height: 250 };

export default class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = { render: "" };
    this.firebase = this.props.firebase;
  }

  handleClick(e, { name }) {
    this.setState({ render: name });
  }

  render() {
    if (this.state.render === "groupdiscussion")
      return <Redirect to={"/user/groupdiscussion/john"} />;
    if (this.state.render === "fun") return <Redirect to={"/user/fun/john"} />;

    return (
      <Segment className="User-Container">
        <div className="User-Meetup-Container">
          <Segment
            as={Button}
            circular
            style={square}
            name="groupdiscussion"
            onClick={this.handleClick.bind(this)}
          >
            <Header as="h1">GROUP DISCUSSION</Header>
          </Segment>

          <Divider horizontal> OR </Divider>

          <Segment
            as={Button}
            circular
            style={square}
            name="fun"
            onClick={this.handleClick.bind(this)}
          >
            <Header as="h1">FUN</Header>
          </Segment>
        </div>
      </Segment>
    );
  }
}
