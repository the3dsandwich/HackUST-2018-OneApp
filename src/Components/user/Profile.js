import React, { Component } from "react";
import {
  Segment,
  Image,
  Button,
  Icon,
  Dimmer,
  Loader
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const profile = {
  name: "John Gallagher",
  contact: "johnghr0210@gmail.com",
  university: "HKUST",
  degree: "Bachelor",
  major: "Computer Science"
};

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.match.params.id,
      loaded: false,
      prepared: false
    };
    this.firebase = this.props.firebase;
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 2000);
    setTimeout(() => {
      this.setState({ prepared: true });
    }, 3000);
  }

  render() {
    if (this.state.loaded && this.state.prepared)
      return (
        <Segment className="User-Container" id="heading">
          <div>
            <div>
              <Image
                src="http://www.canterbury.ac.nz/business/uce/profiles/2018-profiles-/1520384876370_UCE-Student-Profile-Matthew-Ruffell-w1000.jpg"
                size="small"
                id="pic"
              />
            </div>
          </div>
          <h2 id="profile-name">
            <Icon name="user" />
            {profile.name}
          </h2>
          <hr />
          <div id="body">
            <br />
            <div id="profile">
              <h1 id="profile-word">Profile</h1>
            </div>
            <hr id="hr2" />
            <h3>
              <Icon name="envelope" />Contact: {profile.contact}
            </h3>
            <hr id="hr2" />
            <h3>
              <Icon name="id card" /> University: {profile.university}
            </h3>
            <hr id="hr2" />
            <h3>
              <Icon name="graduation cap" /> Degree: {profile.degree}
            </h3>
            <hr id="hr2" />
            <h3>
              <Icon name="laptop" /> Major: {profile.major}
            </h3>
            <hr id="hr2" />
            <br />
            <Button as={Link} to={"/login"} id="logout">
              Logout
            </Button>
          </div>
        </Segment>
      );
    return (
      <Segment className="User-Container">
        <Dimmer active>
          <Loader />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {this.state.loaded === false
            ? "Creating and Importing..."
            : this.state.prepared === false
              ? "Fetching Profile Data..."
              : null}
        </Dimmer>
      </Segment>
    );
  }
}
