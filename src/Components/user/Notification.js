import React, { Component } from "react";
import { Segment, Message, Header } from "semantic-ui-react";
import Push from "push.js";

const notifications = [
  {
    type: "class",
    data: {
      leaveTime: new Date(1524402900),
      transportation: "Bus No. 2",
      name: "CSCI 2100 Data Structures"
    },
    notifyTime: new Date(1524402000),
    color: "blue"
  },
  {
    type: "class",
    data: {
      leaveTime: new Date(1524409200),
      transportation: "Bus No. 3",
      name: "UGFW 1000 In Dialogue with Workload"
    },
    notifyTime: new Date(1524402000),
    color: "blue"
  },
  {
    type: "leisure",
    data: {
      leaveTime: new Date(1524424800),
      transportation: "walk",
      name: "Gym"
    },
    notifyTime: new Date(1524423600),
    color: "purple"
  },
  {
    type: "leisure",
    data: {
      leaveTime: new Date(1524432600),
      transportation: "walk",
      name: "Home Sweet Home"
    },
    notifyTime: new Date(1524430800),
    color: "yellow"
  },
  {
    type: "alarm",
    data: {
      bedTime: new Date(),
      wakeTime: new Date()
    }
  }
];

const dues = [
  {
    title: "DUE",
    description: "Programming HW5 (Due 23/4 23:59)"
  },
  {
    title: "STUDY",
    description: "Study Linear Algebra Next!"
  },
  {
    title: "STUDY",
    description: "Study University English Next!"
  }
];

const square = { width: 175, height: 150, padding: 30 };

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
    this.firebase = this.props.firebase;
  }

  handleClick() {
    Push.create("Next up: " + notifications[0].data.name, {
      body:
        "Leave by " +
        notifications[0].data.leaveTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        }) +
        " to arrive on time",
      requireInteraction: true,
      tag: "tag",
      timeout: 10000,
      vibrate: [200, 100],
      silent: false
    });
  }

  render() {
    return (
      <Segment className="User-Segment">
        <Header as="h1">{this.state.userId}'s Schedule</Header>
        <Segment className="User-Notification-Notifications">
          {notifications.map(
            no =>
              no.type === "alarm" ? null : (
                <Message
                  key={no.notifyTime}
                  header={"Next up: " + no.data.name}
                  content={
                    "Leave by " +
                    no.data.leaveTime.toLocaleTimeString(["en-hk"], {
                      hour: "2-digit",
                      minute: "2-digit"
                    }) +
                    " to arrive on time"
                  }
                  color={no.color}
                />
              )
          )}
        </Segment>
        <Segment className="User-Notification-Dues">
          {dues.map(due => (
            <Segment
              circular
              inverted
              color={due.title === "DUE" ? "red" : "orange"}
              style={square}
            >
              <Header as="h2">
                {due.title}
                <Header.Subheader>{due.description}</Header.Subheader>
              </Header>
            </Segment>
          ))}
        </Segment>
      </Segment>
    );
  }
}
