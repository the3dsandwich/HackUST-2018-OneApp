import React, { Component } from "react";
import { Segment, Header, Button, Table, Divider } from "semantic-ui-react";

const square = { width: 100, height: 100 };

const courses = [
  { code: "CSCI 2100" },
  { code: "COMM 2010" },
  { code: "MGNT 1020" },
  { code: "UGFW 1000" }
];

export default class GroupDiscussion extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id, currentCourse: "" };
  }

  handleClick(e, { name }) {
    console.log(name);
    this.setState({ currentCourse: name });
  }

  render() {
    return (
      <Segment className="User-Container">
        <div className="GP-Noscroll">
          <div className="GP-Courses">
            <Table>
              <Table.Header>
                <Table.Row>
                  {courses.map(course => (
                    <Table.HeaderCell>
                      <Segment
                        key={course.code}
                        as={Button}
                        circular
                        style={square}
                        name={course.code}
                        onClick={this.handleClick.bind(this)}
                      >
                        <Header as="h4">{course.code}</Header>
                      </Segment>
                    </Table.HeaderCell>
                  ))}
                </Table.Row>
              </Table.Header>
            </Table>
          </div>
        </div>
        <Divider />
        <Header as="h2">
          {this.state.currentCourse
            ? this.state.currentCourse
            : "select course"}
        </Header>
      </Segment>
    );
  }
}
