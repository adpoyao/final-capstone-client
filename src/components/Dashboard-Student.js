import React, { Component } from 'react';
import {connect} from 'react-redux';
import { toggleView } from '../actions/views';

import MoodView from './MoodView';

export class DashboardStudent extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('student'));
  }

  render() {
    let studentDash;
    // Condition: if student-user has no class enrolled
    studentDash = (
    <div className='no-class-student-container'>
      <p>You don't have a class yet!</p>
      <img src='#'/>
      <p>Let's get you started.</p>
      <button className='get-started'>Add a class</button>
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