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
        <div className="nav-button">
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
        <div className="nav-button">
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
        <div className="nav-button">
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
        <div className="features-tabs-1">
          <button className="features">Feature 1</button>
          <button className="features">Feature 2</button>
          <button className="features">Feature 3</button>
        </div>
      )
      
      featuresTabs2 = (
        <div className="features-tabs-1">
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">signup</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
        </div>
      )
    }

    if(this.props.currentView === 'student'){
      studentTabs = (
        <div className="student-tabs">
          <button className="nav-student-dashboard">Dashboard</button>
          <button className="nav-student-classes">Classes</button>
          <button className="nav-student-mood-cloud">Mood Cloud</button>
        </div>
      )
    }
    
    if(this.props.currentView === 'teacher'){
      teacherTabs = (
        <div className="teacher-tabs">
          <button className="nav-teacher-dashboard">Dashboard</button>
          <button className="nav-teacher-classes">Classes</button>
          <button className="nav-teacher-students">Students</button>
        </div>
      )
    }

    if(this.props.currentView === 'teacher' || this.props.currentView === 'student'){
      logoutTab = (
        <div className="student-tabs">
          <Link to="/"><button className="logout">Logout</button></Link>
        </div>
      )
    }

    return(
      <div className="nav-bar">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
            <h2 className="site-name"><span className="logo">☁️ </span><span className="mood-cloud">Mood Cloud</span></h2>
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