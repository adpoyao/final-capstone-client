import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudentDetail, toggleInitialMoodSearch } from '../../actions/students';

import './StudentListByClass.css';

export class StudentListByClass extends Component {
  handleStudentDetail = (studentID) => {
    this.props.dispatch(fetchStudentDetail(studentID));
    this.props.dispatch(toggleInitialMoodSearch(true));
  }
  
  render() {
        
    let result;
    result = this.props.studentList.map((course, index) => 
          <li className='class-name-2' key={index}>
            <p className='course-name'>{course.className}</p>
            <ul className='students-ul'>
              {course.students.map((student, index2) =>
                <li key={index2} className='student-name-2' onClick={()=>this.handleStudentDetail(student._id)}>
                  <p className='pupil-name'>{student.lastName}, {student.firstName}</p>
                  {/* <p>Last Mood Submission</p>
                  <p>Mood:</p>
                  <p>Caption:</p>
                  <p>Submitted on:</p> */}
                </li>
                )}
            </ul>
          </li>)

  
    return(
      <div className='student-list-by-class-container'>
        <h3>Your Enrolled Students</h3>
        <ul className='student-list-ul'>
          {result}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser ? state.auth.currentUser.id : 0,
  studentList: state.yourStudents.students,
});

export default connect(mapStateToProps)(StudentListByClass);