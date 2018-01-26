import React, { Component } from 'react';

import ClassDetailStudent from './ClassDetail-Student';
import SearchClass from './SearchClass';

import './Classes-Student.css';

export default class ClassesStudent extends Component {
  render() {
    let enrolledClasses;
    // Condition: if student-user has class enrolled
    enrolledClasses = (
    <div className='enrolled-classes-container'>
      <h3>Current Term</h3>
      <ClassDetailStudent/>
    </div>
    )

    return(
      <div className='classes-student-container'>
        {enrolledClasses}
        <SearchClass />
      </div>
    )
  }
}