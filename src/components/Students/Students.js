import React, { Component } from 'react';
import StudentListByClass from './StudentListByClass';

import './Students.css';

export default class Students extends Component {
  render() {
    let listByClass;
    // Condition: if student-user has no class enrolled
    listByClass = (
      <div className='no-student-list-container'>
        <p>You do not have students enrolled in your classes.</p>
        <p className='instruction-to-search'>Tell them to search for your classes by your last name.</p>
    </div>
      )
      // Condition: if teacher-user has students linked
      // listByClass = (
      //   <div className='student-list-container'>
      //     <p>Here are the students who are enrolled in your classes:</p>
      //     <StudentListByClass />
      //   </div>
      // )

    return(
      <div className='students-container'>
      {/* {listByClass} */}
      <h3>Here are students who are enrolled in your classes:</h3>
      <StudentListByClass />
      </div>
    )
  }
}