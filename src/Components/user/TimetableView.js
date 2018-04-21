import React, { Component } from "react";
import { Table } from "semantic-ui-react";

export default class GroupDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
  }

  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    );
  }
}
