import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleView } from '../actions/views';

import EmotionAlert from './EmotionAlert';

export class DashboardTeacher extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('teacher'));
  }

  render() {
    let teacherDash;
    // Condition: if teacher-user has no class created
    teacherDash = (
    <div className='no-class-teacher-container'>
      <p>You don't have any classes open yet.</p>
      <img src='#'/>
      <p>Let's get you started.</p>
      <Link to='/teacher/classes'><button className='get-started'>Create a class</button></Link>
    </div>
    )
    // Condition: if teacher-user has class(es) enrolled
    // teacherDash = <EmotionAlert />

    return(
      <div className='dashboard-teacher-container'>
      {teacherDash}
      <EmotionAlert />
      </div>
    )
  }
}

export default connect()(DashboardTeacher);