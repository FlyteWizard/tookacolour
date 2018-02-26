import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  alertHello() {
    console.log("hello");
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <p className="App-intro">
            Insert a tookapic URL in the input below.
          </p>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 col-xs-12">
          <input type="text" className="form-control" placeholder="https://"></input>
          <Link onClick={(e) => this.alertHello(e)} to='/colour' className="btn btn-create btn-full">Create</Link>
        </div>
      </div>
    );
  }
}


export default Landing;
