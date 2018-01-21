import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import Nav from './components/Nav';
import Features from './components/Features';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/RegistrationPage';

import './App.css';

class App extends Component {
  render() {
    return (
      // <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={RegistrationPage} />
          </Switch>
        </div>
      // </Router>
    );
  }
}

export default App;
