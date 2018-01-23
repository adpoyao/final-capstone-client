import React, { Component } from 'react';
import StudentListByClass from './StudentListByClass';

export default class Students extends Component {
  render() {
    let listByClass;
    // Condition: if student-user has no class enrolled
    listByClass = (
      <div className='no-student-list-container'>
        <p>You don't have any students linked</p>
      </div>
      )
      // Condition: if teacher-user has students linked
      // listByClass = (
      //   <div className='student-list-container'>
      //     <p>Here are your students, categorized by class</p>
      //     <StudentListByClass />
      //   </div>
      // )

    return(
      <div className='students-container'>
      {listByClass}
      <p>Here are your students, categorized by class</p>
      <StudentListByClass />
      </div>
    )
  }
}