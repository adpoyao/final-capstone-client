import React, { Component } from 'react';

import ClassDetailStudent from './ClassDetail-Student';
import SearchClass from './SearchClass';

export default class ClassesStudent extends Component {
  render() {
    let enrolledClasses;
    // Condition: if student-user has class enrolled
    // Mapping happens here
    enrolledClasses = (
    <div className='enrolled-classes-container'>
      <h3>Current Term</h3>
      <ClassDetailStudent/>
      <ClassDetailStudent/>
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