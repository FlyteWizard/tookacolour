import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Colour extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
          <span>Untitled</span> by <span>UserName</span>
        </p>
        <div className="colours">
          <p className="colour"></p>
          <p className="colour"></p>
          <p className="colour"></p>
        </div>
        <Link to='/' className="btn btn-create">Create Another</Link>
      </div>
    );
  }
}


export default Colour;
