import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleView } from '../../actions/views';

import MoodView from './MoodView';

import './Dashboard-Student.css';

export class DashboardStudent extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('student'));
  }

  render() {
    let studentDash;
    // Condition: if student-user has no class enrolled
    studentDash = (
    <div className='no-class-student-container'>

      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>

      <p>You're not enrolled in any classes.</p>
      <Link to='/student/classes' style={{ textDecoration: 'none' }}><p className='get-started'>Let's get you started.</p></Link>
    </div>
    )
    // Condition: if student-user has class(es) enrolled
    // studentDash = <MoodView />

    return(
      <div className='dashboard-student-container'>
      {studentDash}
      <MoodView />
      </div>
    )
  }
}

export default connect()(DashboardStudent);
