import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleView } from '../../actions/views';

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

      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>

      <p>You do not have classes created yet.</p>
      <Link to='/teacher/classes' style={{ textDecoration: 'none' }}><p className='get-started'>Let's get you started.</p></Link>
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
