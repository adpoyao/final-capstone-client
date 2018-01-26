import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleView } from '../../actions/views';

import MoodView from './MoodView';
import PanicButton from './PanicButton';
import { fetchClassesByStudent } from '../../actions/classes';

import './Dashboard-Student.css';

export class DashboardStudent extends Component {
  componentDidMount() {
    this.props.dispatch(toggleView('student'));
    this.props.dispatch(fetchClassesByStudent(this.props.userId));
  }

  render() {

    if(this.props.loading){
      return <div>Loading...</div>
    }

    let studentDash;
    // Condition: if student-user has no class enrolled
    if(this.props.hasEnrolledClasses.length === 0){
      studentDash = (
      <div className='no-class-student-container'>

        <div className="not-enrolled">
          <p>You're not enrolled in any classes.</p>
          <Link to='/student/classes' style={{ textDecoration: 'none' }}><p className='get-started'>Let's get you started.</p></Link>
        </div>
      </div>
      )
    }
    // Condition: if student-user has class(es) enrolled
    else if(this.props.hasEnrolledClasses){
      studentDash = (
      <div className='student-with-classes-dashboard'>
        <div className='enrolled'>
          <p>Hello there, {this.props.firstName}.</p>
          <h3 className='user-first-name'>How are you feeling right now?</h3>
        
          <MoodView />
          <PanicButton />
        </div>
      </div>
      )
    }

    return(
      <div className='dashboard-student-container'>
        
        <div id="clouds">
          <div className="cloud x1"></div>
          <div className="cloud x2"></div>
          <div className="cloud x3"></div>
          <div className="cloud x4"></div>
          <div className="cloud x5"></div>
        </div>

        {studentDash}
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser ? state.auth.currentUser.id : 0,
  firstName: state.auth.currentUser.firstName,
  hasEnrolledClasses: state.classes.enrolledClasses,
  loading: state.classes.loading,
})

export default connect(mapStateToProps)(DashboardStudent);
