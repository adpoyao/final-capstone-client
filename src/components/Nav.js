import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { toggleView } from '../actions/views';

import './Nav.css';

export class Nav extends Component {

  handleChangeView = (selectedView) => {
    this.props.dispatch(toggleView(selectedView));
  }
  
  render() {
    let landingPageTabs, featuresTabs1, featuresTabs2, studentTabs, teacherTabs, logoutTab;
    
    if(this.props.currentView === 'landing-page'){
      landingPageTabs = (
        <div className="nav-button right">
          <Link id='features' to="/features" style={{ textDecoration: 'none' }}>
            <button className="features">Features</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">Signup</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
        </div>
      )
    }

    if(this.props.currentView === 'signup'){
      landingPageTabs = (
        <div className="nav-button right">
          <Link id='features' to="/features" style={{ textDecoration: 'none' }}>
            <button className="features">Features</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup active-nav-button">Signup*</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
        </div>
      )
    }

    if(this.props.currentView === 'login'){
      landingPageTabs = (
        <div className="nav-button right">
          <Link id='features' to="/features" style={{ textDecoration: 'none' }}>
            <button className="features">Features</button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">Signup</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login active-nav-button">Login*</button></Link>
        </div>
      )
    }
    
    if(this.props.currentView === 'features'){
      featuresTabs1 = (
        <div className="nav-button features-tabs-1 center">
          <button className="features">Feature 1</button>
          <button className="features">Feature 2</button>
          <button className="features">Feature 3</button>
        </div>
      )
      
      featuresTabs2 = (
        <div className="nav-button features-tabs-1 right">
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">signup</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
        </div>
      )
    }

    if(this.props.currentView === 'student'){
      studentTabs = (
        <div className="nav-button student-tabs center">
          <Link to="/student/dashboard"><button className="nav-student-dashboard">Dashboard</button></Link>
          <Link to="/student/classes"><button className="nav-student-classes">Classes</button></Link>
          <Link to="/student/moodcloud"><button className="nav-student-mood-cloud">Mood Cloud</button></Link>
        </div>
      )
    }
    
    if(this.props.currentView === 'teacher'){
      teacherTabs = (
        <div className="nav-button teacher-tabs center">
          <Link to="/teacher/dashboard"><button className="nav-teacher-dashboard">Dashboard</button></Link>
          <Link to="/teacher/classes"><button className="nav-teacher-classes">Classes</button></Link>
          <Link to="/teacher/students"><button className="nav-teacher-students">Students</button></Link>
        </div>
      )
    }

    if(this.props.currentView === 'teacher' || this.props.currentView === 'student'){
      logoutTab = (
        <div className="nav-button log-out-tabs right">
          <Link to="/"><button className="logout">Logout</button></Link>
        </div>
      )
    }

    return(
      <div className="nav-bar">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
            <h2 className="site-name"><img className="logo" src="https://www.startany.com/content/images/ogimage.png"/><span className="mood-cloud">MOOD CLOUD</span></h2>
        </Link>
        {landingPageTabs}
        {featuresTabs1}
        {featuresTabs2}
        {studentTabs}
        {teacherTabs}
        {logoutTab}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentView: state.view.selectedView
})

export default connect(mapStateToProps)(Nav)