// Import React, Router Dom (Allows for SPA)
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Logo
import logo from './logo-SM.png';
// Import Landing Page and Colour Page
import Landing from './Landing';
import Colour from './Colour';
// Import CSS
import './App.css';

// Main Page
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Bootstrap Navigation - It will be on all pages */}
        <nav className="navbar navbar-expand-md navbar-light bg-beige">
          <a className="navbar-brand" href="/">
            <img src={logo} className="app-logo d-inline-block align-top" alt="tookacolour Logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {/*  Links to Github Docs */}
              <a className="nav-item nav-link" rel="noopener noreferrer" target="_blank" href="https://github.com/FlyteWizard/tookacolour/blob/master/CSC130-Project1-V00832004.pdf"><i className="fas fa-book"><span className="sr-only">Book Icon</span></i>Documentation</a>
              <a className="nav-item nav-link" rel="noopener noreferrer" target="_blank" href="https://github.com/FlyteWizard/tookacolour"><i className="fab fa-github"><span className="sr-only">Github Icon</span></i>Github</a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">

          {/*  Switch between components */}
          <Switch>
            {/*  Set Paths */}
            <Route exact path='/' component={Landing}/>
            <Route exact path='/colour' component={Colour}/>
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
