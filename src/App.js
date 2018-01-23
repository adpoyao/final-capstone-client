import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import Nav from './components/Nav';
import Features from './components/Features';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import RegistrationPage from './components/RegistrationPage';
import DashboardStudent from './components/Dashboard-Student';
import DashboardTeacher from './components/Dashboard-Teacher';
import ClassesStudent from './components/Classes-Student';
import ClassesTeacher from './components/Classes-Teacher';
import MoodCloud from './components/MoodCloud';
import Students from './components/Students';


import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={RegistrationPage} />

            {/* Student View */}
            <Route exact path="/student/dashboard" component={DashboardStudent} />
            <Route exact path="/student/classes" component={ClassesStudent} />
            <Route exact path="/student/moodcloud" component={MoodCloud} />

            {/* Teacher View */}
            <Route exact path="/teacher/dashboard" component={DashboardTeacher} />
            <Route exact path="/teacher/classes" component={ClassesTeacher} />
            <Route exact path="/teacher/students" component={Students} />

          </Switch>
        </div>
    );
  }
}

export default App;
