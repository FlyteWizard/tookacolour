import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { getUserID, getTitle, getUserName, chartData } from './main.js';

const title = getTitle();
const name = getUserName();
const data = chartData();

class Colour extends Component {

  render() {
    console.log(getUserID() + " " + getTitle());

    return (
      <div className="text-center">
        <p className="App-intro margin-top-1">
          <span>{title}</span> by <span>{ name }</span>
        </p>
        <Pie
          data={data}
        />
        <Link to='/' className="btn btn-create margin-top-1">Create Another</Link>
      </div>
    );
  }
}

export default Colour;
