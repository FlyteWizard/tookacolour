import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo-SM.png';
import Landing from './Landing';
import Colour from './Colour';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-md navbar-light bg-beige">
          <a className="navbar-brand" href="/">
            <img src={logo} className="App-logo d-inline-block align-top" alt="logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link" rel="noopener noreferrer" target="_blank" href="https://github.com/FlyteWizard"><i className="fas fa-book"><span className="sr-only">Book Icon</span></i>Documentation</a>
              <a className="nav-item nav-link" rel="noopener noreferrer" target="_blank" href="https://github.com/FlyteWizard/tookacolour"><i className="fab fa-github"><span className="sr-only">Github Icon</span></i>Github</a>
            </div>
          </div>
        </nav>
        <div className="container-fluid">

          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/colour' component={Colour}/>
          </Switch>

        </div>
      </div>
    );
  }
}

export default App;
