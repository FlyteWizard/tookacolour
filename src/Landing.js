import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Import functions from main.js
import { putID } from './main.js';

// Landing Page
class Landing extends Component {

  // Function to invoke other functions
  // It takes in a variable
  sendID(userID) {
    // Call the function putID and send it the userID that the user inputed
    putID(userID);
  }

  // React.js Code - componentDidMount
  // Activates the Bootstrap tooltip
  componentDidMount() {
    window.$('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="row padding-top-15">
        <div className="col-12">
          {/* Instructions */}
          <p className="App-intro">
            {/*  Bootstrap Tooltip if users don't know what an ID is */}
            Insert a tookapic photo ID the input below. <i className="fas fa-question" data-toggle="tooltip" data-placement="top" title="The ID is the numbers you see in the URL when you view the image."><span className="sr-only"></span></i>
          </p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
          {/*  Input field for ID */}
          <input id="id" type="text" className="form-control" placeholder="ID"></input>
          {/*  Sends the input information to a function that calls another function */}
          {/*  Links/Switchs to the Colour page */}
          <Link onClick={(e) => this.sendID(document.getElementById('id').value)} to='/colour' className="btn btn-create btn-full margin-bottom-2">Create</Link>
        </div>
      </div>
    );
  }
}


export default Landing;
