import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Features from './components/LandingPage/Features';
import LoginPage from './components/LandingPage/LoginPage';
import LandingPage from './components/LandingPage/LandingPage';
import RegistrationPage from './components/LandingPage/RegistrationPage';
import DashboardStudent from './components/Dashboard-Student/Dashboard-Student';
import DashboardTeacher from './components/Dashboard-Teacher/Dashboard-Teacher';
import ClassesStudent from './components/Classes-Student/Classes-Student';
import ClassesTeacher from './components/Classes-Teacher/Classes-Teacher';
import StudentsDetail from './components/Students/StudentDetail';
import MoodCloud from './components/MoodCloud/MoodCloud';
import Students from './components/Students/Students';

import './App.css';

export class App extends Component {

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
            <Route exact path="/teacher/students/:studentID" component={StudentsDetail} />

          </Switch>
        </div>
    );
  }
}

export default withRouter(connect()(App));
