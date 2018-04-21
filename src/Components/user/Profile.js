import React, { Component } from "react";
import { Segment, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import profilePic from './student_profile.jpg';
//const url = require('./student_profile.jpg');


  const profile = {
    name: 'John Gallagher',
    age: 20,
    university: 'HKUST',
    degree: 'Bachelor',
    major: 'Computer Science',
  }

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: this.props.match.params.id };
    this.firebase = this.props.firebase;
  }

  render() {
    const url = '/src/Components/user/student_profile.jpg';
    return (
      <Segment className="User-Container">
        <h1>{this.state.userId}</h1>
        <div>
          <Image src='http://www.canterbury.ac.nz/business/uce/profiles/2018-profiles-/1520384876370_UCE-Student-Profile-Matthew-Ruffell-w1000.jpg' size='small' />
        </div>
        <h3>My Profile</h3>
        <h4>Name: {profile.name}</h4>
        <h4>Age: {profile.age}</h4>
        <h4>University: {profile.university}</h4>
        <h4>Degree: {profile.degree}</h4>
        <h4>Major: {profile.major}</h4>

          <Button as={Link} to={"/login"}>
            Logout
          </Button>

      </Segment>
    );
  }
}
