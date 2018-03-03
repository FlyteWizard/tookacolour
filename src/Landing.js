import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { putID } from './main.js';

class Landing extends Component {

  sendID(userID) {
    putID(userID);
  }

  componentDidMount() {
    window.$('[data-toggle="tooltip"]').tooltip();
  }

  render() {
    return (
      <div className="row padding-top-15">
        <div className="col-12">
          <p className="App-intro">
            Insert a tookapic photo ID the input below. <i className="fas fa-question" data-toggle="tooltip" data-placement="top" title="The ID is the numbers you see in the URL when you view the image."><span className="sr-only"></span></i>
          </p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
          <input id="id" type="text" className="form-control" placeholder="ID"></input>
          <Link onClick={(e) => this.sendID(document.getElementById('id').value)} to='/colour' className="btn btn-create btn-full">Create</Link>
        </div>
      </div>
    );
  }
}


export default Landing;
