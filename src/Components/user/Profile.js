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
      <Segment className="User-Container" id="heading">
      <div >
        <div>
          <Image src='http://www.canterbury.ac.nz/business/uce/profiles/2018-profiles-/1520384876370_UCE-Student-Profile-Matthew-Ruffell-w1000.jpg' size='small' id="pic" />
        </div>
      </div>
        <h2 id="profile-name">{profile.name}</h2>
        <hr/>
        <br/>
        <div id="profile"><h1 id="profile-word">Profile</h1></div>
        <hr id="hr2"/>
        <h3>Age: {profile.age}</h3>
        <hr id="hr2"/>
        <h3>University: {profile.university}</h3>
        <hr id="hr2"/>
        <h3>Degree: {profile.degree}</h3>
        <hr id="hr2"/>
        <h3>Major: {profile.major}</h3>
        <hr id="hr2"/>
        <br/>
        <br/>

          <Button as={Link} to={"/login"}>
            Logout
          </Button>

      </Segment>
    );
  }
}
