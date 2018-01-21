import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { toggleView } from '../actions/views';

export class Nav extends Component {

  handleChangeView = (selectedView) => {
    this.props.dispatch(toggleView(selectedView));
  }
  
  render() {
    let landingPageTabs, featuresTabs1, featuresTabs2, studentTabs, teacherTabs, logoutTab;
    
    if(this.props.currentView === 'landing-page'){
      landingPageTabs = (
        <div className="nav-button">
          <Link id='features' to="/feature" style={{ textDecoration: 'none' }}>
            <button 
              className="features" 
              // TODO: Need test
              onClick={()=>this.handleChangeView('features')}>
              Features
            </button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">Signup</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
        </div>
      )
    }
    
    if(this.props.currentView === 'features'){
      // TODO: Need test
      featuresTabs1 = (
        <div className="features-tabs-1">
          <button className="features">Feature 1</button>
          <button className="features">Feature 2</button>
          <button className="features">Feature 3</button>
        </div>
      )
      
      // TODO: Need test
      featuresTabs2 = (
        <div className="features-tabs-1">
          <Link to="/signup" style={{ textDecoration: 'none' }}><button className="signup">signup</button></Link>
          <Link to="/login" style={{ textDecoration: 'none' }}><button className="login">Login</button></Link>
        </div>
      )
    }

    // If(role === student)
    studentTabs = (
      <div className="student-tabs">
        <button className="nav-student-dashboard">Dashboard</button>
        <button className="nav-student-classes">Classes</button>
        <button className="nav-student-mood-cloud">Mood Cloud</button>
      </div>
    )

    // If(role === teacher)
    teacherTabs = (
      <div className="teacher-tabs">
        <button className="nav-teacher-dashboard">Dashboard</button>
        <button className="nav-teacher-classes">Classes</button>
        <button className="nav-teacher-students">Students</button>
      </div>
    )

    // If(loggedIn)
    logoutTab = (
      <div className="student-tabs">
        <Link to="/"><button className="logout">Logout</button></Link>
      </div>
    )

    return(
      // <h1>Nav</h1>
      <div className="header-bar">
        <Link to="/" className="logo-container" style={{ textDecoration: 'none' }}>
            {/* TODO: Need test */}
            <h1 className="site-name" onClick={()=>this.handleChangeView('landing-page')}><span className="logo">☁️ </span><span className="mood-cloud">Mood Cloud</span></h1>
        </Link>
        {landingPageTabs}
        {featuresTabs1}
        {featuresTabs2}
        {/* {studentTabs}
        {teacherTabs}
        {logoutTab} */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentView: state.view.selectedView
})

export default connect(mapStateToProps)(Nav)