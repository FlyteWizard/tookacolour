import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// Import chartjs - Pie Graph
import { Pie } from 'react-chartjs-2';
// Import functions from main.js
import { getTitle, getURL, chartData } from './main.js';

// Colour Page
class Colour extends Component {

  render() {
    // Get the data
    // This gets loaded when the app page loads
    // So it is loaded before the callAPI function is called
    // So for now I just hardcode data, but ideally I would want to fix this so it works
    // Maybe try to do callAPI in the Landing page and calling the functions inside main.js
    let data = chartData();
    let title = getTitle();
    let url = getURL();

    return (
      <div className="text-center">
        <p className="App-intro margin-top-1">
          {/* Link to image and title */}
          <a className="nav-item nav-link" rel="noopener noreferrer" target="_blank" href={url}>{title}</a>
        </p>
        {/*  Pie Chart */}
        <Pie
          data={data}
        />
        {/* Go back to home so you can create another graph */}
        <Link to='/' className="btn btn-create margin-top-1 margin-bottom-2">Create Another</Link>
      </div>
    );
  }
}

export default Colour;
